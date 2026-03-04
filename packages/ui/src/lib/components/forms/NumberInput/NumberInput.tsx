/**
 * NumberInput Component
 *
 * Design Principles:
 * - Stepper buttons for increment/decrement
 * - Min/max/step validation
 * - Format options for display
 * - Carbon-aligned validation patterns
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { numberInputVariants, numberInputInputVariants, numberInputStepperVariants } from './NumberInput.variants';
import type { NumberInputProps } from './NumberInput.types';

// ============================================================================
// NumberInput Component
// ============================================================================

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      wrapperClassName,
      size = 'md',
      variant = 'default',
      value: controlledValue,
      defaultValue,
      onChange,
      min,
      max,
      step = 1,
      hideSteppers = false,
      formatOptions,
      locale,
      label,
      description,
      error,
      warn,
      required = false,
      hideLabel = false,
      leftIcon,
      disabled = false,
      readOnly = false,
      'data-testid': testId,
      id: providedId,
      placeholder = '0',
      ...props
    },
    ref
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const inputId = providedId || generatedId;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;
    const warnId = `${inputId}-warn`;

    // Calculate effective states
    const effectiveDisabled = !readOnly && disabled;
    const hasError = !readOnly && !effectiveDisabled && !!error;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = React.useState<number | null>(
      defaultValue ?? null
    );

    const currentValue = controlledValue ?? internalValue;

    // Formatter for display
    const formatter = React.useMemo(() => {
    if (formatOptions) {
      return new Intl.NumberFormat(locale || navigator.language, formatOptions);
    }
    return null;
  }, [formatOptions, locale]);

    // Parse localized number back to number
    const parseLocalizedNumber = (input: string): number | null => {
    if (!input || input.trim() === '') return null;

    // Remove formatting characters (thousands separators, currency symbols)
    const cleanInput = input
      .replace(/[^\d.,\-−]/g, '') // Keep digits, decimal, comma, minus
      .replace(/,/g, ''); // Remove thousand separators

    const parsed = parseFloat(cleanInput);
    return isNaN(parsed) ? null : parsed;
  };

    // Format number for display
    const formatForDisplay = (num: number | null): string => {
    if (num === null || num === undefined) return '';
    if (formatter) {
      return formatter.format(num);
    }
    return String(num);
  };

    // Clamp value within min/max
    const clampValue = (num: number | null): number | null => {
    if (num === null) return null;
    let clamped = num;
    if (min !== undefined) clamped = Math.max(min, clamped);
    if (max !== undefined) clamped = Math.min(max, clamped);
    return clamped;
    };

    // Handle value change
    const handleChange = (newValue: number | null) => {
    const clamped = clampValue(newValue);
    if (!controlledValue) {
      setInternalValue(clamped);
    }
    onChange?.(clamped);
  };

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseLocalizedNumber(e.target.value);
    handleChange(parsed);
    // Update display value to what user typed
    if (!controlledValue) {
      setInternalValue(parsed);
    }
    onChange?.(parsed);
  };

    // Handle stepper increment
    const handleIncrement = () => {
    if (effectiveDisabled || readOnly) return;
    const current = currentValue ?? 0;
    const newValue = current + step;
    if (max === undefined || newValue <= max) {
      handleChange(newValue);
    } else if (current < max) {
      handleChange(max);
    }
  };

    // Handle stepper decrement
  const handleDecrement = () => {
    if (effectiveDisabled || readOnly) return;
    const current = currentValue ?? 0;
    const newValue = current - step;
    if (min === undefined || newValue >= min) {
      handleChange(newValue);
    } else if (current > min) {
      handleChange(min);
    }
  };

  // Build aria-describedby
  const ariaDescribedBy = [
    description && !hasError && !hasWarning ? descriptionId : null,
    hasError ? errorId : null,
    hasWarning ? warnId : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined;

  // Build validation classes
  const validationClasses = {
    'border-destructive focus-visible:ring-destructive': hasError,
    'border-warning focus-visible:ring-warning': hasWarning,
  };

  // Has left icon
  const hasLeftIcon = !!leftIcon;

  const inputElement = (
    <div className="relative flex items-center">
      {hasLeftIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10">
          {leftIcon}
        </div>
      )}
      <input
        ref={ref}
        type="text"
        inputMode="decimal"
        id={inputId}
        value={formatForDisplay(currentValue)}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={effectiveDisabled}
        readOnly={readOnly}
        className={cn(
          numberInputInputVariants({ variant, size, error: hasError }),
          validationClasses,
          hasLeftIcon && 'pl-10',
          !hideSteppers && 'pr-16',
          className
        )}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        aria-required={required}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue ?? undefined}
        data-testid={testId}
        {...props}
      />
      {!hideSteppers && (
        <div className={cn(numberInputStepperVariants({ size }))}>
          <button
            type="button"
            tabIndex={-1}
            className={cn(
              'flex items-center justify-center h-1/2 w-full hover:bg-muted transition-colors',
              (effectiveDisabled || readOnly || (max !== undefined && currentValue !== null && currentValue >= max)) &&
                'opacity-50 cursor-not-allowed'
            )}
            onClick={handleIncrement}
            disabled={effectiveDisabled || readOnly}
            aria-label="Increment"
          >
            <ChevronUp className="h-3 w-3" aria-hidden="true" />
          </button>
          <button
            type="button"
            tabIndex={-1}
            className={cn(
              'flex items-center justify-center h-1/2 w-full hover:bg-muted transition-colors',
              (effectiveDisabled || readOnly || (min !== undefined && currentValue !== null && currentValue <= min)) &&
                'opacity-50 cursor-not-allowed'
            )}
            onClick={handleDecrement}
            disabled={effectiveDisabled || readOnly}
            aria-label="Decrement"
          >
            <ChevronDown className="h-3 w-3" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );

  // Render without wrapper if no label/description/error/warn
  if (!label && !description && !error && !warn) {
    return inputElement;
  }

  return (
    <div
      className={cn(
        numberInputVariants({ size, disabled: effectiveDisabled }),
        wrapperClassName
      )}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium leading-none text-text-02',
            hideLabel && 'sr-only',
            effectiveDisabled && 'opacity-50'
          )}
        >
          {label}
          {required && (
            <span className="text-destructive ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      {inputElement}
      <div>
        {description && !hasError && !hasWarning && (
          <p id={descriptionId} className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
        {hasError && (
          <p id={errorId} className="text-xs text-destructive" role="alert">
            {error}
          </p>
        )}
        {hasWarning && !hasError && (
          <p id={warnId} className="text-xs text-warning" role="alert">
            {warn}
          </p>
        )}
      </div>
    </div>
  );
});

NumberInput.displayName = 'NumberInput';

// ============================================================================
// Exports
// ============================================================================

export { NumberInput };
export { numberInputVariants, numberInputInputVariants, numberInputStepperVariants } from './NumberInput.variants';
export type {
  NumberInputProps,
  NumberInputSkeletonProps,
  NumberInputSize,
} from './NumberInput.types';

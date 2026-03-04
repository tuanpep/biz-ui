/**
 * Textarea Component
 *
 * Design Principles:
 * - Consistent styling with Input component
 * - Support for auto-resize
 * - Clear focus and error/warning states
 * - Character count support
 * - Carbon-aligned validation patterns
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { textareaVariants } from './Textarea.variants';
import type { TextareaProps } from './Textarea.types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      resize,
      size,
      label,
      description,
      error,
      warn,
      required = false,
      hideLabel = false,
      showCount,
      maxLength,
      autoResize,
      value,
      defaultValue,
      onChange,
      wrapperClassName,
      'data-testid': testId,
      id: propId,
      disabled,
      readOnly,
      ...props
    },
    ref
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const id = propId || generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;
    const warnId = `${id}-warn`;

    // Calculate effective states (matching Carbon's useNormalizedInputProps)
    const effectiveDisabled = !readOnly && disabled;
    const hasError = !readOnly && !effectiveDisabled && !!error;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    // Value handling
    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const textareaValue = value !== undefined ? value : internalValue;
    const characterCount = String(textareaValue).length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    // Auto-resize logic
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    React.useEffect(() => {
      if (autoResize && textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [textareaValue, autoResize]);

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

    const textarea = (
      <textarea
        ref={textareaRef}
        id={id}
        value={textareaValue}
        onChange={handleChange}
        maxLength={maxLength}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        data-testid={testId}
        disabled={effectiveDisabled}
        readOnly={readOnly}
        className={cn(
          textareaVariants({ variant, resize, size }),
          validationClasses,
          className
        )}
        {...props}
      />
    );

    // Render without wrapper if no label/description/error/warn/count
    if (!label && !description && !error && !warn && !showCount) {
      return textarea;
    }

    return (
      <div className={cn('grid w-full gap-1.5', wrapperClassName)}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'text-sm font-medium leading-none',
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
        {textarea}
        <div className="flex items-center justify-between">
          <div>
            {description && !hasError && !hasWarning && (
              <p id={descriptionId} className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
            {hasError && (
              <p id={errorId} role="alert" className="text-xs text-destructive">
                {error}
              </p>
            )}
            {hasWarning && !hasError && (
              <p id={warnId} role="alert" className="text-xs text-warning">
                {warn}
              </p>
            )}
          </div>
          {showCount && (
            <p
              className={cn(
                'text-xs ml-auto',
                maxLength && characterCount >= maxLength
                  ? 'text-destructive font-medium'
                  : 'text-muted-foreground'
              )}
            >
              {characterCount}
              {maxLength && ` / ${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
export { textareaVariants } from './Textarea.variants';
export type { TextareaProps } from './Textarea.types';

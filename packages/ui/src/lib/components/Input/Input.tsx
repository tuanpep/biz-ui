/**
 * Input Component
 *
 * Design Principles:
 * - Consistent styling with Textarea component
 * - Clear focus and error/warning states
 * - Support for labels and descriptions
 * - Multiple variants for different use cases
 * - Carbon-aligned validation patterns
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { inputVariants } from './Input.variants';
import type { InputProps } from './Input.types';

// ============================================================================
// Input Component
// ============================================================================

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      variant,
      size,
      label,
      description,
      error,
      warn,
      required = false,
      hideLabel = false,
      leftIcon,
      rightIcon,
      wrapperClassName,
      'data-testid': testId,
      id: providedId,
      disabled,
      readOnly,
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

    // Calculate effective states (matching Carbon's useNormalizedInputProps)
    const effectiveDisabled = !readOnly && disabled;
    const hasError = !readOnly && !effectiveDisabled && !!error;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    // Build aria-describedby
    const ariaDescribedBy =
      [
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

    // Has icons
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;

    const input = (
      <div className="relative">
        {hasLeftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            inputVariants({ variant, size }),
            validationClasses,
            hasLeftIcon && 'pl-10',
            hasRightIcon && 'pr-10',
            className
          )}
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={ariaDescribedBy}
          data-testid={testId}
          disabled={effectiveDisabled}
          readOnly={readOnly}
          {...props}
        />
        {hasRightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
    );

    // Render without wrapper if no label/description/error/warn
    if (!label && !description && !error && !warn) {
      return input;
    }

    return (
      <div className={cn('grid w-full gap-1.5', wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
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
        {input}
        <div>
          {description && !hasError && !hasWarning && (
            <p
              id={descriptionId}
              className="text-sm text-muted-foreground"
            >
              {description}
            </p>
          )}
          {hasError && (
            <p
              id={errorId}
              className="text-xs text-destructive"
              role="alert"
            >
              {error}
            </p>
          )}
          {hasWarning && !hasError && (
            <p
              id={warnId}
              className="text-xs text-warning"
              role="alert"
            >
              {warn}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

// ============================================================================
// Exports
// ============================================================================

export { Input };
export { inputVariants } from './Input.variants';
export type {
  InputProps,
  InputSkeletonProps,
  InputVariant,
  InputSize,
} from './Input.types';

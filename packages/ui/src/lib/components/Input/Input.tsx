/**
 * Input Component
 *
 * Design Principles:
 * - Consistent styling with Textarea component
 * - Clear focus and error states
 * - Support for labels and descriptions
 * - Multiple variants for different use cases
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { inputVariants } from './Input.variants';
import type { InputProps } from './Input.types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant,
      size,
      label,
      description,
      error,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    const generatedId = React.useId();
    const inputId = props.id || generatedId;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;

    // Build aria-describedby
    const ariaDescribedBy =
      [
        description && !error ? descriptionId : null,
        error ? errorId : null,
      ]
        .filter(Boolean)
        .join(' ') || undefined;

    const input = (
      <input
        type={type}
        id={inputId}
        className={cn(
          inputVariants({ variant, size }),
          hasError && 'border-destructive focus-visible:ring-destructive',
          className
        )}
        ref={ref}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        {...props}
      />
    );

    if (!label && !description && !error) {
      return input;
    }

    return (
      <div className={cn('grid w-full gap-1.5', wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none"
          >
            {label}
          </label>
        )}
        {input}
        <div>
          {description && !error && (
            <p id={descriptionId} className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
          {error && (
            <p id={errorId} className="text-xs text-destructive" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export { inputVariants } from './Input.variants';
export type { InputProps, InputSkeletonProps, InputVariant, InputSize } from './Input.types';

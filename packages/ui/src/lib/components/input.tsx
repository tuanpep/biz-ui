import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/**
 * Input Component
 *
 * Design Principles:
 * - Consistent styling with Textarea component
 * - Clear focus and error states
 * - Support for labels and descriptions
 * - Multiple variants for different use cases
 */

const inputVariants = cva(
  'flex w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'border-input bg-background',
        filled: 'border-transparent bg-muted',
        unstyled: 'border-none bg-transparent shadow-none focus-visible:ring-0',
      },
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof inputVariants> {
  /** Label text for the input */
  label?: string;
  /** Description text shown below the input */
  description?: string;
  /** Error message to display */
  error?: string;
  /** Additional wrapper className when label/description is present */
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, label, description, error, wrapperClassName, ...props }, ref) => {
    const hasError = !!error;
    const generatedId = React.useId();
    const inputId = props.id || generatedId;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;

    // Build aria-describedby
    const ariaDescribedBy = [
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
          <label htmlFor={inputId} className="text-sm font-medium leading-none">
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

export { Input, inputVariants };


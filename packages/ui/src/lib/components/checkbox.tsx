import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Minus } from 'lucide-react';
import { cn } from '../utils/cn';

/**
 * Checkbox Component
 *
 * Design Principles:
 * - Clear checked/unchecked/indeterminate states
 * - Accessible keyboard navigation
 * - Consistent sizing with other form elements
 * - Support for labels and descriptions
 */

const checkboxVariants = cva(
  'shrink-0 border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
        destructive: 'border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=checked]:border-destructive',
        success: 'border-success data-[state=checked]:bg-success data-[state=checked]:text-success-foreground data-[state=checked]:border-success',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'checked'>,
  VariantProps<typeof checkboxVariants> {
  /** Whether the checkbox is checked */
  checked?: boolean | 'indeterminate';
  /** Label text for the checkbox */
  label?: string;
  /** Description text shown below the label */
  description?: string;
  /** Error message to display */
  error?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, size, label, description, error, checked, id: propId, ...props }, ref) => {
  const hasError = !!error;
  const innerRef = React.useRef<React.ElementRef<typeof CheckboxPrimitive.Root>>(null);

  // Generate unique IDs for accessibility
  const generatedId = React.useId();
  const id = propId || generatedId;
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;

  // Expose the inner checkbox element to the parent ref
  React.useImperativeHandle(ref, () => innerRef.current as React.ElementRef<typeof CheckboxPrimitive.Root>);

  // Build aria-describedby
  const ariaDescribedBy = [
    description && !error ? descriptionId : null,
    error ? errorId : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined;

  const checkbox = (
    <CheckboxPrimitive.Root
      ref={innerRef}
      id={id}
      checked={checked}
      aria-invalid={hasError ? 'true' : undefined}
      aria-describedby={ariaDescribedBy}
      className={cn(
        checkboxVariants({ variant, size }),
        hasError && 'border-destructive',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        {checked === 'indeterminate' ? (
          <Minus className={cn(size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4')} />
        ) : (
          <Check className={cn(size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4')} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (!label && !description && !error) {
    return checkbox;
  }

  return (
    <div className="flex items-start space-x-2">
      <div className="pt-0.5">
        {checkbox}
      </div>
      <div className="grid gap-1.5 leading-none">
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer',
              hasError && 'text-destructive'
            )}
          >
            {label}
          </label>
        )}
        {description && !error && (
          <p id={descriptionId} className="text-sm text-muted-foreground leading-normal">
            {description}
          </p>
        )}
        {error && (
          <p id={errorId} role="alert" className="text-xs text-destructive leading-normal">
            {error}
          </p>
        )}
      </div>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants };

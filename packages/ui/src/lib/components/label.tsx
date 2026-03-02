import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/**
 * Label Component
 *
 * Design Principles:
 * - Consistent sizing with Input and other form elements
 * - Clear visual hierarchy
 * - Accessible form labeling
 */

const labelVariants = cva(
  'font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'size'>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ size }), className)}
      {...props}
    />
  )
);
Label.displayName = 'Label';

export { Label, labelVariants };

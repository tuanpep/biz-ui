/**
 * TimePicker variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * TimePicker variant styles.
 */
export const timePickerVariants = cva(
  'flex items-center gap-2 px-3 py-2 border rounded-md bg-ui-01 cursor-pointer transition-colors hover:bg-ui-02 focus-within:ring-2 focus-within:ring-interactive-01',
  {
    variants: {
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
      error: {
        true: 'border-support-error',
      },
    },
    defaultVariants: {
      size: 'md',
      error: false,
    },
  }
);

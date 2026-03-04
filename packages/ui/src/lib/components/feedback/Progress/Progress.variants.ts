/**
 * Progress variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * Progress root variant styles.
 */
export const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full bg-muted',
  {
    variants: {
      size: {
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
      },
      variant: {
        default: '',
        success: 'bg-success-muted',
        warning: 'bg-warning-muted',
        destructive: 'bg-destructive-muted',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

/**
 * Progress indicator variant styles.
 */
export const progressIndicatorVariants = cva(
  'h-full w-full flex-1 rounded-full transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        success: 'bg-success',
        warning: 'bg-warning',
        destructive: 'bg-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

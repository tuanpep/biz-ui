/**
 * Checkbox variants using CVA.
 */

import { cva } from 'class-variance-authority';

/**
 * Checkbox variant styles.
 */
export const checkboxVariants = cva(
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

/**
 * Checkbox skeleton variant styles.
 */
export const checkboxSkeletonVariants = cva(
  'animate-pulse bg-muted rounded-sm',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

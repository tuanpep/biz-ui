/**
 * RadioGroup variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * RadioGroup item variant styles.
 * Clear selected/unselected states with accessible keyboard navigation.
 */
export const radioGroupItemVariants = cva(
  'flex items-center justify-center aspect-square rounded-full border border-primary text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: '',
        destructive: 'border-destructive text-destructive',
        success: 'border-success text-success',
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
 * RadioGroup indicator variant styles.
 */
export const radioIndicatorVariants = cva(
  'flex items-center justify-center',
  {
    variants: {
      size: {
        sm: 'h-2 w-2',
        md: 'h-2.5 w-2.5',
        lg: 'h-3 w-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * RadioGroup skeleton variant styles.
 */
export const radioGroupSkeletonVariants = cva(
  'animate-pulse rounded-full bg-muted',
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

/**
 * RadioGroup skeleton label styles.
 */
export const radioGroupSkeletonLabelVariants = cva(
  'animate-pulse bg-muted rounded',
  {
    variants: {
      size: {
        sm: 'h-3 w-12',
        md: 'h-4 w-16',
        lg: 'h-4 w-20',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

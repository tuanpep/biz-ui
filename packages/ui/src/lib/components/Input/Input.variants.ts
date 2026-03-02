/**
 * Input variants using CVA.
 */

import { cva } from 'class-variance-authority';

/**
 * Input variant styles.
 */
export const inputVariants = cva(
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

/**
 * Input skeleton variant styles.
 */
export const inputSkeletonVariants = cva(
  'animate-pulse bg-muted rounded-md',
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Link variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * Link variant styles.
 */
export const linkVariants = cva(
  'inline-flex items-center gap-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'text-primary underline-offset-4 hover:underline',
        primary: 'text-interactive-01 underline-offset-4 hover:underline',
        secondary: 'text-text-secondary underline-offset-4 hover:underline',
        visited: 'text-purple-600 underline-offset-4 hover:underline',
        muted: 'text-muted-foreground underline-offset-4 hover:underline hover:text-foreground',
      },
      underline: {
        none: 'no-underline hover:no-underline',
        hover: 'underline-offset-4 hover:underline',
        always: 'underline',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      underline: 'hover',
      size: 'md',
    },
  }
);

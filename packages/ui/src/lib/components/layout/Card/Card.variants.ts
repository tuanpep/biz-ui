/**
 * Card variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * Card variant styles.
 * Clean white backgrounds with subtle shadows.
 */
export const cardVariants = cva(
  'border bg-card text-card-foreground transition-all duration-200 rounded-none',
  {
    variants: {
      variant: {
        default: 'border-border shadow-none bg-ui-01',
        flat: 'border-transparent shadow-none bg-ui-01',
        clickable: 'border-border shadow-none hover:border-interactive-01 hover:shadow-sm cursor-pointer bg-ui-01',
        outline: 'border-border shadow-none bg-transparent',
        ghost: 'border-transparent shadow-none bg-transparent',
      },
      size: {
        sm: 'p-0',
        md: 'p-0',
        lg: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

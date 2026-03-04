/**
 * Alert variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * Alert variant styles.
 * Semantic colors for different alert types.
 */
export const alertVariants = cva(
  'relative w-full border p-4 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border',
        info: 'bg-info-muted text-info border-info/30 [&>svg]:text-info',
        success: 'bg-success-muted text-success border-success/30 [&>svg]:text-success',
        warning: 'bg-warning-muted text-warning border-warning/30 [&>svg]:text-warning',
        destructive: 'bg-destructive-muted text-destructive border-destructive/30 [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

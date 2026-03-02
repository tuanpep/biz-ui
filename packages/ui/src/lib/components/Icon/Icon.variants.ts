/**
 * Icon variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * Icon variant styles.
 */
export const iconVariants = cva('inline-flex items-center justify-center', {
  variants: {
    size: {
      xs: 'h-3 w-3',      // 12px
      sm: 'h-4 w-4',      // 16px - Biz UI default
      md: 'h-5 w-5',      // 20px
      lg: 'h-6 w-6',      // 24px
      xl: 'h-8 w-8',      // 32px
      '2xl': 'h-10 w-10', // 40px
    },
    color: {
      default: 'text-current',
      primary: 'text-interactive-01',
      secondary: 'text-text-secondary',
      muted: 'text-muted-foreground',
      destructive: 'text-destructive',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
      inverse: 'text-primary-foreground',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'default',
  },
});

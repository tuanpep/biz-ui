/**
 * IconButton variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * IconButton variant styles.
 */
export const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md ring-offset-2 ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        primary: 'bg-interactive-01 text-white hover:bg-interactive-01-hover',
        secondary: 'bg-interactive-02 text-white hover:bg-interactive-02-hover',
        tertiary: 'bg-transparent text-interactive-01 hover:bg-interactive-01-subtle',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50',
        ghost: 'border border-transparent bg-transparent text-foreground hover:bg-muted hover:border-border',
        success: 'bg-success text-success-foreground hover:bg-success/90',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
      },
      size: {
        xs: 'h-6 w-6',       // 24px
        sm: 'h-8 w-8',       // 32px - Biz UI small
        md: 'h-10 w-10',     // 40px - Biz UI default
        lg: 'h-12 w-12',     // 48px - Biz UI large
        xl: 'h-14 w-14',     // 56px
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Icon sizes to match button sizes.
 */
export const iconSizes = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-7 w-7',
} as const;

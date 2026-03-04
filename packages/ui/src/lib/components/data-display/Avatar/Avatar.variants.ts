/**
 * Avatar variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * Avatar root variant styles.
 */
export const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        xs: 'h-6 w-6',
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Avatar image variant styles.
 */
export const avatarImageVariants = cva('aspect-square h-full w-full object-cover');

/**
 * Avatar fallback variant styles.
 */
export const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center rounded-full bg-muted font-medium',
  {
    variants: {
      size: {
        xs: 'text-[10px]',
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

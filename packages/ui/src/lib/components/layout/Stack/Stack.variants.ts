/**
 * Stack variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * Stack container variant styles.
 */
export const stackVariants = cva('flex', {
  variants: {
    gap: {
      none: 'gap-0',
      xs: 'gap-1',      // 4px
      sm: 'gap-2',      // 8px
      md: 'gap-4',      // 16px
      lg: 'gap-6',      // 24px
      xl: 'gap-8',      // 32px
      '2xl': 'gap-10',  // 40px
      '3xl': 'gap-12',  // 48px
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    gap: 'md',
    direction: 'vertical',
    align: 'stretch',
    justify: 'start',
    wrap: false,
  },
});

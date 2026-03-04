/**
 * Grid variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from 'class-variance-authority';

/**
 * Grid container variant styles.
 */
export const gridVariants = cva('ocean-grid', {
  variants: {
    condensed: {
      true: 'ocean-grid--condensed',
      false: '',
    },
    narrow: {
      true: 'ocean-grid--narrow',
      false: '',
    },
    fullWidth: {
      true: 'ocean-grid--full-width',
      false: '',
    },
  },
  defaultVariants: {
    condensed: false,
    narrow: false,
    fullWidth: false,
  },
});

/**
 * Row variant styles.
 */
export const rowVariants = cva('ocean-row', {
  variants: {
    condensed: {
      true: 'ocean-row--condensed',
      false: '',
    },
    narrow: {
      true: 'ocean-row--narrow',
      false: '',
    },
  },
  defaultVariants: {
    condensed: false,
    narrow: false,
  },
});

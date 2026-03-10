/**
 * Grid variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Grid container variant styles.
 */
export const gridVariants = cva("biz-grid", {
  variants: {
    condensed: {
      true: "biz-grid--condensed",
      false: "",
    },
    narrow: {
      true: "biz-grid--narrow",
      false: "",
    },
    fullWidth: {
      true: "biz-grid--full-width",
      false: "",
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
export const rowVariants = cva("biz-row", {
  variants: {
    condensed: {
      true: "biz-row--condensed",
      false: "",
    },
    narrow: {
      true: "biz-row--narrow",
      false: "",
    },
  },
  defaultVariants: {
    condensed: false,
    narrow: false,
  },
});

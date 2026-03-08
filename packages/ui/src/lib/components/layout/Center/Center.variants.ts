/**
 * Center Component Variants
 *
 * Style variants for centering layout.
 */

import { cva } from "class-variance-authority";

export const centerVariants = cva("flex items-center justify-center", {
  variants: {
    /** When true, takes full height of parent */
    fullHeight: {
      true: "h-full",
      false: "",
    },
    /** When true, centers inline (inline-flex) instead of block (flex) */
    inline: {
      true: "inline-flex",
      false: "",
    },
  },
  defaultVariants: {
    fullHeight: false,
    inline: false,
  },
});

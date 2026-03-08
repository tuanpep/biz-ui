/**
 * ButtonGroup variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * ButtonGroup variant styles.
 */
export const buttonGroupVariants = cva("inline-flex", {
  variants: {
    /** Visual style of the button group */
    variant: {
      /** Buttons are spaced apart */
      spaced: "gap-2",
      /** Buttons are attached/connected together */
      attached:
        "[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child)]:-ml-px",
    },
    /** Orientation of the button group */
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  compoundVariants: [
    {
      variant: "attached",
      orientation: "vertical",
      className:
        "[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:ml-0",
    },
  ],
  defaultVariants: {
    variant: "spaced",
    orientation: "horizontal",
  },
});

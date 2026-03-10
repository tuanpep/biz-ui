/**
 * List Component Variants
 *
 * Style variants for ordered and unordered lists.
 */

import { cva } from "class-variance-authority";

export const listVariants = cva("", {
  variants: {
    variant: {
      unordered: "list-none",
      ordered: "list-decimal list-inside",
      unstyled: "list-none p-0 m-0",
    },
    spacing: {
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-3",
    },
  },
  defaultVariants: {
    variant: "unordered",
    spacing: "md",
  },
});

/**
 * TreeView variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * TreeView container variants.
 */
export const treeViewVariants = cva("flex flex-col", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * TreeItem variants.
 */
export const treeItemVariants = cva(
  "flex items-center cursor-pointer transition-colors rounded-sm",
  {
    variants: {
      selected: {
        true: "bg-primary/10 text-primary",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  },
);

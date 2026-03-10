/**
 * Skeleton variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Skeleton variant styles.
 */
export const skeletonVariants = cva("bg-muted", {
  variants: {
    variant: {
      text: "",
      circular: "rounded-full",
      rectangular: "",
      rounded: "",
    },
    animate: {
      true: "animate-pulse",
      false: "",
    },
  },
  defaultVariants: {
    variant: "text",
    animate: true,
  },
});

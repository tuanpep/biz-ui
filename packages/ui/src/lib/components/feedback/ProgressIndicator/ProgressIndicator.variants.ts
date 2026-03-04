/**
 * ProgressIndicator variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Step progress container variants.
 */
export const stepProgressVariants = cva("flex", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    size: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    size: "md",
  },
});

/**
 * Progress step variants.
 */
export const progressStepVariants = cva("flex items-center gap-2", {
  variants: {
    status: {
      pending: "text-muted-foreground",
      current: "text-primary",
      completed: "text-success",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    status: "pending",
    size: "md",
  },
});

/**
 * Icon sizes for progress steps.
 */
export const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

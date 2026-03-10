/**
 * TimePicker variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * TimePicker variant styles.
 */
export const timePickerVariants = cva(
  "flex items-center gap-2 px-3 py-2 border rounded-md bg-background cursor-pointer transition-colors hover:bg-muted focus-within:ring-2 focus-within:ring-primary",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
      error: {
        true: "border-destructive focus-within:ring-destructive",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

/**
 * TimePicker skeleton variants.
 */
export const timePickerSkeletonVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * TimePicker skeleton label variants.
 */
export const timePickerSkeletonLabelVariants = cva(
  "animate-pulse rounded bg-muted",
  {
    variants: {
      size: {
        sm: "h-3 w-16",
        md: "h-4 w-20",
        lg: "h-4 w-24",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

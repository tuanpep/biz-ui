/**
 * DatePicker variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * DatePicker root variant styles.
 */
export const datePickerVariants = cva("relative biz-ui", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * DatePicker input variant styles.
 */
export const datePickerInputVariants = cva(
  "flex items-center gap-2 px-3 py-2 border rounded-md bg-background cursor-pointer transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
      error: {
        true: "border-destructive",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

/**
 * DatePicker skeleton variant styles.
 */
export const datePickerSkeletonVariants = cva(
  "animate-pulse bg-muted rounded-md",
  {
    variants: {
      size: {
        sm: "h-8 w-full",
        md: "h-10 w-full",
        lg: "h-12 w-full",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * DatePicker skeleton label variant styles.
 */
export const datePickerSkeletonLabelVariants = cva(
  "animate-pulse bg-muted rounded",
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

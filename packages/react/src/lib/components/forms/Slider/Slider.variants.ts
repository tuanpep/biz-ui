/**
 * Slider variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Slider root variant styles.
 */
export const sliderVariants = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      size: {
        sm: "h-4",
        md: "h-5",
        lg: "h-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * Slider track variant styles.
 */
export const sliderTrackVariants = cva(
  "relative w-full grow overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2",
        lg: "h-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * Slider range variant styles.
 */
export const sliderRangeVariants = cva("absolute h-full", {
  variants: {
    variant: {
      default: "bg-primary",
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
      destructive: "bg-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/**
 * Slider thumb variant styles.
 */
export const sliderThumbVariants = cva(
  "block rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      variant: {
        default: "border-primary",
        primary: "border-primary",
        secondary: "border-secondary",
        success: "border-success",
        warning: "border-warning",
        destructive: "border-destructive",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

/**
 * Slider skeleton variant styles.
 */
export const sliderSkeletonVariants = cva(
  "animate-pulse rounded-full bg-muted",
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2",
        lg: "h-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * Slider skeleton thumb variant styles.
 */
export const sliderSkeletonThumbVariants = cva(
  "animate-pulse rounded-full bg-muted",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

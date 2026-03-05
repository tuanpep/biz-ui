/**
 * Search variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Search root variant styles.
 */
export const searchVariants = cva("relative flex items-center", {
  variants: {
    size: {
      sm: "h-8",
      md: "h-10",
      lg: "h-12",
    },
    expandable: {
      true: "",
      false: "w-full",
    },
  },
  defaultVariants: {
    size: "md",
    expandable: false,
  },
});

/**
 * Search input variant styles.
 */
export const searchInputVariants = cva(
  "flex w-full border bg-background pl-10 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-150",
  {
    variants: {
      variant: {
        default: "border-input",
        filled: "border-transparent bg-muted",
        unstyled: "border-none bg-transparent shadow-none focus-visible:ring-0",
      },
      size: {
        sm: "h-8 text-xs rounded-none pl-8 pr-8",
        md: "h-10 text-sm rounded-none pl-10 pr-10",
        lg: "h-12 text-base rounded-none pl-12 pr-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

/**
 * Search icon variant styles.
 */
export const searchIconVariants = cva(
  "absolute left-0 text-muted-foreground pointer-events-none",
  {
    variants: {
      size: {
        sm: "left-2.5 h-3.5 w-3.5",
        md: "left-3 h-4 w-4",
        lg: "left-4 h-5 w-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * Search clear button variant styles.
 */
export const clearButtonVariants = cva(
  "absolute right-0 inline-flex items-center justify-center rounded-none text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "right-2 h-4 w-4",
        md: "right-3 h-4 w-4",
        lg: "right-4 h-5 w-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * Search skeleton variant styles.
 */
export const searchSkeletonVariants = cva(
  "animate-pulse bg-muted rounded-none",
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

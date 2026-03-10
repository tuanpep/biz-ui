/**
 * Loading variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Spinner variant styles.
 */
export const spinnerVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
      "2xl": "h-16 w-16",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * Loading overlay variant styles.
 */
export const loadingOverlayVariants = cva(
  "fixed inset-0 z-50 flex flex-col items-center justify-center gap-4",
  {
    variants: {
      variant: {
        default: "bg-background/80 backdrop-blur-sm",
        opaque: "bg-background",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * Inline loading variant styles.
 */
export const inlineLoadingVariants = cva(
  "inline-flex items-center gap-2 text-sm",
  {
    variants: {
      status: {
        inactive: "text-muted-foreground",
        active: "text-foreground",
        finished: "text-success",
        error: "text-destructive",
      },
    },
    defaultVariants: {
      status: "active",
    },
  },
);

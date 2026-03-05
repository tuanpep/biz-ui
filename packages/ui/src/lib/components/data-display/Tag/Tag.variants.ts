/**
 * Tag variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Tag variant styles.
 * Multiple color variants for different use cases.
 */
export const tagVariants = cva(
  "inline-flex items-center gap-1.5 font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-secondary/10 text-secondary border border-secondary/20",
        success: "bg-success/10 text-success border border-success/20",
        warning: "bg-warning/10 text-warning border border-warning/20",
        error:
          "bg-destructive/10 text-destructive border border-destructive/20",
        info: "bg-info/10 text-info border border-info/20",
        outline: "bg-transparent text-foreground border border-border",
        filled: "bg-primary text-primary-foreground border-0",
      },
      size: {
        sm: "text-xs px-2 py-0.5 rounded-none",
        md: "text-sm px-2.5 py-1 rounded-none",
        lg: "text-base px-3 py-1.5 rounded-none",
      },
      selected: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      selected: false,
    },
  },
);

/**
 * Tag close button variant styles.
 */
export const tagCloseVariants = cva(
  "inline-flex items-center justify-center rounded-none opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

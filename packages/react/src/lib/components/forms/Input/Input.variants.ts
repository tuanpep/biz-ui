/**
 * Input variants using CVA.
 * Includes validation states and compound variants for complex styling scenarios.
 */

import { cva } from "class-variance-authority";

/**
 * Input variant styles.
 * Supports multiple variants, sizes, and validation states with compound variants.
 */
export const inputVariants = cva(
  "flex w-full border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      variant: {
        default: "border-input bg-background",
        filled: "border-transparent bg-muted",
        unstyled: "border-none bg-transparent shadow-none focus-visible:ring-0",
      },
      size: {
        sm: "h-8 text-xs px-2.5",
        md: "h-10 text-sm px-3",
        lg: "h-12 text-base px-4",
      },
      // Validation states
      error: {
        true: "border-destructive focus-visible:ring-destructive",
        false: "",
      },
      warn: {
        true: "border-warning focus-visible:ring-warning",
        false: "",
      },
      success: {
        true: "border-success focus-visible:ring-success",
        false: "",
      },
    },
    compoundVariants: [
      // Filled variant + error state
      {
        variant: "filled",
        error: true,
        className: "bg-destructive-muted",
      },
      // Filled variant + warn state
      {
        variant: "filled",
        warn: true,
        className: "bg-warning-muted",
      },
      // Filled variant + success state
      {
        variant: "filled",
        success: true,
        className: "bg-success-muted",
      },
      // Unstyled variant should not show validation rings
      {
        variant: "unstyled",
        error: true,
        className: "focus-visible:ring-0",
      },
      {
        variant: "unstyled",
        warn: true,
        className: "focus-visible:ring-0",
      },
      {
        variant: "unstyled",
        success: true,
        className: "focus-visible:ring-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      error: false,
      warn: false,
      success: false,
    },
  },
);

/**
 * Input skeleton variant styles.
 */
export const inputSkeletonVariants = cva("animate-pulse bg-muted rounded-md", {
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
});

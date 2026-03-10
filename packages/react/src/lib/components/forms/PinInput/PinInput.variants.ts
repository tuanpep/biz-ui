/**
 * PinInput variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * PinInput size variant styles.
 */
export const pinInputVariants = cva("inline-flex gap-2", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * PinInput field size classes.
 */
export const pinInputFieldSizeClasses = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
} as const;

/**
 * PinInput field base styles.
 */
export const pinInputFieldBaseClasses =
  "text-center border border-border bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent";

/**
 * PinInput field error state classes.
 */
export const pinInputFieldErrorClasses =
  "border-destructive focus-visible:ring-destructive";

/**
 * PinInput field disabled state classes.
 */
export const pinInputFieldDisabledClasses =
  "disabled:opacity-50 disabled:cursor-not-allowed";

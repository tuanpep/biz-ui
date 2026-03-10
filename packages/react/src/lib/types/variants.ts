/**
 * Shared variant types for biz-ui components
 * These types ensure consistency across all components
 */

/** Standard size variants */
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

/** Standard radius variants */
export type Radius = "xs" | "sm" | "md" | "lg" | "xl" | "full";

/** Standard color variants */
export type Color =
  | "primary"
  | "secondary"
  | "destructive"
  | "success"
  | "warning"
  | "info";

// Note: defaultSizes and defaultRadius constants have been removed.
// Each component now defines its own sizes via CVA (class-variance-authority).
// If you need these mappings, create them in your application code.

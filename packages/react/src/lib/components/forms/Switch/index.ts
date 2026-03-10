/**
 * Switch Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Skeleton variant
 * - Variants utility
 * - Type exports
 */

// Main component
export { Switch, switchVariants, switchThumbVariants } from "./Switch";

// Skeleton variant
export { SwitchSkeleton } from "./Switch.skeleton";

// Types
export type {
  SwitchProps,
  SwitchSkeletonProps,
  SwitchVariant,
  SwitchSize,
} from "./Switch.types";

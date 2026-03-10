/**
 * Alert Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 * - Skeleton component
 */

// Main components
export { Alert, AlertTitle, AlertDescription, alertVariants } from "./Alert";

// Skeleton component
export { AlertSkeleton } from "./Alert.skeleton";

// Types
export type {
  AlertProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertVariant,
  AlertSkeletonProps,
} from "./Alert.types";

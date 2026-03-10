/**
 * Tag Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 * - Skeleton component
 */

// Main components
export {
  Tag,
  DismissibleTag,
  SelectableTag,
  tagVariants,
  tagCloseVariants,
} from "./Tag";

// Skeleton component
export { TagSkeleton } from "./Tag.skeleton";

// Types
export type {
  TagProps,
  DismissibleTagProps,
  SelectableTagProps,
  TagVariant,
  TagSize,
  TagSkeletonProps,
} from "./Tag.types";

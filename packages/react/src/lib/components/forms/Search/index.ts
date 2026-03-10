/**
 * Search Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Skeleton variant
 * - Variants utility
 * - Type exports
 */

// Main components
export {
  Search,
  ExpandableSearch,
  searchVariants,
  searchInputVariants,
  searchIconVariants,
  clearButtonVariants,
} from "./Search";

// Skeleton variant
export { SearchSkeleton } from "./Search.skeleton";

// Types
export type {
  SearchProps,
  ExpandableSearchProps,
  SearchSkeletonProps,
  SearchVariant,
  SearchSize,
} from "./Search.types";

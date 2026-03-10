/**
 * Pagination Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Variants utility
 * - Type exports
 */

// Main components
export { Pagination, PaginationNav } from "./Pagination";

// Variants
export {
  paginationVariants,
  paginationButtonVariants,
} from "./Pagination.variants";

// Types
export type {
  PaginationProps,
  PaginationNavProps,
  PaginationSize,
  PaginationButtonVariant,
} from "./Pagination.types";

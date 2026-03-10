/**
 * Pagination component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Pagination size type.
 */
export type PaginationSize = VariantProps<
  typeof import("./Pagination.variants").paginationVariants
>["size"];

/**
 * Pagination button variant type.
 */
export type PaginationButtonVariant = VariantProps<
  typeof import("./Pagination.variants").paginationButtonVariants
>["variant"];

/**
 * Pagination component props.
 */
export interface PaginationProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "size" | "onChange"
> {
  /** Size variant */
  size?: PaginationSize;
  /** Current page (1-indexed) */
  page: number;
  /** Total number of pages */
  total: number;
  /** Callback when page changes */
  onChange?: (page: number) => void;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Show page size selector */
  showPageSize?: boolean;
  /** Available page sizes */
  pageSizes?: number[];
  /** Current page size */
  pageSize?: number;
  /** Callback when page size changes */
  onPageSizeChange?: (pageSize: number) => void;
  /** Show total count */
  showTotal?: boolean;
  /** Total number of items */
  totalItems?: number;
  /** Item name for display (e.g., "items", "users") */
  itemName?: string;
  /** Number of page buttons to show */
  siblingsCount?: number;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Pagination nav component props.
 */
export interface PaginationNavProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "size" | "onChange"
> {
  /** Size variant */
  size?: PaginationSize;
  /** Current page (1-indexed) */
  page: number;
  /** Total number of pages */
  total: number;
  /** Callback when page changes */
  onChange?: (page: number) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Show page indicator */
  showIndicator?: boolean;
}

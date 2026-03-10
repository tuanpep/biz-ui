/**
 * Search component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Search variant types.
 */
export type SearchVariant = VariantProps<
  typeof import("./Search.variants").searchInputVariants
>["variant"];

/**
 * Search size types.
 */
export type SearchSize = VariantProps<
  typeof import("./Search.variants").searchVariants
>["size"];

/**
 * Search component props.
 */
export interface SearchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  /** Search input variant style */
  variant?: SearchVariant;
  /** Search input size */
  size?: SearchSize;
  /** Expandable search bar */
  expandable?: boolean;
  /** Label text for the search */
  label?: string;
  /** Description text shown below the search */
  description?: string;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Hide label visually but keep for accessibility */
  hideLabel?: boolean;
  /** Show loading spinner */
  loading?: boolean;
  /** Controlled value for clear button visibility */
  value?: string;
  /** Default value for uncontrolled input */
  defaultValue?: string;
  /** Callback when value changes */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Callback when search is submitted (Enter key) */
  onSearch?: (value: string) => void;
  /** Additional wrapper className when label/description is present */
  wrapperClassName?: string;
  /** Hide clear button */
  hideClear?: boolean;
  /** Test id for testing */
  "data-testid"?: string;
}

/**
 * Expandable Search component props.
 */
export type ExpandableSearchProps = Omit<SearchProps, "expandable">;

/**
 * Search skeleton props.
 */
export interface SearchSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match search */
  size?: SearchSize;
  /** Show skeleton with icon placeholder */
  hasIcon?: boolean;
  /** Show label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

/**
 * Search component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Search variant types.
 */
export type SearchVariant = VariantProps<typeof import('./Search.variants').searchInputVariants>['variant'];

/**
 * Search size types.
 */
export type SearchSize = VariantProps<typeof import('./Search.variants').searchVariants>['size'];

/**
 * Search component props.
 */
export interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Search input variant style */
  variant?: SearchVariant;
  /** Search input size */
  size?: SearchSize;
  /** Expandable search bar */
  expandable?: boolean;
  /** Label text for accessibility */
  label?: string;
  /** Description text shown below the search */
  description?: string;
  /** Error message to display */
  error?: string;
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
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Hide clear button */
  hideClear?: boolean;
}

/**
 * Expandable Search component props.
 */
export type ExpandableSearchProps = Omit<SearchProps, 'expandable'>;

/**
 * Search skeleton props.
 */
export interface SearchSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match search */
  size?: SearchSize;
  /** Show skeleton with icon placeholder */
  hasIcon?: boolean;
}

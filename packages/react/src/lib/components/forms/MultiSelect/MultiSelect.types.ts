/**
 * MultiSelect component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * MultiSelect size type.
 */
export type MultiSelectSize = VariantProps<
  typeof import("./MultiSelect.variants").multiSelectVariants
>["size"];

/**
 * MultiSelect option type.
 */
export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * MultiSelect component props.
 */
export interface MultiSelectProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "size" | "onChange"
> {
  /** Selected values */
  value?: string[];
  /** Default value for uncontrolled */
  defaultValue?: string[];
  /** Callback when value changes */
  onChange?: (value: string[]) => void;
  /** Options to display */
  options: MultiSelectOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Size variant */
  size?: MultiSelectSize;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state (renders as disabled but accessible) */
  readOnly?: boolean;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Description text shown below the multi-select */
  description?: string;
  /** Label text */
  label?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Hide label visually but keep for accessibility */
  hideLabel?: boolean;
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Test id for testing */
  "data-testid"?: string;
  /**
   * @deprecated Use `error` prop with error message string instead
   * Error state (boolean)
   */
  hasError?: boolean;
  /**
   * @deprecated Use `error` prop with error message instead
   * Error message (legacy prop)
   */
  errorMessage?: string;
}

/**
 * MultiSelectTag component props.
 */
export interface MultiSelectTagProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "size"
> {
  /** Tag content */
  tag: React.ReactNode;
  /** Size variant */
  size?: MultiSelectSize;
  /** Whether tag is selected */
  selected?: boolean;
  /** Whether tag is removable */
  removable?: boolean;
  /** Callback when remove is clicked */
  onRemove?: () => void;
}

/**
 * MultiSelect skeleton props.
 */
export interface MultiSelectSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match multi-select */
  size?: MultiSelectSize;
  /** Show skeleton with label placeholder */
  withLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

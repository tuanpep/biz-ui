/**
 * ComboBox component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * ComboBox size types.
 */
export type ComboBoxSize = VariantProps<
  typeof import("./ComboBox.variants").comboBoxVariants
>["size"];

/**
 * ComboBox option type.
 */
export interface ComboBoxOption {
  /** Option value */
  value: string;
  /** Option display label */
  label: string;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * ComboBox component props.
 */
export interface ComboBoxProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "size" | "onChange"
> {
  /** Selected value */
  value?: string;
  /** Default value for uncontrolled */
  defaultValue?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Options to display */
  options: ComboBoxOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Size variant */
  size?: ComboBoxSize;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state (renders as disabled but accessible) */
  readOnly?: boolean;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Description text shown below the combo box */
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
  /** Clearable */
  clearable?: boolean;
  /** Filter function */
  filterOption?: (option: ComboBoxOption, inputValue: string) => boolean;
  /** No options message */
  noOptionsMessage?: string;
  /** Loading state */
  loading?: boolean;
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
  /**
   * @deprecated Use `description` instead
   * Helper text (legacy prop)
   */
  helperText?: string;
}

/**
 * ComboBox skeleton props.
 */
export interface ComboBoxSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match combo box */
  size?: ComboBoxSize;
  /** Show skeleton with label placeholder */
  withLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

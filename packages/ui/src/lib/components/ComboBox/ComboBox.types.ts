/**
 * ComboBox component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * ComboBox size types.
 */
export type ComboBoxSize = VariantProps<typeof import('./ComboBox.variants').comboBoxVariants>['size'];

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
export interface ComboBoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'> {
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
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Label */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Clearable */
  clearable?: boolean;
  /** Filter function */
  filterOption?: (option: ComboBoxOption, inputValue: string) => boolean;
  /** No options message */
  noOptionsMessage?: string;
  /** Loading state */
  loading?: boolean;
}

/**
 * ComboBox skeleton props.
 */
export interface ComboBoxSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match combo box */
  size?: ComboBoxSize;
  /** Show skeleton with label placeholder */
  withLabel?: boolean;
}

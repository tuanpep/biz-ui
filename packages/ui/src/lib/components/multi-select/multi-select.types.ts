/**
 * MultiSelect component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * MultiSelect size type.
 */
export type MultiSelectSize = VariantProps<typeof import('./multi-select.variants').multiSelectVariants>['size'];

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
export interface MultiSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'> {
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
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
}

/**
 * MultiSelectTag component props.
 */
export interface MultiSelectTagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'size'> {
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

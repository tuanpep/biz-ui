/**
 * Checkbox component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Checkbox variant types.
 */
export type CheckboxVariant = VariantProps<typeof import('./Checkbox.variants').checkboxVariants>['variant'];

/**
 * Checkbox size types.
 */
export type CheckboxSize = VariantProps<typeof import('./Checkbox.variants').checkboxVariants>['size'];

/**
 * Checkbox component props.
 */
export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-checkbox').Root>, 'checked'> {
  /** Checkbox variant style */
  variant?: CheckboxVariant;
  /** Checkbox size */
  size?: CheckboxSize;
  /** Whether the checkbox is checked */
  checked?: boolean | 'indeterminate';
  /** Label text for the checkbox */
  label?: string;
  /** Description text shown below the label */
  description?: string;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Additional wrapper className when label/description is present */
  wrapperClassName?: string;
}

/**
 * Checkbox skeleton props.
 */
export interface CheckboxSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match checkbox */
  size?: CheckboxSize;
  /** Show label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
}

/**
 * NumberInput component types.
 * Following Carbon's NumberInput patterns with enhanced validation states.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * NumberInput size type.
 */
export type NumberInputSize = VariantProps<typeof import('./NumberInput.variants').numberInputVariants>['size'];

/**
 * NumberInput component props.
 */
export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange' | 'min' | 'max' | 'step'> {
  /** Input size */
  size?: NumberInputSize;
  /** Current value */
  value?: number | null;
  /** Default value for uncontrolled */
  defaultValue?: number;
  /** Callback when value changes */
  onChange?: (value: number | null) => void;
  /** Label text for the input */
  label?: string;
  /** Description text shown below the input */
  description?: string;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Hide label visually but keep for accessibility */
  hideLabel?: boolean;
  /** Icon to show before the input */
  leftIcon?: React.ReactNode;
  /** Additional wrapper className when label/description is present */
  wrapperClassName?: string;
  /** Test id for testing */
  'data-testid'?: string;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step value for increment/decrement */
  step?: number;
  /** Hide stepper buttons */
  hideSteppers?: boolean;
  /** Formatting options for display (Intl.NumberFormatOptions) */
  formatOptions?: Intl.NumberFormatOptions;
  /** Locale for formatting (default: browser locale) */
  locale?: string;
}

/**
 * NumberInput skeleton props.
 */
export interface NumberInputSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match input */
  size?: NumberInputSize;
  /** Show label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

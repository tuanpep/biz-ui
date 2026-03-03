/**
 * TimePicker component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * TimePicker size type.
 */
export type TimePickerSize = VariantProps<typeof import('./time-picker.variants').timePickerVariants>['size'];

/**
 * TimePicker component props.
 */
export interface TimePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'>,
    VariantProps<typeof import('./time-picker.variants').timePickerVariants> {
  /** Value: 'HH:mm' string */
  value?: string | null;
  /** Callback on change */
  onChange?: (time: string) => void;
  /** Label text */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Description text shown below the time picker */
  description?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Hide label visually but keep for accessibility */
  hideLabel?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state (renders as disabled but accessible) */
  readOnly?: boolean;
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Test id for testing */
  'data-testid'?: string;
}

/**
 * TimePicker skeleton props.
 */
export interface TimePickerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match time picker */
  size?: TimePickerSize;
  /** Show skeleton with label placeholder */
  withLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

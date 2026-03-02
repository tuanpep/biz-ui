/**
 * DatePicker component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * DatePicker size types.
 */
export type DatePickerSize = VariantProps<typeof import('./DatePicker.variants').datePickerVariants>['size'];

/**
 * DatePicker component props.
 */
export interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange' | 'value'>,
  VariantProps<typeof import('./DatePicker.variants').datePickerVariants> {
  /** Selected date */
  value?: Date | null;
  /** Callback when date changes */
  onChange?: (date: Date | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Date format string (default: MM/dd/yyyy) */
  dateFormat?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Label */
  label?: string;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
}

/**
 * Date range type.
 */
export interface DateRange {
  start: Date | null;
  end: Date | null;
}

/**
 * DateRangePicker component props.
 */
export interface DateRangePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange' | 'value'>,
  VariantProps<typeof import('./DatePicker.variants').datePickerVariants> {
  /** Selected date range */
  value?: DateRange;
  /** Callback when range changes */
  onChange?: (range: DateRange) => void;
  /** Placeholder text for start date */
  startPlaceholder?: string;
  /** Placeholder text for end date */
  endPlaceholder?: string;
  /** Date format string */
  dateFormat?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Label */
  label?: string;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
}

/**
 * DateTimePicker component props.
 */
export interface DateTimePickerProps extends DatePickerProps {
  /** Time part (HH:mm) */
  timeValue?: string | null;
  /** Callback for time change */
  onTimeChange?: (time: string) => void;
}

/**
 * DatePicker skeleton props.
 */
export interface DatePickerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match date picker */
  size?: DatePickerSize;
  /** Show skeleton with label placeholder */
  withLabel?: boolean;
}

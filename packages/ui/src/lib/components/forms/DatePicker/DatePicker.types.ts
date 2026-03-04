/**
 * DatePicker component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * DatePicker size types.
 */
export type DatePickerSize = VariantProps<
  typeof import("./DatePicker.variants").datePickerVariants
>["size"];

/**
 * DatePicker component props.
 */
export interface DatePickerProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange" | "value">,
    VariantProps<typeof import("./DatePicker.variants").datePickerVariants> {
  /** Selected date */
  value?: Date | null;
  /** Callback when date changes */
  onChange?: (date: Date | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Date format string (default: MM/dd/yyyy) */
  dateFormat?: string;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Description text shown below the date picker */
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
  /** Read-only */
  readOnly?: boolean;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
  /**
   * @deprecated Use `error` prop with error message string instead
   * Error state (boolean) - use error string instead
   */
  hasError?: boolean;
  /**
   * @deprecated Use `error` prop with error message instead
   * Error message (legacy prop)
   */
  errorMessage?: string;
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
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "size" | "onChange" | "value">,
    VariantProps<typeof import("./DatePicker.variants").datePickerVariants> {
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
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Description text shown below the picker */
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
  /** Read-only */
  readOnly?: boolean;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
  /**
   * @deprecated Use `error` prop with error message string instead
   */
  errorMessage?: string;
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
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

/**
 * DatePicker Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Skeleton variant
 * - Variants utility
 * - Type exports
 */

// Main components
export {
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  datePickerVariants,
  datePickerInputVariants,
} from './DatePicker';

// Skeleton variant
export { DatePickerSkeleton } from './DatePicker.skeleton';

// Types
export type {
  DatePickerProps,
  DateRangePickerProps,
  DateTimePickerProps,
  DatePickerSkeletonProps,
  DateRange,
  DatePickerSize,
} from './DatePicker.types';

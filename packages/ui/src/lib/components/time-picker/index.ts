/**
 * TimePicker Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Skeleton component
 * - Type exports
 */

// Main component
export { TimePicker } from './time-picker';

// Skeleton component
export { TimePickerSkeleton } from './time-picker.skeleton';

// Variants
export { timePickerVariants, timePickerSkeletonVariants, timePickerSkeletonLabelVariants } from './time-picker.variants';

// Types
export type { TimePickerProps, TimePickerSkeletonProps, TimePickerSize } from './time-picker.types';

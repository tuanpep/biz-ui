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
export { TimePicker } from './TimePicker';

// Skeleton component
export { TimePickerSkeleton } from './TimePicker.skeleton';

// Variants
export { timePickerVariants, timePickerSkeletonVariants, timePickerSkeletonLabelVariants } from './TimePicker.variants';

// Types
export type { TimePickerProps, TimePickerSkeletonProps, TimePickerSize } from './TimePicker.types';

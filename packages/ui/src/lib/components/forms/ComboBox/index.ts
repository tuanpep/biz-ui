/**
 * ComboBox Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Skeleton variant
 * - Variants utility
 * - Type exports
 */

// Main component
export {
  ComboBox,
  comboBoxVariants,
  comboBoxInputVariants,
  comboBoxMenuVariants,
  comboBoxItemVariants,
} from './ComboBox';

// Skeleton variant
export { ComboBoxSkeleton } from './ComboBox.skeleton';

// Types
export type {
  ComboBoxProps,
  ComboBoxSkeletonProps,
  ComboBoxOption,
  ComboBoxSize,
} from './ComboBox.types';

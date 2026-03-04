/**
 * RadioGroup Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Skeleton variant
 * - Variants utility
 * - Type exports
 */

// Main components
export { RadioGroup, RadioGroupItem, radioGroupItemVariants, radioIndicatorVariants } from './RadioGroup';

// Skeleton variant
export { RadioGroupSkeleton } from './RadioGroup.skeleton';

// Types
export type {
  RadioGroupProps,
  RadioGroupItemProps,
  RadioGroupSkeletonProps,
  RadioGroupVariant,
  RadioGroupSize,
} from './RadioGroup.types';

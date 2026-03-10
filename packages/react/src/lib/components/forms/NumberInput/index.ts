/**
 * NumberInput Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Skeleton component
 * - Variants utilities
    - Type exports
 */

// Main component
export { NumberInput } from "./NumberInput";

// Skeleton component
export { NumberInputSkeleton } from "./NumberInput.skeleton";

// Variants
export {
  numberInputVariants,
  numberInputInputVariants,
  numberInputStepperVariants,
  numberInputSkeletonVariants,
  numberInputSkeletonLabelVariants,
} from "./NumberInput.variants";

// Types
export type {
  NumberInputProps,
  NumberInputSkeletonProps,
  NumberInputSize,
} from "./NumberInput.types";

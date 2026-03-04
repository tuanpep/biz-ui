/**
 * ProgressIndicator Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Variants utility
 * - Type exports
 */

// Main components
export { ProgressIndicator, ProgressStep } from './ProgressIndicator';

// Variants
export { stepProgressVariants, progressStepVariants, iconSizes } from './ProgressIndicator.variants';

// Types
export type {
  ProgressIndicatorProps,
  ProgressStepProps,
  ProgressIndicatorOrientation,
  ProgressIndicatorSize,
  ProgressStepStatus
} from './ProgressIndicator.types';

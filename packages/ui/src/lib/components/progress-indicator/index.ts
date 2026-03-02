/**
 * ProgressIndicator Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Variants utility
 * - Type exports
 */

// Main components
export { ProgressIndicator, ProgressStep } from './progress-indicator';

// Variants
export { stepProgressVariants, progressStepVariants, iconSizes } from './progress-indicator.variants';

// Types
export type {
  ProgressIndicatorProps,
  ProgressStepProps,
  ProgressIndicatorOrientation,
  ProgressIndicatorSize,
  ProgressStepStatus
} from './progress-indicator.types';

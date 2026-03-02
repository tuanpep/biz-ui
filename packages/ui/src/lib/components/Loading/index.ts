/**
 * Loading Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 */

// Main components
export {
  Spinner,
  LoadingOverlay,
  InlineLoading,
  spinnerVariants,
  loadingOverlayVariants,
  inlineLoadingVariants,
} from './Loading';

// Types
export type {
  SpinnerProps,
  LoadingOverlayProps,
  InlineLoadingProps,
  SpinnerSize,
  LoadingOverlayVariant,
  InlineLoadingStatus,
} from './Loading.types';

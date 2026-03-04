/**
 * Slider Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Skeleton variant
 * - Variants utility
 * - Type exports
 */

// Main components
export {
  Slider,
  RangeSlider,
  sliderVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
} from './Slider';

// Skeleton variant
export { SliderSkeleton } from './Slider.skeleton';

// Types
export type {
  SliderProps,
  RangeSliderProps,
  SliderSkeletonProps,
  SliderVariant,
  SliderSize,
} from './Slider.types';

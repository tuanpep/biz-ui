/**
 * Slider Component
 *
 * Biz UI aligned slider with:
 * - Single or range selection
 * - Multiple size variants
 * - Disabled state
 * - Custom formatting
 */

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../utils/cn';
import {
  sliderVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
} from './Slider.variants';
import type { SliderProps, RangeSliderProps } from './Slider.types';

// ============================================================================
// Slider Component
// ============================================================================

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, size = 'md', variant, label, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(sliderVariants({ size }), className)}
      {...props}
    >
      <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
        <SliderPrimitive.Range className={cn(sliderRangeVariants({ variant }))} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(sliderThumbVariants({ size, variant }))}
        aria-label={label || 'Slider value'}
      />
    </SliderPrimitive.Root>
  );
});

Slider.displayName = 'Slider';

// ============================================================================
// RangeSlider Component
// ============================================================================

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(({ label, startLabel, endLabel, size = 'md', variant, ...props }, ref) => {
  return (
    <SliderPrimitive.Root ref={ref} {...props}>
      <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
        <SliderPrimitive.Range className={cn(sliderRangeVariants({ variant }))} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(sliderThumbVariants({ size, variant }))}
        aria-label={startLabel || label || 'Minimum value'}
      />
      <SliderPrimitive.Thumb
        className={cn(sliderThumbVariants({ size, variant }))}
        aria-label={endLabel || label || 'Maximum value'}
      />
    </SliderPrimitive.Root>
  );
});

RangeSlider.displayName = 'RangeSlider';

// ============================================================================
// Exports
// ============================================================================

export { Slider, RangeSlider };
export {
  sliderVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
} from './Slider.variants';
export type {
  SliderProps,
  RangeSliderProps,
  SliderSkeletonProps,
  SliderVariant,
  SliderSize,
} from './Slider.types';

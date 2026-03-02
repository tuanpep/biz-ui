/**
 * Slider component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type * as SliderPrimitive from '@radix-ui/react-slider';
import type { VariantProps } from 'class-variance-authority';

/**
 * Slider variant types.
 */
export type SliderVariant = VariantProps<typeof import('./Slider.variants').sliderRangeVariants>['variant'];

/**
 * Slider size types.
 */
export type SliderSize = VariantProps<typeof import('./Slider.variants').sliderVariants>['size'];

/**
 * Slider component props.
 */
export interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'size'> {
  /** Size variant */
  size?: SliderSize;
  /** Color variant */
  variant?: SliderVariant;
  /** Label for accessibility */
  label?: string;
}

/**
 * Range Slider component props.
 */
export interface RangeSliderProps extends SliderProps {
  /** Label for first thumb */
  startLabel?: string;
  /** Label for second thumb */
  endLabel?: string;
}

/**
 * Slider skeleton props.
 */
export interface SliderSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match slider */
  size?: SliderSize;
  /** Show skeleton with range (two thumbs) */
  isRange?: boolean;
}

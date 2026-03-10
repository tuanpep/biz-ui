/**
 * Slider component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from "react";
import type * as SliderPrimitive from "@radix-ui/react-slider";
import type { VariantProps } from "class-variance-authority";

/**
 * Slider variant types.
 */
export type SliderVariant = VariantProps<
  typeof import("./Slider.variants").sliderRangeVariants
>["variant"];

/**
 * Slider size types.
 */
export type SliderSize = VariantProps<
  typeof import("./Slider.variants").sliderVariants
>["size"];

/**
 * Slider component props.
 */
export interface SliderProps extends Omit<
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  "size"
> {
  /** Size variant */
  size?: SliderSize;
  /** Color variant */
  variant?: SliderVariant;
  /** Label text for the slider */
  label?: string;
  /** Description text shown below the slider */
  description?: string;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Hide label visually but keep for accessibility */
  hideLabel?: boolean;
  /** Additional wrapper className when label/description is present */
  wrapperClassName?: string;
  /** Test id for testing */
  "data-testid"?: string;
}

/**
 * Range Slider component props.
 */
export interface RangeSliderProps extends Omit<SliderProps, "label"> {
  /** Label for the slider group */
  label?: string;
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
  /** Show label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

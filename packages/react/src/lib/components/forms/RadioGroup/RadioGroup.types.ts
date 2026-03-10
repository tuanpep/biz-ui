/**
 * RadioGroup component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from "react";
import type * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { VariantProps } from "class-variance-authority";

/**
 * RadioGroup variant types.
 */
export type RadioGroupVariant = VariantProps<
  typeof import("./RadioGroup.variants").radioGroupItemVariants
>["variant"];

/**
 * RadioGroup size types.
 */
export type RadioGroupSize = VariantProps<
  typeof import("./RadioGroup.variants").radioGroupItemVariants
>["size"];

/**
 * RadioGroup root component props.
 */
export interface RadioGroupProps extends React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> {
  /** Orientation of the radio group */
  orientation?: "horizontal" | "vertical";
  /** Label text for the radio group */
  label?: string;
  /** Description text shown below the label */
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
 * RadioGroup item component props.
 */
export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> {
  /** Radio item variant style */
  variant?: RadioGroupVariant;
  /** Radio item size */
  size?: RadioGroupSize;
  /** Label text for the radio item */
  label?: string;
  /** Description text shown below the label */
  description?: string;
}

/**
 * RadioGroup skeleton props.
 */
export interface RadioGroupSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of radio items to show in skeleton */
  itemCount?: number;
  /** Skeleton size to match radio item */
  size?: RadioGroupSize;
  /** Show skeleton with label placeholders */
  withLabels?: boolean;
  /** Show group label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

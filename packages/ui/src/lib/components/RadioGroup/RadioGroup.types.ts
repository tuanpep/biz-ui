/**
 * RadioGroup component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { VariantProps } from 'class-variance-authority';

/**
 * RadioGroup variant types.
 */
export type RadioGroupVariant = VariantProps<typeof import('./RadioGroup.variants').radioGroupItemVariants>['variant'];

/**
 * RadioGroup size types.
 */
export type RadioGroupSize = VariantProps<typeof import('./RadioGroup.variants').radioGroupItemVariants>['size'];

/**
 * RadioGroup root component props.
 */
export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /** Orientation of the radio group */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * RadioGroup item component props.
 */
export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
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
}

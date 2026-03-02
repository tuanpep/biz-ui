/**
 * Select component types.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Select trigger variant types.
 */
export type SelectTriggerVariant = VariantProps<typeof import('./Select.variants').selectTriggerVariants>['variant'];

/**
 * Select trigger size types.
 */
export type SelectTriggerSize = VariantProps<typeof import('./Select.variants').selectTriggerVariants>['size'];

/**
 * Select item size types.
 */
export type SelectItemSize = VariantProps<typeof import('./Select.variants').selectItemVariants>['size'];

/**
 * Select trigger props.
 */
export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-select').Trigger> {
  /** Select trigger variant style */
  variant?: SelectTriggerVariant;
  /** Select trigger size */
  size?: SelectTriggerSize;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Show error state */
  error?: boolean;
}

/**
 * Select item props.
 */
export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-select').Item> {
  /** Select item size */
  size?: SelectItemSize;
}

/**
 * Select skeleton props.
 */
export interface SelectSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match select trigger */
  size?: SelectTriggerSize;
  /** Show label skeleton */
  hasLabel?: boolean;
}

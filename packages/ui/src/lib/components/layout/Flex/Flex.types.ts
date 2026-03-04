/**
 * Flex component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Flex direction types.
 */
export type FlexDirection = VariantProps<typeof import('./Flex.variants').flexVariants>['direction'];

/**
 * Flex wrap types.
 */
export type FlexWrap = VariantProps<typeof import('./Flex.variants').flexVariants>['wrap'];

/**
 * Flex justify types.
 */
export type FlexJustify = VariantProps<typeof import('./Flex.variants').flexVariants>['justify'];

/**
 * Flex align types.
 */
export type FlexAlign = VariantProps<typeof import('./Flex.variants').flexVariants>['align'];

/**
 * Flex gap types.
 */
export type FlexGap = VariantProps<typeof import('./Flex.variants').flexVariants>['gap'];

/**
 * Flex component props.
 */
export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof import('./Flex.variants').flexVariants> {
  /** Map to a child element */
  asChild?: boolean;
}

/**
 * FlexItem flex types.
 */
export type FlexItemFlex = VariantProps<typeof import('./Flex.variants').flexItemVariants>['flex'];

/**
 * FlexItem align types.
 */
export type FlexItemAlign = VariantProps<typeof import('./Flex.variants').flexItemVariants>['alignSelf'];

/**
 * FlexItem order types.
 */
export type FlexItemOrder = VariantProps<typeof import('./Flex.variants').flexItemVariants>['order'];

/**
 * FlexItem component props.
 */
export interface FlexItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof import('./Flex.variants').flexItemVariants> {
  /** Map to a child element */
  asChild?: boolean;
}

/**
 * Spacer component props.
 */
export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Map to a child element */
  asChild?: boolean;
}

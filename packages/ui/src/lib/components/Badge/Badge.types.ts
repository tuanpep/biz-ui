/**
 * Badge component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Badge variant types.
 */
export type BadgeVariant = VariantProps<typeof import('./Badge.variants').badgeVariants>['variant'];

/**
 * Badge size types.
 */
export type BadgeSize = VariantProps<typeof import('./Badge.variants').badgeVariants>['size'];

/**
 * Badge component props.
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof import('./Badge.variants').badgeVariants> {
  /** Map to a child component */
  asChild?: boolean;
}

/**
 * BadgeSkeleton component props.
 */
export interface BadgeSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant style of the skeleton */
  variant?: BadgeVariant;
  /** Size of the skeleton */
  size?: BadgeSize;
  /** Animate the skeleton */
  animate?: boolean;
}

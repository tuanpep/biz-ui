/**
 * Skeleton component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Skeleton variant types.
 */
export type SkeletonVariant = VariantProps<typeof import('./Skeleton.variants').skeletonVariants>['variant'];

/**
 * Skeleton component props.
 */
export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof import('./Skeleton.variants').skeletonVariants> {
  /** Width of the skeleton */
  width?: string | number;
  /** Height of the skeleton */
  height?: string | number;
}

/**
 * SkeletonText component props.
 */
export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of lines to render */
  lines?: number;
  /** Whether to animate the skeleton */
  animate?: boolean;
  /** Line height */
  lineHeight?: number;
  /** Gap between lines */
  gap?: number;
  /** Last line width percentage */
  lastLineWidth?: number | string;
}

/**
 * SkeletonCircle component props.
 */
export interface SkeletonCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size (diameter) of the circle */
  size?: number | string;
  /** Whether to animate the skeleton */
  animate?: boolean;
}

/**
 * SkeletonGroup component props.
 */
export interface SkeletonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction of the group */
  direction?: 'row' | 'column';
  /** Gap between skeletons */
  gap?: number | string;
}

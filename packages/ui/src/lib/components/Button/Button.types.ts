/**
 * Button component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Button variant types.
 */
export type ButtonVariant = VariantProps<typeof import('./Button.variants').buttonVariants>['variant'];

/**
 * Button size types.
 */
export type ButtonSize = VariantProps<typeof import('./Button.variants').buttonVariants>['size'];

/**
 * Button component props.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Render as child component using Radix Slot */
  asChild?: boolean;
  /** Show loading spinner and disable button */
  loading?: boolean;
  /** Text to show when loading (for screen readers) */
  loadingText?: string;
}

/**
 * Button skeleton props.
 */
export interface ButtonSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match button */
  size?: ButtonSize;
  /** Show skeleton with icon placeholder */
  hasIcon?: boolean;
}

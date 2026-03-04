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
  /** Icon to show before the button text */
  leftIcon?: React.ReactNode;
  /** Icon to show after the button text */
  rightIcon?: React.ReactNode;
  /** Whether this is an icon-only button */
  hasIconOnly?: boolean;
  /** Tooltip alignment for icon-only buttons */
  tooltipAlignment?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
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

/**
 * ButtonSet component props.
 */
export interface ButtonSetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of buttons */
  orientation?: 'horizontal' | 'vertical';
  /** Stack buttons vertically (legacy prop) */
  stacked?: boolean;
}

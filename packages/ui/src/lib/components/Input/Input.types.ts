/**
 * Input component types.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Input variant types.
 */
export type InputVariant = VariantProps<typeof import('./Input.variants').inputVariants>['variant'];

/**
 * Input size types.
 */
export type InputSize = VariantProps<typeof import('./Input.variants').inputVariants>['size'];

/**
 * Input component props.
 */
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input variant style */
  variant?: InputVariant;
  /** Input size */
  size?: InputSize;
  /** Label text for the input */
  label?: string;
  /** Description text shown below the input */
  description?: string;
  /** Error message to display */
  error?: string;
  /** Additional wrapper className when label/description is present */
  wrapperClassName?: string;
}

/**
 * Input skeleton props.
 */
export interface InputSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match input */
  size?: InputSize;
  /** Show label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

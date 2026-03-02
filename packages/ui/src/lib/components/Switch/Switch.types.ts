/**
 * Switch component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type * as SwitchPrimitive from '@radix-ui/react-switch';
import type { VariantProps } from 'class-variance-authority';

/**
 * Switch variant types.
 */
export type SwitchVariant = VariantProps<typeof import('./Switch.variants').switchVariants>['variant'];

/**
 * Switch size types.
 */
export type SwitchSize = VariantProps<typeof import('./Switch.variants').switchVariants>['size'];

/**
 * Switch component props.
 */
export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /** Switch variant style */
  variant?: SwitchVariant;
  /** Switch size */
  size?: SwitchSize;
  /** Label text for the switch */
  label?: string;
  /** Description text shown below the label */
  description?: string;
}

/**
 * Switch skeleton props.
 */
export interface SwitchSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match switch */
  size?: SwitchSize;
  /** Show skeleton with label placeholder */
  withLabel?: boolean;
}

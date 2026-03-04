/**
 * Alert component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Alert variant types.
 */
export type AlertVariant = VariantProps<
  typeof import("./Alert.variants").alertVariants
>["variant"];

/**
 * Alert component props.
 */
export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof import("./Alert.variants").alertVariants> {
  /** Title of the alert */
  title?: string;
  /** Description text */
  description?: string;
  /** Icon to display (defaults to variant-specific icon) */
  icon?: React.ReactNode;
  /** Whether to show the icon */
  showIcon?: boolean;
  /** Whether the alert can be closed */
  closable?: boolean;
  /** Callback when alert is closed */
  onClose?: () => void;
  /** Actions to display in the alert */
  actions?: React.ReactNode;
}

/**
 * AlertTitle component props.
 */
export type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

/**
 * AlertDescription component props.
 */
export type AlertDescriptionProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * AlertSkeleton component props.
 */
export interface AlertSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant style of the skeleton */
  variant?: AlertVariant;
  /** Animate the skeleton */
  animate?: boolean;
}

/**
 * Tag component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Tag variant types.
 */
export type TagVariant = VariantProps<
  typeof import("./Tag.variants").tagVariants
>["variant"];

/**
 * Tag size types.
 */
export type TagSize = VariantProps<
  typeof import("./Tag.variants").tagVariants
>["size"];

/**
 * Tag component props.
 */
export interface TagProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "size" | "selected" | "onSelect"
> {
  /** Tag color variant */
  variant?: TagVariant;
  /** Size variant */
  size?: TagSize;
  /** Selected state (for visual styling) */
  selected?: boolean;
  /** Icon to display before the label */
  icon?: React.ReactNode;
  /** Show close button */
  dismissible?: boolean;
  /** Callback when close button is clicked */
  onDismiss?: () => void;
  /** Make tag selectable (clickable) */
  selectable?: boolean;
  /** Callback when tag is clicked (for selectable tags) */
  onSelect?: (selected: boolean) => void;
}

/**
 * DismissibleTag component props.
 */
export interface DismissibleTagProps extends Omit<TagProps, "dismissible"> {
  /** Callback when tag is dismissed */
  onDismiss: () => void;
}

/**
 * SelectableTag component props.
 */
export interface SelectableTagProps extends Omit<TagProps, "selectable"> {
  /** Selected state */
  selected?: boolean;
  /** Callback when selection changes */
  onSelect?: (selected: boolean) => void;
}

/**
 * TagSkeleton component props.
 */
export interface TagSkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tag color variant */
  variant?: TagVariant;
  /** Size variant */
  size?: TagSize;
  /** Animate the skeleton */
  animate?: boolean;
  /** Show icon placeholder */
  hasIcon?: boolean;
}

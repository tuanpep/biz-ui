/**
 * Avatar component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { VariantProps } from "class-variance-authority";

/**
 * Avatar size types.
 */
export type AvatarSize = VariantProps<
  typeof import("./Avatar.variants").avatarVariants
>["size"];

/**
 * Avatar component props.
 */
export type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> &
  VariantProps<typeof import("./Avatar.variants").avatarVariants>;

/**
 * AvatarImage component props.
 */
export type AvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;

/**
 * AvatarFallback component props.
 */
export type AvatarFallbackProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
> &
  VariantProps<typeof import("./Avatar.variants").avatarFallbackVariants>;

/**
 * AvatarSkeleton component props.
 */
export interface AvatarSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the skeleton avatar */
  size?: AvatarSize;
  /** Animate the skeleton */
  animate?: boolean;
}

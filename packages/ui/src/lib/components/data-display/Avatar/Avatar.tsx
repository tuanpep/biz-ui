/**
 * Avatar Component
 *
 * Design Principles:
 * - Consistent sizing with other components
 * - Support for images and fallback text
 * - Accessible alternative text
 * - Optional status indicator
 */

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../../utils/cn";
import {
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
} from "./Avatar.variants";
import type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
} from "./Avatar.types";

// ============================================================================
// Avatar Component
// ============================================================================

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size }), className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

// ============================================================================
// AvatarImage Component
// ============================================================================

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(avatarImageVariants(), className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// ============================================================================
// AvatarFallback Component
// ============================================================================

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallbackVariants({ size }), className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// ============================================================================
// Exports
// ============================================================================

export { Avatar, AvatarImage, AvatarFallback };
export {
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
} from "./Avatar.variants";
export type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarSize,
} from "./Avatar.types";

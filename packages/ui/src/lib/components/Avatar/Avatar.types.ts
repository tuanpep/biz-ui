/**
 * Avatar component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { VariantProps } from 'class-variance-authority';

/**
 * Avatar size types.
 */
export type AvatarSize = VariantProps<typeof import('./Avatar.variants').avatarVariants>['size'];

/**
 * Avatar component props.
 */
export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof import('./Avatar.variants').avatarVariants> {}

/**
 * AvatarImage component props.
 */
export type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

/**
 * AvatarFallback component props.
 */
export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof import('./Avatar.variants').avatarFallbackVariants> {}

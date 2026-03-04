/**
 * Avatar Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 * - Skeleton component
 */

// Main components
export { Avatar, AvatarImage, AvatarFallback, avatarVariants, avatarImageVariants, avatarFallbackVariants } from './Avatar';

// Skeleton component
export { AvatarSkeleton } from './Avatar.skeleton';

// Types
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps, AvatarSize, AvatarSkeletonProps } from './Avatar.types';

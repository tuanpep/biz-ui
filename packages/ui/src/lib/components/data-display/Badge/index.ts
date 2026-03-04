/**
 * Badge Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 * - Skeleton component
 */

// Main components
export { Badge, badgeVariants } from './Badge';

// Skeleton component
export { BadgeSkeleton } from './Badge.skeleton';

// Types
export type { BadgeProps, BadgeVariant, BadgeSize, BadgeSkeletonProps } from './Badge.types';

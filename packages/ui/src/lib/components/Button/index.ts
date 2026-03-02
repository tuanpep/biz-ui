/**
 * Button Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Skeleton variant
 * - Variants utility
 * - Type exports
 */

// Main component
export { Button, buttonVariants } from './Button';

// Skeleton variant
export { ButtonSkeleton } from './Button.skeleton';

// Types
export type {
  ButtonProps,
  ButtonSkeletonProps,
  ButtonVariant,
  ButtonSize,
} from './Button.types';

/**
 * Card Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Sub-components
 * - Variants utility
 * - Skeleton component
 * - Type exports
 */

// Main components
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
} from './Card';

// Skeleton component
export { CardSkeleton } from './Card.skeleton';

// Types
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
  CardVariant,
  CardSize,
  CardSkeletonProps,
} from './Card.types';

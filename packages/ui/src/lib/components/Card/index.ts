/**
 * Card Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
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
} from './Card.types';

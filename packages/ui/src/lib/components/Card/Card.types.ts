/**
 * Card component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Card variant types.
 */
export type CardVariant = VariantProps<typeof import('./Card.variants').cardVariants>['variant'];

/**
 * Card size types.
 */
export type CardSize = VariantProps<typeof import('./Card.variants').cardVariants>['size'];

/**
 * Card component props.
 */
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof import('./Card.variants').cardVariants> {
  asChild?: boolean;
}

/**
 * CardHeader component props.
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

/**
 * CardTitle component props.
 */
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

/**
 * CardDescription component props.
 */
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}

/**
 * CardContent component props.
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

/**
 * CardFooter component props.
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

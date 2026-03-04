/**
 * Typography Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Variants utilities
 * - Type exports
 */

// Main components
export {
  Heading,
  Body,
  TypographyLabel,
  HelperText,
  Code,
  Typography,
} from './Typography';

// Variants
export {
  headingVariants,
  bodyVariants,
  typographyLabelVariants,
  helperTextVariants,
  codeVariants,
} from './Typography.variants';

// Types
export type {
  HeadingProps,
  BodyProps,
  TypographyLabelProps,
  HelperTextProps,
  CodeProps,
  HeadingVariant,
  BodyVariant,
  TypographyLabelVariant,
  HelperTextVariant,
  CodeVariant,
} from './Typography.types';

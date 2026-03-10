/**
 * Stack Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 */

// Main components
export { Stack, HStack, VStack, stackVariants } from "./Stack";

// Types
export type {
  StackProps,
  HStackProps,
  VStackProps,
  StackGap,
  StackAlign,
  StackJustify,
  StackDirection,
} from "./Stack.types";

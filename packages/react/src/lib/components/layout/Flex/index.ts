/**
 * Flex Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 */

// Main components
export { Flex, FlexItem, Spacer, flexVariants, flexItemVariants } from "./Flex";

// Types
export type {
  FlexProps,
  FlexItemProps,
  SpacerProps,
  FlexDirection,
  FlexWrap,
  FlexJustify,
  FlexAlign,
  FlexGap,
  FlexItemFlex,
  FlexItemAlign,
  FlexItemOrder,
} from "./Flex.types";

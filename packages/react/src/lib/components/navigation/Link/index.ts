/**
 * Link Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 */

// Main components
export { Link, linkVariants } from "./Link";

// Types
export type {
  LinkProps,
  LinkVariant,
  LinkUnderline,
  LinkSize,
} from "./Link.types";

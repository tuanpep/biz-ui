/**
 * Sheet Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Type exports
 */

// Main components
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  sheetContentVariants,
} from "./Sheet";

// Types
export type {
  SheetOverlayProps,
  SheetContentProps,
  SheetHeaderProps,
  SheetFooterProps,
  SheetTitleProps,
  SheetDescriptionProps,
  SheetSide,
} from "./Sheet.types";

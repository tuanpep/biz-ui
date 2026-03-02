/**
 * ComposedModal Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Variants utility
 * - Type exports
 */

// Main components
export {
  // Root components
  ComposedModal,
  ComposedModalTrigger,
  ComposedModalClose,
  ComposedModalContent,
  // Sub-components
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Skeleton
  ModalSkeleton,
} from './composed-modal';

// Variants
export { modalVariants } from './composed-modal.variants';

// Types
export type {
  ModalOverlayProps,
  ComposedModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalSkeletonProps,
  ModalSize,
} from './composed-modal.types';

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
} from './ComposedModal';

// Variants
export { modalVariants } from './ComposedModal.variants';

// Types
export type {
  ModalOverlayProps,
  ComposedModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalSkeletonProps,
  ModalSize,
} from './ComposedModal.types';

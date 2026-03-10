/**
 * FileUploader Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Sub-components
 * - Skeleton component
 * - Variants utilities
 * - Type exports
 */

// Main component
export { FileUploader } from "./FileUploader";

// Sub-components
export { FileUploaderButton } from "./FileUploaderButton";
export { FileUploaderDropContainer } from "./FileUploaderDropContainer";
export { FileUploaderItem } from "./FileUploaderItem";

// Skeleton component
export { FileUploaderSkeleton } from "./FileUploader.skeleton";

// Variants
export {
  fileUploaderVariants,
  fileUploaderButtonVariants,
  fileUploaderDropContainerVariants,
  fileUploaderItemVariants,
  fileUploaderSkeletonVariants,
  fileUploaderSkeletonLabelVariants,
  fileUploaderSkeletonDropContainerVariants,
  fileUploaderSkeletonItemVariants,
} from "./FileUploader.variants";

// Types
export type {
  FileUploaderProps,
  FileUploaderButtonProps,
  FileUploaderDropContainerProps,
  FileUploaderItemProps,
  FileUploaderFile,
  FileUploaderFileStatus,
  FileUploaderSize,
  FileUploaderSkeletonProps,
} from "./FileUploader.types";

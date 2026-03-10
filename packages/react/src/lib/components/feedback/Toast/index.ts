/**
 * Toast Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 */

// Main components
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastTitle,
  ToastDescription,
  ToastProvider,
  ToastViewport,
  ToastContextProvider,
  toastVariants,
  useToast,
} from "./Toast";

// Types
export type {
  ToastProps,
  ToastActionProps,
  ToastCloseProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastViewportProps,
  ToastProviderProps,
  ToastMessage,
  ToastContextValue,
  ToastVariant,
} from "./Toast.types";

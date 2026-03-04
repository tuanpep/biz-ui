/**
 * Toast component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Toast variant types.
 */
export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

/**
 * Toast message interface.
 */
export interface ToastMessage {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
}

/**
 * Toast context value interface.
 */
export interface ToastContextValue {
  toasts: ToastMessage[];
  toast: (message: Omit<ToastMessage, "id">) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

/**
 * Toast component props.
 */
export type ToastProps = React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-toast").Root
> &
  VariantProps<typeof import("./Toast.variants").toastVariants>;

/**
 * ToastAction component props.
 */
export type ToastActionProps = React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-toast").Action
>;

/**
 * ToastClose component props.
 */
export type ToastCloseProps = React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-toast").Close
>;

/**
 * ToastTitle component props.
 */
export type ToastTitleProps = React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-toast").Title
>;

/**
 * ToastDescription component props.
 */
export type ToastDescriptionProps = React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-toast").Description
>;

/**
 * ToastViewport component props.
 */
export type ToastViewportProps = React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-toast").Viewport
>;

/**
 * ToastProvider props.
 */
export interface ToastProviderProps {
  children: React.ReactNode;
  /** Duration in milliseconds (default: 5000) */
  duration?: number;
  /** Maximum number of toasts to show */
  maxToasts?: number;
  /** Position of toast container */
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
}

/**
 * Toast options for imperative usage.
 */
export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
};

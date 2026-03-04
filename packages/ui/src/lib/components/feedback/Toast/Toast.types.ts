/**
 * Toast component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Toast variant types.
 */
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

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
  toast: (message: Omit<ToastMessage, 'id'>) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

/**
 * Toast component props.
 */
export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-toast').Root>,
  VariantProps<typeof import('./Toast.variants').toastVariants> {}

/**
 * ToastAction component props.
 */
export interface ToastActionProps
  extends React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-toast').Action> {}

/**
 * ToastClose component props.
 */
export interface ToastCloseProps
  extends React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-toast').Close> {}

/**
 * ToastTitle component props.
 */
export interface ToastTitleProps
  extends React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-toast').Title> {}

/**
 * ToastDescription component props.
 */
export interface ToastDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-toast').Description> {}

/**
 * ToastViewport component props.
 */
export interface ToastViewportProps
  extends React.ComponentPropsWithoutRef<typeof import('@radix-ui/react-toast').Viewport> {}

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
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
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

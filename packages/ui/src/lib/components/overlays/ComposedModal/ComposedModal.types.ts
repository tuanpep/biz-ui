/**
 * ComposedModal component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { VariantProps } from 'class-variance-authority';

/**
 * Modal size type.
 */
export type ModalSize = VariantProps<typeof import('./composed-modal.variants').modalVariants>['size'];

/**
 * Modal overlay props.
 */
export interface ModalOverlayProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}

/**
 * ComposedModal content props.
 */
export interface ComposedModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof import('./composed-modal.variants').modalVariants> {
  /** Label for the close button (for accessibility) */
  closeButtonLabel?: string;
  /** Hide the close button */
  hideCloseButton?: boolean;
}

/**
 * Modal header props.
 */
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Modal title */
  title?: string;
  /** Modal description/subtitle */
  description?: string;
  /** Show close button in header (alternative to top-right close) */
  showCloseButton?: boolean;
  /** Icon to display next to title */
  icon?: React.ReactNode;
}

/**
 * Modal body props.
 */
export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable scrolling for long content */
  scrollable?: boolean;
}

/**
 * Modal footer props.
 */
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Align footer content */
  align?: 'left' | 'center' | 'right' | 'between';
}

/**
 * Modal skeleton props.
 */
export interface ModalSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show header skeleton */
  hasHeader?: boolean;
  /** Show footer skeleton */
  hasFooter?: boolean;
  /** Number of body lines */
  bodyLines?: number;
}

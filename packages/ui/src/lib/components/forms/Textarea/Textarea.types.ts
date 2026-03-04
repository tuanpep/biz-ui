/**
 * Textarea component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * Textarea variant types.
 */
export type TextareaVariant = VariantProps<typeof import('./Textarea.variants').textareaVariants>['variant'];

/**
 * Textarea resize types.
 */
export type TextareaResize = VariantProps<typeof import('./Textarea.variants').textareaVariants>['resize'];

/**
 * Textarea size types.
 */
export type TextareaSize = VariantProps<typeof import('./Textarea.variants').textareaVariants>['size'];

/**
 * Textarea component props.
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Textarea variant style */
  variant?: TextareaVariant;
  /** Textarea resize behavior */
  resize?: TextareaResize;
  /** Textarea size */
  size?: TextareaSize;
  /** Label text for the textarea */
  label?: string;
  /** Description text shown below the textarea */
  description?: string;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Hide label visually but keep for accessibility */
  hideLabel?: boolean;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
  /** Enable auto-resize based on content */
  autoResize?: boolean;
  /** Additional wrapper className when label/description is present */
  wrapperClassName?: string;
  /** Test id for testing */
  'data-testid'?: string;
}

/**
 * Textarea skeleton props.
 */
export interface TextareaSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match textarea */
  size?: TextareaSize;
  /** Show label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Number of lines to show */
  lines?: number;
}

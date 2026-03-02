/**
 * Textarea component types.
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
  /** Error message to display */
  error?: string;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
  /** Enable auto-resize based on content */
  autoResize?: boolean;
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

/**
 * FileUploader component types.
 * Following Carbon's FileUploader patterns with enhanced validation states.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * FileUploader size types.
 */
export type FileUploaderSize = VariantProps<typeof import('./FileUploader.variants').fileUploaderVariants>['size'];

/**
 * File status type.
 */
export type FileUploaderFileStatus = 'uploading' | 'complete' | 'editing' | 'error';

/**
 * Uploaded file type.
 */
export interface FileUploaderFile {
  /** Unique identifier for the file */
  uuid: string;
  /** File name */
  name: string;
  /** File size in bytes */
  size: number;
  /** File MIME type */
  type: string;
  /** Upload status */
  status?: FileUploaderFileStatus;
  /** Error message if status is error */
  errorMessage?: string;
  /** Upload progress (0-100) */
  progress?: number;
  /** Invalid state */
  invalid?: boolean;
}

/**
 * FileUploader component props.
 */
export interface FileUploaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Input size */
  size?: FileUploaderSize;
  /** Label text for the uploader */
  label?: string;
  /** Description text shown below the uploader */
  description?: string;
  /** Error message to display (sets invalid state) */
  error?: string;
  /** Warning message to display (warning state, not invalid) */
  warn?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Hide label visually but keep for accessibility */
  hideLabel?: boolean;
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Test id for testing */
  'data-testid'?: string;
  /** Accepted file types (e.g., '.jpg,.png,image/*') */
  accept?: string;
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Maximum file size in bytes */
  maxFileSize?: number;
  /** Maximum number of files */
  maxFiles?: number;
  /** Files array */
  files?: FileUploaderFile[];
  /** Callback when files change */
  onChange?: (files: FileUploaderFile[]) => void;
  /** Button label text */
  buttonLabel?: string;
  /** Drop container label text */
  dropContainerLabel?: string;
  /** Label for drag and drop */
  dragAndDropLabel?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state (renders as disabled but accessible) */
  readOnly?: boolean;
  /** Callback to handle file removal */
  onRemove?: (file: FileUploaderFile, index: number) => void;
  /** Callback to handle file click */
  onFileClick?: (file: FileUploaderFile, index: number) => void;
}

/**
 * FileUploaderButton component props.
 */
export interface FileUploaderButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Button size */
  size?: FileUploaderSize;
  /** Disabled state */
  disabled?: boolean;
  /** Accept file types */
  accept?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Button label */
  children?: React.ReactNode;
  /** onChange handler for file input */
  onChange?: (files: FileList) => void;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
}

/**
 * FileUploaderDropContainer component props.
 */
export interface FileUploaderDropContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'> {
  /** Container size */
  size?: FileUploaderSize;
  /** Disabled state */
  disabled?: boolean;
  /** Accept file types */
  accept?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** onChange handler for file input */
  onChange?: (files: FileList) => void;
  /** Label for drop container */
  label?: string;
  /** Custom drop label */
  dropLabel?: string;
  /** Drop container variant */
  variant?: 'default' | 'compact';
}

/**
 * FileUploaderItem component props.
 */
export interface FileUploaderItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Item size */
  size?: FileUploaderSize;
  /** File data */
  file: FileUploaderFile;
  /** Index in file list */
  index?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
  /** Show delete button */
  onDelete?: () => void;
  /** Show edit button */
  onEdit?: () => void;
  /** On item click */
  onClick?: () => void;
  /** Error message */
  error?: string;
}

/**
 * FileUploader skeleton props.
 */
export interface FileUploaderSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size */
  size?: FileUploaderSize;
  /** Show label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
  /** Number of file item skeletons */
  itemCount?: number;
}

/**
 * FileUploader Component
 *
 * Design Principles:
 * - Drag and drop file upload
 * - Multiple file support
 * - File size and type validation
 * - Carbon-aligned validation patterns
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { fileUploaderVariants } from './FileUploader.variants';
import { FileUploaderButton } from './FileUploaderButton';
import { FileUploaderDropContainer } from './FileUploaderDropContainer';
import { FileUploaderItem } from './FileUploaderItem';
import type {
  FileUploaderProps,
  FileUploaderFile,
} from './FileUploader.types';

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Generate a unique ID for a file.
 */
const generateUUID = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Convert FileList to FileUploaderFile array.
 */
const fileListToFiles = (fileList: FileList): FileUploaderFile[] => {
  return Array.from(fileList).map((file) => ({
    uuid: generateUUID(),
    name: file.name,
    size: file.size,
    type: file.type,
    status: 'uploading' as const,
  }));
};

/**
 * Format file size for display.
 */
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
};

// ============================================================================
// FileUploader Component
// ============================================================================

const FileUploader = React.forwardRef<HTMLDivElement, FileUploaderProps>(
  (
    {
      className,
      wrapperClassName,
      size = 'md',
      label,
      description,
      error,
      warn,
      required = false,
      hideLabel = false,
      accept,
      multiple = true,
      maxFileSize,
      maxFiles,
      files: controlledFiles,
      onChange,
      buttonLabel = 'Add file',
      dropContainerLabel,
      dragAndDropLabel = 'Drag and drop files here or click to upload',
      disabled = false,
      readOnly = false,
      onRemove,
      onFileClick,
      'data-testid': testId,
      id: propId,
      ...props
    },
    ref
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const uploaderId = propId || generatedId;
    const descriptionId = `${uploaderId}-description`;
    const errorId = `${uploaderId}-error`;
    const warnId = `${uploaderId}-warn`;

    // Calculate effective states
    const effectiveDisabled = !readOnly && disabled;
    const hasError = !readOnly && !effectiveDisabled && !!error;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    // Internal state for uncontrolled mode
    const [internalFiles, setInternalFiles] = React.useState<FileUploaderFile[]>([]);
    const files = controlledFiles ?? internalFiles;

    // Handle file selection
    const handleFilesChange = (fileList: FileList) => {
      if (effectiveDisabled || readOnly) return;

      const newFiles = fileListToFiles(fileList);

      // Validate file sizes
      if (maxFileSize) {
        newFiles.forEach((file) => {
          if (file.size > maxFileSize) {
            file.status = 'error';
            file.errorMessage = `File size (${formatFileSize(file.size)}) exceeds limit (${formatFileSize(maxFileSize)})`;
          }
        });
      }

      // Check max files limit
      if (maxFiles !== undefined && files.length + newFiles.length > maxFiles) {
        const allowedFiles = newFiles.slice(0, maxFiles - files.length);
        const allFiles = multiple ? [...files, ...allowedFiles] : allowedFiles;
        if (onChange) {
          onChange(allFiles);
        } else {
          setInternalFiles(allFiles);
        }
        return;
      }

      const allFiles = multiple ? [...files, ...newFiles] : newFiles;
      if (onChange) {
        onChange(allFiles);
      } else {
        setInternalFiles(allFiles);
      }
    };

    // Handle file removal
    const handleRemove = (file: FileUploaderFile, index: number) => {
      if (effectiveDisabled || readOnly) return;
      const newFiles = files.filter((_, i) => i !== index);
      if (onChange) {
        onChange(newFiles);
      } else {
        setInternalFiles(newFiles);
      }
      onRemove?.(file, index);
    };

    // Handle file click
    const handleFileClick = (file: FileUploaderFile, index: number) => {
      if (effectiveDisabled) return;
      onFileClick?.(file, index);
    };

    // Build aria-describedby
    const ariaDescribedBy = [
      description && !hasError && !hasWarning ? descriptionId : null,
      hasError ? errorId : null,
      hasWarning ? warnId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    // Render drop container and button
    const uploadArea = (
      <div className="flex flex-col gap-2">
        <FileUploaderDropContainer
          size={size}
          accept={accept}
          multiple={multiple}
          disabled={effectiveDisabled}
          onChange={handleFilesChange}
          label={dropContainerLabel || dragAndDropLabel}
        />
        {buttonLabel && (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">or</span>
            <FileUploaderButton
              size={size}
              accept={accept}
              multiple={multiple}
              disabled={effectiveDisabled}
              onChange={handleFilesChange}
            >
              {buttonLabel}
            </FileUploaderButton>
          </div>
        )}
      </div>
    );

    // Render file items
    const fileItems = files.length > 0 && (
      <div className="flex flex-col gap-2 mt-4">
        {files.map((file, index) => (
          <FileUploaderItem
            key={file.uuid}
            size={size}
            file={file}
            index={index}
            disabled={effectiveDisabled}
            readOnly={readOnly}
            onDelete={() => handleRemove(file, index)}
            onClick={() => handleFileClick(file, index)}
            error={file.errorMessage}
          />
        ))}
      </div>
    );

    // Render without wrapper if no label/description/error/warn
    if (hideLabel && !description && !hasError && !hasWarning) {
      return (
        <div
          ref={ref}
          id={uploaderId}
          className={cn(
            fileUploaderVariants({ size, disabled: effectiveDisabled }),
            className
          )}
          data-testid={testId}
          {...props}
        >
          {uploadArea}
          {fileItems}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        id={uploaderId}
        className={cn(
          fileUploaderVariants({ size, disabled: effectiveDisabled }),
          wrapperClassName
        )}
        data-testid={testId}
        {...props}
      >
        {label && !hideLabel && (
          <label
            htmlFor={uploaderId}
            className={cn(
              'block font-medium mb-1.5 text-text-02',
              size === 'sm' && 'text-xs',
              size === 'lg' && 'text-base',
              effectiveDisabled && 'opacity-50'
            )}
          >
            {label}
            {required && (
              <span className="text-destructive ml-1" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        {uploadArea}
        {fileItems}
        <div>
          {description && !hasError && !hasWarning && (
            <p id={descriptionId} className="text-sm text-muted-foreground mt-1">
              {description}
            </p>
          )}
          {hasError && (
            <p id={errorId} className="text-xs text-destructive mt-1" role="alert">
              {error}
            </p>
          )}
          {hasWarning && !hasError && (
            <p id={warnId} className="text-xs text-warning mt-1" role="alert">
              {warn}
            </p>
          )}
        </div>
      </div>
    );
  }
);

FileUploader.displayName = 'FileUploader';

// ============================================================================
// Exports
// ============================================================================

export { FileUploader };
export { FileUploaderButton } from './FileUploaderButton';
export { FileUploaderDropContainer } from './FileUploaderDropContainer';
export { FileUploaderItem } from './FileUploaderItem';
export {
  fileUploaderVariants,
  fileUploaderButtonVariants
  fileUploaderDropContainerVariants
  fileUploaderItemVariants
} from './FileUploader.variants';
export type {
  FileUploaderProps,
  FileUploaderButtonProps
  FileUploaderDropContainerProps
  FileUploaderItemProps
  FileUploaderFile
  FileUploaderFileStatus
  FileUploaderSize
  FileUploaderSkeletonProps
} from './FileUploader.types';

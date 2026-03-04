/**
 * FileUploaderButton Component
 *
 * Button component that triggers file selection dialog.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { fileUploaderButtonVariants } from './FileUploader.variants';
import type { FileUploaderButtonProps } from './FileUploader.types';

// ============================================================================
// FileUploaderButton Component
// ============================================================================

const FileUploaderButton = React.forwardRef<HTMLInputElement, FileUploaderButtonProps>(
  (
    {
      className,
      size = 'md',
      variant = 'primary',
      disabled = false,
      accept,
      multiple = false,
      onChange,
      children = 'Add file',
      id: propId,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const generatedId = React.useId();
    const inputId = propId || `${generatedId}-input`;

    // Expose input ref to parent
    React.useImperativeHandle(ref, () => inputRef.current!);

    const handleClick = () => {
      if (disabled) return;
      inputRef.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || !onChange) return;
      const files = event.target.files;
      if (files && files.length > 0) {
        onChange(files);
      }
      // Reset input value to allow selecting the same file again
      event.target.value = '';
    };

    return (
      <>
        <button
          type="button"
          disabled={disabled}
          onClick={handleClick}
          className={cn(fileUploaderButtonVariants({ size, variant }), className)}
          aria-disabled={disabled}
          {...props}
        >
          {children}
        </button>
        <input
          ref={inputRef}
          type="file"
          id={inputId}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          className="hidden"
          aria-hidden="true"
          tabIndex={-1}
        />
      </>
    );
  }
);

FileUploaderButton.displayName = 'FileUploaderButton';

// ============================================================================
// Exports
// ============================================================================

export { FileUploaderButton };

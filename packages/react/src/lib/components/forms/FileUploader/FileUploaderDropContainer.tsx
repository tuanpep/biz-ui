/**
 * FileUploaderDropContainer Component
 *
 * Drag and drop container for file uploads.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { Upload } from "lucide-react";
import { fileUploaderDropContainerVariants } from "./FileUploader.variants";
import type { FileUploaderDropContainerProps } from "./FileUploader.types";

// ============================================================================
// FileUploaderDropContainer Component
// ============================================================================

const FileUploaderDropContainer = React.forwardRef<
  HTMLDivElement,
  FileUploaderDropContainerProps
>(
  (
    {
      className,
      size = "md",
      variant = "default",
      disabled = false,
      accept,
      multiple,
      onChange,
      label = "Drag and drop files here or click to upload",
      dropLabel = "Drop files here",
      "data-testid": testId,
      ...props
    },
    ref,
  ) => {
    const [isDragActive, setIsDragActive] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = () => {
      if (disabled) return;
      inputRef.current?.click();
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (!disabled) {
        setIsDragActive(true);
      }
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragActive(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragActive(false);

      if (disabled) return;

      const files = event.dataTransfer.files;
      if (files.length > 0 && onChange) {
        onChange(files);
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0 && onChange) {
        onChange(files);
      }
      // Reset input value to allow re-uploading the same file
      event.target.value = "";
    };

    return (
      <div
        ref={ref}
        className={cn(
          fileUploaderDropContainerVariants({
            size: variant === "compact" ? "sm" : size,
            disabled,
            active: isDragActive,
          }),
          className,
        )}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-label={isDragActive ? dropLabel : label}
        data-testid={testId}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          className="hidden"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="flex flex-col items-center gap-2 text-center">
          {isDragActive ? (
            <>
              <Upload className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-primary">
                {dropLabel}
              </span>
            </>
          ) : (
            <>
              <Upload
                className={cn(
                  "h-6 w-6",
                  disabled ? "text-muted-foreground" : "text-muted-foreground",
                )}
              />
              <span
                className={cn(
                  "text-sm",
                  disabled ? "text-muted-foreground" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
              <span className="text-xs text-muted-foreground">
                {multiple
                  ? "You can upload multiple files"
                  : "You can upload one file"}
              </span>
            </>
          )}
        </div>
      </div>
    );
  },
);

FileUploaderDropContainer.displayName = "FileUploaderDropContainer";

// ============================================================================
// Exports
// ============================================================================

export { FileUploaderDropContainer };

/**
 * FileUploaderItem Component
 *
 * Individual file item in the upload list.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  CheckCircle,
  XCircle,
  Edit2,
  Loader2,
  FileText,
  AlertCircle,
} from "lucide-react";
import { fileUploaderItemVariants } from "./FileUploader.variants";
import type { FileUploaderItemProps } from "./FileUploader.types";

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Format file size to human readable format.
 */
function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

// ============================================================================
// FileUploaderItem Component
// ============================================================================

const FileUploaderItem = React.forwardRef<
  HTMLDivElement,
  FileUploaderItemProps
>(
  (
    {
      className,
      size = "md",
      file,
      disabled = false,
      readOnly = false,
      onDelete,
      onEdit,
      onClick,
      error,
      ...props
    },
    ref,
  ) => {
    const status = file.status || (error ? "error" : undefined);
    const hasError = status === "error" || !!error;
    const isUploading = status === "uploading";

    // Get status icon
    const StatusIcon = () => {
      if (isUploading) {
        return <Loader2 className="h-4 w-4 animate-spin text-primary" />;
      }
      if (hasError) {
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      }
      if (status === "complete") {
        return <CheckCircle className="h-4 w-4 text-success" />;
      }
      return <FileText className="h-4 w-4 text-muted-foreground" />;
    };

    return (
      <div
        ref={ref}
        className={cn(
          fileUploaderItemVariants({ size, status, disabled, readOnly }),
          hasError && "border-destructive",
          className,
        )}
        {...props}
      >
        <button
          type="button"
          className={cn(
            "flex items-center gap-2 flex-1 text-left",
            "cursor-pointer hover:bg-muted/50 rounded-sm p-1 -ml-1",
            (disabled || readOnly) &&
              "disabled:cursor-default disabled:pointer-events-none read-only:cursor-default read-only:pointer-events-none",
          )}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          disabled={disabled || readOnly}
        >
          <StatusIcon />
          <span className="flex-1 truncate">{file.name}</span>
          <span className="text-muted-foreground text-xs">
            {formatFileSize(file.size)}
          </span>
        </button>

        {/* Error message */}
        {hasError && (error || file.errorMessage) && (
          <span className="text-destructive text-xs ml-6 truncate">
            {error || file.errorMessage}
          </span>
        )}

        {/* Progress bar for uploading */}
        {isUploading && typeof file.progress === "number" && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/20">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${file.progress}%` }}
            />
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-1">
          {onEdit && status !== "uploading" && !disabled && !readOnly && (
            <button
              type="button"
              className="p-1 rounded-sm hover:bg-muted text-muted-foreground hover:text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              aria-label="Edit file"
            >
              <Edit2 className="h-4 w-4" />
            </button>
          )}
          {onDelete && !disabled && !readOnly && (
            <button
              type="button"
              className="p-1 rounded-sm hover:bg-muted text-muted-foreground hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              aria-label="Remove file"
            >
              <XCircle className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  },
);

FileUploaderItem.displayName = "FileUploaderItem";

// ============================================================================
// Exports
// ============================================================================

export { FileUploaderItem };

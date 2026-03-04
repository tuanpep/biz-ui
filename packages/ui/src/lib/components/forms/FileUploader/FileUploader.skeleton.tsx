/**
 * FileUploader Skeleton Component
 *
 * Loading placeholder for FileUploader component.
 * Following Carbon's skeleton pattern.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  fileUploaderSkeletonLabelVariants,
  fileUploaderSkeletonDropContainerVariants,
  fileUploaderSkeletonItemVariants,
} from "./FileUploader.variants";
import type { FileUploaderSkeletonProps } from "./FileUploader.types";

// ============================================================================
// FileUploader Skeleton Component
// ============================================================================

const FileUploaderSkeleton = React.forwardRef<
  HTMLDivElement,
  FileUploaderSkeletonProps
>(
  (
    {
      className,
      size = "md",
      hasLabel = false,
      hasDescription = false,
      hasError = false,
      itemCount = 0,
      ...props
    },
    ref,
  ) => {
    const dropContainerElement = (
      <div
        className={cn(fileUploaderSkeletonDropContainerVariants({ size }))}
      />
    );

    const itemsElement = itemCount > 0 && (
      <div className="flex flex-col gap-2 mt-4">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div
            key={index}
            className={cn(fileUploaderSkeletonItemVariants({ size }))}
          />
        ))}
      </div>
    );

    // Render without wrapper if no label/description/error
    if (!hasLabel && !hasDescription && !hasError) {
      return (
        <div ref={ref} className={className} aria-hidden="true" {...props}>
          {dropContainerElement}
          {itemsElement}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5", className)}
        aria-hidden="true"
        {...props}
      >
        {hasLabel && (
          <div className={cn(fileUploaderSkeletonLabelVariants({ size }))} />
        )}
        {dropContainerElement}
        {itemsElement}
        {hasDescription && !hasError && (
          <div className="h-3 w-32 bg-muted animate-pulse rounded" />
        )}
        {hasError && (
          <div className="h-3 w-24 bg-muted animate-pulse rounded" />
        )}
      </div>
    );
  },
);

FileUploaderSkeleton.displayName = "FileUploaderSkeleton";

// ============================================================================
// Exports
// ============================================================================

export { FileUploaderSkeleton };

/**
 * MultiSelect Skeleton Component
 *
 * Loading placeholder for MultiSelect component.
 * Following Carbon's skeleton pattern.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  multiSelectSkeletonVariants,
  multiSelectSkeletonLabelVariants,
} from "./MultiSelect.variants";
import type { MultiSelectSkeletonProps } from "./MultiSelect.types";

// ============================================================================
// MultiSelect Skeleton Component
// ============================================================================

const MultiSelectSkeleton = React.forwardRef<
  HTMLDivElement,
  MultiSelectSkeletonProps
>(
  (
    {
      className,
      size = "md",
      withLabel = false,
      hasDescription = false,
      hasError = false,
      ...props
    },
    ref,
  ) => {
    const skeletonElement = (
      <div className={cn("w-full", multiSelectSkeletonVariants({ size }))} />
    );

    // Render without wrapper if no label/description/error
    if (!withLabel && !hasDescription && !hasError) {
      return (
        <div ref={ref} className={className} aria-hidden="true" {...props}>
          {skeletonElement}
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
        {withLabel && (
          <div className={cn(multiSelectSkeletonLabelVariants({ size }))} />
        )}
        {skeletonElement}
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

MultiSelectSkeleton.displayName = "MultiSelectSkeleton";

// ============================================================================
// Exports
// ============================================================================

export { MultiSelectSkeleton };

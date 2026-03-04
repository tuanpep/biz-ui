/**
 * ComboBox Skeleton Component
 *
 * Loading placeholder for ComboBox component.
 * Following Carbon's skeleton pattern.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  comboBoxSkeletonVariants,
  comboBoxSkeletonLabelVariants,
} from "./ComboBox.variants";
import type { ComboBoxSkeletonProps } from "./ComboBox.types";

// ============================================================================
// ComboBox Skeleton Component
// ============================================================================

const ComboBoxSkeleton = React.forwardRef<
  HTMLDivElement,
  ComboBoxSkeletonProps
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
    const comboBoxElement = (
      <div className={cn(comboBoxSkeletonVariants({ size }))} />
    );

    // Render without wrapper if no label/description/error
    if (!withLabel && !hasDescription && !hasError) {
      return (
        <div ref={ref} className={className} aria-hidden="true" {...props}>
          {comboBoxElement}
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
          <div className={cn(comboBoxSkeletonLabelVariants({ size }))} />
        )}
        {comboBoxElement}
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

ComboBoxSkeleton.displayName = "ComboBoxSkeleton";

// ============================================================================
// Exports
// ============================================================================

export { ComboBoxSkeleton };

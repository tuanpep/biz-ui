/**
 * TimePicker Skeleton Component
 *
 * Loading placeholder for TimePicker component.
 * Following Carbon's skeleton pattern.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  timePickerSkeletonVariants,
  timePickerSkeletonLabelVariants,
} from "./TimePicker.variants";
import type { TimePickerSkeletonProps } from "./TimePicker.types";

// ============================================================================
// TimePicker Skeleton Component
// ============================================================================

const TimePickerSkeleton = React.forwardRef<
  HTMLDivElement,
  TimePickerSkeletonProps
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
    const timePickerElement = (
      <div className={cn("w-full", timePickerSkeletonVariants({ size }))} />
    );

    // Render without wrapper if no label/description/error
    if (!withLabel && !hasDescription && !hasError) {
      return (
        <div ref={ref} className={className} aria-hidden="true" {...props}>
          {timePickerElement}
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
          <div className={cn(timePickerSkeletonLabelVariants({ size }))} />
        )}
        {timePickerElement}
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

TimePickerSkeleton.displayName = "TimePickerSkeleton";

// ============================================================================
// Exports
// ============================================================================

export { TimePickerSkeleton };

/**
 * DatePicker Skeleton Component
 *
 * Loading placeholder for DatePicker component.
 * Following Carbon's skeleton pattern.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  datePickerSkeletonVariants,
  datePickerSkeletonLabelVariants,
} from "./DatePicker.variants";
import type { DatePickerSkeletonProps } from "./DatePicker.types";

// ============================================================================
// DatePicker Skeleton Component
// ============================================================================

const DatePickerSkeleton = React.forwardRef<
  HTMLDivElement,
  DatePickerSkeletonProps
>(({ className, size = "md", withLabel = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1.5", className)}
      aria-hidden="true"
      {...props}
    >
      {withLabel && (
        <div className={cn(datePickerSkeletonLabelVariants({ size }))} />
      )}
      <div className={cn(datePickerSkeletonVariants({ size }))} />
    </div>
  );
});

DatePickerSkeleton.displayName = "DatePickerSkeleton";

// ============================================================================
// Exports
// ============================================================================

export { DatePickerSkeleton };

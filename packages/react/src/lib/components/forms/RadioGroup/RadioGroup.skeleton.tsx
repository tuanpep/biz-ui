/**
 * RadioGroup Skeleton Component
 *
 * Loading placeholder for RadioGroup component.
 * Following Carbon's skeleton pattern.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  radioGroupSkeletonVariants,
  radioGroupSkeletonLabelVariants,
} from "./RadioGroup.variants";
import type { RadioGroupSkeletonProps } from "./RadioGroup.types";

// ============================================================================
// RadioGroup Skeleton Component
// ============================================================================

const RadioGroupSkeleton = React.forwardRef<
  HTMLDivElement,
  RadioGroupSkeletonProps
>(
  (
    {
      className,
      itemCount = 3,
      size = "md",
      withLabels = false,
      hasLabel = false,
      hasDescription = false,
      hasError = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-1.5", className)}
        aria-hidden="true"
        {...props}
      >
        {hasLabel && (
          <div className="h-4 w-24 bg-muted animate-pulse rounded" />
        )}
        <div className="flex flex-col gap-3">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={cn(radioGroupSkeletonVariants({ size }))} />
              {withLabels && (
                <div
                  className={cn(radioGroupSkeletonLabelVariants({ size }))}
                />
              )}
            </div>
          ))}
        </div>
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

RadioGroupSkeleton.displayName = "RadioGroupSkeleton";

// ============================================================================
// Exports
// ============================================================================

export { RadioGroupSkeleton };

/**
 * Select Skeleton Component
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { selectSkeletonVariants } from "./Select.variants";
import type { SelectSkeletonProps } from "./Select.types";

const SelectSkeleton = React.forwardRef<HTMLDivElement, SelectSkeletonProps>(
  (
    {
      className,
      size = "md",
      hasLabel = false,
      hasDescription = false,
      hasError = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn("space-y-1.5", className)} {...props}>
        {hasLabel && (
          <div className="h-4 w-24 bg-muted animate-pulse rounded" />
        )}
        <div className={cn(selectSkeletonVariants({ size }))} />
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

SelectSkeleton.displayName = "SelectSkeleton";

export { SelectSkeleton };

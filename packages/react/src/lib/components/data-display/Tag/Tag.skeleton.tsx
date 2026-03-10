/**
 * Tag Skeleton Component
 * Loading placeholder for Tag component.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { tagVariants } from "./Tag.variants";
import type { TagSkeletonProps } from "./Tag.types";

// ============================================================================
// TagSkeleton Component
// ============================================================================

const TagSkeleton = React.forwardRef<HTMLDivElement, TagSkeletonProps>(
  (
    { className, variant, size, animate = true, hasIcon = false, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          tagVariants({ variant, size }),
          "cursor-default",
          className,
        )}
        aria-hidden="true"
        {...props}
      >
        <div className="flex items-center gap-1.5">
          {hasIcon && (
            <div
              className={cn(
                "h-3 w-3 rounded-sm bg-current opacity-20",
                animate && "animate-pulse",
              )}
            />
          )}
          <div
            className={cn(
              "h-3 w-12 rounded bg-current opacity-20",
              animate && "animate-pulse",
            )}
          />
        </div>
      </div>
    );
  },
);

TagSkeleton.displayName = "TagSkeleton";

export { TagSkeleton };

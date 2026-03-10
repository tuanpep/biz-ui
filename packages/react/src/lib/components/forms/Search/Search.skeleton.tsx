/**
 * Search Skeleton Component
 *
 * Loading placeholder for Search component.
 * Following Carbon's skeleton pattern.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { searchSkeletonVariants, searchIconVariants } from "./Search.variants";
import type { SearchSkeletonProps } from "./Search.types";

// ============================================================================
// Search Skeleton Component
// ============================================================================

const SearchSkeleton = React.forwardRef<HTMLDivElement, SearchSkeletonProps>(
  ({ className, size = "md", hasIcon = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative flex items-center", className)}
        aria-hidden="true"
        {...props}
      >
        {hasIcon && (
          <div
            className={cn(
              searchIconVariants({ size }),
              "animate-pulse bg-muted rounded",
            )}
          />
        )}
        <div className={cn(searchSkeletonVariants({ size }))} />
      </div>
    );
  },
);

SearchSkeleton.displayName = "SearchSkeleton";

// ============================================================================
// Exports
// ============================================================================

export { SearchSkeleton };

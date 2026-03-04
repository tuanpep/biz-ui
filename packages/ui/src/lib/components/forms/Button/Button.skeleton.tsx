/**
 * Button Skeleton Component
 *
 * Loading placeholder for Button component.
 * Following Carbon's skeleton pattern.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { buttonSkeletonVariants } from "./Button.variants";
import type { ButtonSkeletonProps } from "./Button.types";

// ============================================================================
// Button Skeleton Component
// ============================================================================

const ButtonSkeleton = React.forwardRef<HTMLDivElement, ButtonSkeletonProps>(
  ({ className, size = "md", hasIcon = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(buttonSkeletonVariants({ size, hasIcon }), className)}
        aria-hidden="true"
        {...props}
      >
        {hasIcon && (
          <div className="w-4 h-4 bg-muted-foreground/20 rounded-sm" />
        )}
      </div>
    );
  },
);

ButtonSkeleton.displayName = "ButtonSkeleton";

// ============================================================================
// Exports
// ============================================================================

export { ButtonSkeleton };

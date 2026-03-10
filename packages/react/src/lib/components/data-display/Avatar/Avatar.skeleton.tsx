/**
 * Avatar Skeleton Component
 * Loading placeholder for Avatar component.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { avatarVariants } from "./Avatar.variants";
import type { AvatarSize } from "./Avatar.types";

// ============================================================================
// AvatarSkeleton Component
// ============================================================================

export interface AvatarSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the skeleton avatar */
  size?: AvatarSize;
  /** Animate the skeleton */
  animate?: boolean;
}

const AvatarSkeleton = React.forwardRef<HTMLDivElement, AvatarSkeletonProps>(
  ({ className, size, animate = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          avatarVariants({ size }),
          "rounded-full bg-muted",
          animate && "animate-pulse",
          className,
        )}
        aria-hidden="true"
        {...props}
      />
    );
  },
);

AvatarSkeleton.displayName = "AvatarSkeleton";

export { AvatarSkeleton };

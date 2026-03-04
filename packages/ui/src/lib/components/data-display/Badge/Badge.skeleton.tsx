/**
 * Badge Skeleton Component
 * Loading placeholder for Badge component.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { badgeVariants } from './Badge.variants';
import type { BadgeSkeletonProps } from './Badge.types';

// ============================================================================
// BadgeSkeleton Component
// ============================================================================

const BadgeSkeleton = React.forwardRef<HTMLDivElement, BadgeSkeletonProps>(
  ({ className, variant, size, animate = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, size }),
          'bg-muted',
          animate && 'animate-pulse',
          className
        )}
        aria-hidden="true"
        {...props}
      >
        <div className="h-3 w-12 rounded bg-muted-foreground/20" />
      </div>
    );
  }
);

BadgeSkeleton.displayName = 'BadgeSkeleton';

export { BadgeSkeleton };

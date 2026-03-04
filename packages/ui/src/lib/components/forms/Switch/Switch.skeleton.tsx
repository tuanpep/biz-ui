/**
 * Switch Skeleton Component
 *
 * Loading placeholder for Switch component.
 * Following Carbon's skeleton pattern.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { switchSkeletonVariants } from './Switch.variants';
import type { SwitchSkeletonProps } from './Switch.types';

// ============================================================================
// Switch Skeleton Component
// ============================================================================

const SwitchSkeleton = React.forwardRef<HTMLDivElement, SwitchSkeletonProps>(
  ({ className, size = 'md', withLabel = false, ...props }, ref) => {
    return (
      <div className={cn('flex items-center gap-2', className)} {...props}>
        <div
          ref={ref}
          className={cn(switchSkeletonVariants({ size }))}
          aria-hidden="true"
        />
        {withLabel && (
          <div className="h-4 w-16 bg-muted animate-pulse rounded" />
        )}
      </div>
    );
  }
);

SwitchSkeleton.displayName = 'SwitchSkeleton';

// ============================================================================
// Exports
// ============================================================================

export { SwitchSkeleton };

/**
 * Card Skeleton Component
 * Loading placeholder for Card component.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { cardVariants } from './Card.variants';
import type { CardSkeletonProps } from './Card.types';

// ============================================================================
// CardSkeleton Component
// ============================================================================

const CardSkeleton = React.forwardRef<HTMLDivElement, CardSkeletonProps>(
  (
    {
      className,
      variant,
      size,
      animate = true,
      hasHeader = true,
      hasFooter = false,
      lines = 3,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size }), className)}
        aria-hidden="true"
        {...props}
      >
        {hasHeader && (
          <div className="p-6 pb-4 space-y-3">
            {/* Title skeleton */}
            <div className={cn('h-5 rounded bg-muted', animate && 'animate-pulse')} />
            {/* Description skeleton */}
            <div className={cn('h-4 w-2/3 rounded bg-muted', animate && 'animate-pulse')} />
          </div>
        )}

        <div className="p-6 pt-2 space-y-2">
          {/* Content lines */}
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'h-3 rounded bg-muted',
                animate && 'animate-pulse',
                i === lines - 1 ? 'w-3/4' : 'w-full'
              )}
            />
          ))}
        </div>

        {hasFooter && (
          <div className="p-6 pt-4 flex gap-2">
            {/* Button skeletons */}
            <div className={cn('h-9 w-20 rounded bg-muted', animate && 'animate-pulse')} />
            <div className={cn('h-9 w-20 rounded bg-muted', animate && 'animate-pulse')} />
          </div>
        )}
      </div>
    );
  }
);

CardSkeleton.displayName = 'CardSkeleton';

export { CardSkeleton };

/**
 * NumberInput Skeleton Component
 *
 * Loading placeholder for NumberInput component.
 * Following Carbon's skeleton pattern.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { numberInputSkeletonVariants, numberInputSkeletonLabelVariants } from './NumberInput.variants';
import type { NumberInputSkeletonProps } from './NumberInput.types';

// ============================================================================
// NumberInput Skeleton Component
// ============================================================================

const NumberInputSkeleton = React.forwardRef<HTMLDivElement, NumberInputSkeletonProps>(
  (
    {
      className,
      size = 'md',
      hasLabel = false,
      hasDescription = false,
      hasError = false,
      ...props
    },
    ref
  ) => {
    const skeletonElement = (
      <div className={cn('relative flex w-full', numberInputSkeletonVariants({ size }))}>
        {/* Steppers */}
        <div className="flex flex-col gap-0.5">
          <div className={cn('h-3 w-full', numberInputSkeletonVariants({ size }))} />
          <div className={cn('h-3 w-full', numberInputSkeletonVariants({ size }))} />
        </div>
      </div>
    );

    // Render without wrapper if no label/description/error
    if (!hasLabel && !hasDescription && !hasError) {
      return (
        <div
          ref={ref}
          className={className}
          aria-hidden="true"
          {...props}
        >
          {skeletonElement}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1.5', className)}
        aria-hidden="true"
        {...props}
      >
        {hasLabel && (
          <div className={cn(numberInputSkeletonLabelVariants({ size }))} />
        )}
        {skeletonElement}
        {hasDescription && !hasError && (
          <div className="h-3 w-32 bg-muted animate-pulse rounded" />
        )}
        {hasError && (
          <div className="h-3 w-24 bg-muted animate-pulse rounded" />
        )}
      </div>
    );
  }
);

NumberInputSkeleton.displayName = 'NumberInputSkeleton';

// ============================================================================
// Exports
// ============================================================================

export { NumberInputSkeleton };

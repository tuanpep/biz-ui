/**
 * Input Skeleton Component
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { inputSkeletonVariants } from './Input.variants';
import type { InputSkeletonProps } from './Input.types';

const InputSkeleton = React.forwardRef<HTMLDivElement, InputSkeletonProps>(
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
    return (
      <div ref={ref} className={cn('grid w-full gap-1.5', className)} {...props}>
        {hasLabel && (
          <div className="h-4 w-20 bg-muted animate-pulse rounded" />
        )}
        <div className={cn(inputSkeletonVariants({ size }))} />
        {hasDescription && (
          <div className="h-3 w-40 bg-muted animate-pulse rounded" />
        )}
        {hasError && (
          <div className="h-3 w-24 bg-destructive/20 animate-pulse rounded" />
        )}
      </div>
    );
  }
);

InputSkeleton.displayName = 'InputSkeleton';

export { InputSkeleton };

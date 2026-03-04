/**
 * Checkbox Skeleton Component
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { checkboxSkeletonVariants } from './Checkbox.variants';
import type { CheckboxSkeletonProps } from './Checkbox.types';

const CheckboxSkeleton = React.forwardRef<HTMLDivElement, CheckboxSkeletonProps>(
  ({ className, size = 'md', hasLabel = false, hasDescription = false, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-start space-x-2', className)} {...props}>
        <div className={cn(checkboxSkeletonVariants({ size }), 'pt-0.5')} />
        {(hasLabel || hasDescription) && (
          <div className="grid gap-1.5">
            {hasLabel && (
              <div className="h-4 w-20 bg-muted animate-pulse rounded" />
            )}
            {hasDescription && (
              <div className="h-3 w-32 bg-muted animate-pulse rounded" />
            )}
          </div>
        )}
      </div>
    );
  }
);

CheckboxSkeleton.displayName = 'CheckboxSkeleton';

export { CheckboxSkeleton };

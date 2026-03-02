/**
 * RadioGroup Skeleton Component
 *
 * Loading placeholder for RadioGroup component.
 * Following Carbon's skeleton pattern.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { radioGroupSkeletonVariants, radioGroupSkeletonLabelVariants } from './RadioGroup.variants';
import type { RadioGroupSkeletonProps } from './RadioGroup.types';

// ============================================================================
// RadioGroup Skeleton Component
// ============================================================================

const RadioGroupSkeleton = React.forwardRef<HTMLDivElement, RadioGroupSkeletonProps>(
  ({ className, itemCount = 3, size = 'md', withLabels = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-3', className)}
        aria-hidden="true"
        {...props}
      >
        {Array.from({ length: itemCount }).map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={cn(radioGroupSkeletonVariants({ size }))} />
            {withLabels && (
              <div className={cn(radioGroupSkeletonLabelVariants({ size }))} />
            )}
          </div>
        ))}
      </div>
    );
  }
);

RadioGroupSkeleton.displayName = 'RadioGroupSkeleton';

// ============================================================================
// Exports
// ============================================================================

export { RadioGroupSkeleton };

/**
 * Slider Skeleton Component
 *
 * Loading placeholder for Slider component.
 * Following Carbon's skeleton pattern.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { sliderSkeletonVariants, sliderSkeletonThumbVariants } from './Slider.variants';
import type { SliderSkeletonProps } from './Slider.types';

// ============================================================================
// Slider Skeleton Component
// ============================================================================

const SliderSkeleton = React.forwardRef<HTMLDivElement, SliderSkeletonProps>(
  ({ className, size = 'md', isRange = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('relative flex w-full items-center', className)}
        aria-hidden="true"
        {...props}
      >
        <div className={cn('relative w-full grow', sliderSkeletonVariants({ size }))}>
          {/* Range indicator */}
          <div
            className={cn('absolute h-full bg-muted-foreground/20', sliderSkeletonVariants({ size }))}
            style={{ width: '60%' }}
          />
        </div>
        {/* Thumb(s) */}
        <div
          className={cn('absolute', sliderSkeletonThumbVariants({ size }))}
          style={{ left: '60%', transform: 'translateX(-50%)' }}
        />
        {isRange && (
          <div
            className={cn('absolute', sliderSkeletonThumbVariants({ size }))}
            style={{ left: '30%', transform: 'translateX(-50%)' }}
          />
        )}
      </div>
    );
  }
);

SliderSkeleton.displayName = 'SliderSkeleton';

// ============================================================================
// Exports
// ============================================================================

export { SliderSkeleton };

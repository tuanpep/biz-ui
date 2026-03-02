/**
 * ComboBox Skeleton Component
 *
 * Loading placeholder for ComboBox component.
 * Following Carbon's skeleton pattern.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { comboBoxSkeletonVariants, comboBoxSkeletonLabelVariants } from './ComboBox.variants';
import type { ComboBoxSkeletonProps } from './ComboBox.types';

// ============================================================================
// ComboBox Skeleton Component
// ============================================================================

const ComboBoxSkeleton = React.forwardRef<HTMLDivElement, ComboBoxSkeletonProps>(
  ({ className, size = 'md', withLabel = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1.5', className)}
        aria-hidden="true"
        {...props}
      >
        {withLabel && (
          <div className={cn(comboBoxSkeletonLabelVariants({ size }))} />
        )}
        <div className={cn(comboBoxSkeletonVariants({ size }))} />
      </div>
    );
  }
);

ComboBoxSkeleton.displayName = 'ComboBoxSkeleton';

// ============================================================================
// Exports
// ============================================================================

export { ComboBoxSkeleton };

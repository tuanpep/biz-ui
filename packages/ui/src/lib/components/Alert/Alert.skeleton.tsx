/**
 * Alert Skeleton Component
 * Loading placeholder for Alert component.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import type { AlertSkeletonProps } from './Alert.types';

// ============================================================================
// AlertSkeleton Component
// ============================================================================

const AlertSkeleton = React.forwardRef<HTMLDivElement, AlertSkeletonProps>(
  ({ className, variant = 'default', animate = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading alert"
        aria-live="polite"
        className={cn(
          'relative w-full rounded-lg border p-4',
          animate && 'animate-pulse',
          {
            'border-border bg-background': variant === 'default' || variant === 'info',
            'border-success/30 bg-success/5': variant === 'success',
            'border-warning/30 bg-warning/5': variant === 'warning',
            'border-destructive/30 bg-destructive/5': variant === 'destructive',
          },
          className
        )}
        {...props}
      >
        <div className="flex gap-3">
          {/* Icon skeleton */}
          <div className="h-5 w-5 rounded-full bg-muted" />

          <div className="flex-1 space-y-2">
            {/* Title skeleton */}
            <div className="h-4 w-24 rounded bg-muted" />
            {/* Description skeleton */}
            <div className="h-3 w-full rounded bg-muted" />
            <div className="h-3 w-3/4 rounded bg-muted" />
          </div>
        </div>
      </div>
    );
  }
);

AlertSkeleton.displayName = 'AlertSkeleton';

export { AlertSkeleton };

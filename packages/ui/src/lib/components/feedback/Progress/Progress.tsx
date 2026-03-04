/**
 * Progress Component
 *
 * Biz UI aligned progress indicator with:
 * - Consistent sizing (sm, md, lg)
 * - Semantic color variants (default, success, warning, error)
 * - Accessible progress indication (WCAG 2.1 AA)
 * - Smooth transition animations
 *
 * @example
 * ```tsx
 * <Progress value={75} variant="default" size="md" />
 * <Progress value={100} variant="success" />
 * ```
 */

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../utils/cn';
import { progressVariants, progressIndicatorVariants } from './Progress.variants';
import type { ProgressProps, ProgressVariant, ProgressSize } from './Progress.types';

// ============================================================================
// Progress Component
// ============================================================================

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, size, variant, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ size, variant }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(progressIndicatorVariants({ variant }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// ============================================================================
// Exports
// ============================================================================

export { Progress };
export { progressVariants, progressIndicatorVariants } from './Progress.variants';
export type { ProgressProps, ProgressVariant, ProgressSize } from './Progress.types';

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
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

// ============================================================================
// VARIANTS
// ============================================================================

const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full bg-muted',
  {
    variants: {
      size: {
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
      },
      variant: {
        default: '',
        success: 'bg-success-muted',
        warning: 'bg-warning-muted',
        destructive: 'bg-destructive-muted',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

const progressIndicatorVariants = cva(
  'h-full w-full flex-1 rounded-full transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        success: 'bg-success',
        warning: 'bg-warning',
        destructive: 'bg-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// ============================================================================
// TYPES
// ============================================================================

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {}

// ============================================================================
// PROGRESS COMPONENT
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
// EXPORTS
// ============================================================================

export { Progress, progressVariants, progressIndicatorVariants };

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/**
 * Skeleton Component
 *
 * Biz UI aligned loading placeholder with:
 * - Subtle shimmer animation for loading states
 * - Flexible sizing with sensible defaults
 * - Support for common shapes (text, circle, rectangle)
 * - Composable for complex layouts
 * - WCAG 2.1 AA accessible (aria-hidden)
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" width="100%" height={16} />
 * <Skeleton variant="circular" size={40} />
 * <SkeletonText lines={3} />
 * ```
 */

// ============================================================================
// VARIANTS
// ============================================================================

const skeletonVariants = cva('bg-muted', {
  variants: {
    variant: {
      text: '',
      circular: 'rounded-full',
      rectangular: '',
      rounded: '',
    },
    animate: {
      true: 'animate-pulse',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'text',
    animate: true,
  },
});

// ============================================================================
// TYPES
// ============================================================================

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof skeletonVariants> {
  /** Width of the skeleton */
  width?: string | number;
  /** Height of the skeleton */
  height?: string | number;
}

// ============================================================================
// SKELETON COMPONENT
// ============================================================================

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      animate = true,
      width,
      height,
      variant = 'text',
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(skeletonVariants({ variant, animate }), className)}
        style={{
          width: width,
          height: height,
          ...style,
        }}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

/**
 * SkeletonText Component
 *
 * Renders multiple skeleton lines to simulate text content.
 */
export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of lines to render */
  lines?: number;
  /** Whether to animate the skeleton */
  animate?: boolean;
  /** Line height */
  lineHeight?: number;
  /** Gap between lines */
  gap?: number;
  /** Last line width percentage */
  lastLineWidth?: number | string;
}

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  (
    {
      className,
      lines = 3,
      animate = true,
      lineHeight = 16,
      gap = 8,
      lastLineWidth = '60%',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        style={{ gap }}
        {...props}
      >
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            animate={animate}
            height={lineHeight}
            width={index === lines - 1 ? lastLineWidth : '100%'}
            variant="text"
          />
        ))}
      </div>
    );
  }
);
SkeletonText.displayName = 'SkeletonText';

/**
 * SkeletonCircle Component
 *
 * Renders a circular skeleton for avatars, icons, etc.
 */
export interface SkeletonCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size (diameter) of the circle */
  size?: number | string;
  /** Whether to animate the skeleton */
  animate?: boolean;
}

const SkeletonCircle = React.forwardRef<HTMLDivElement, SkeletonCircleProps>(
  ({ className, size = 40, animate = true, ...props }, ref) => {
    return (
      <Skeleton
        ref={ref}
        animate={animate}
        variant="circular"
        width={size}
        height={size}
        className={className}
        {...props}
      />
    );
  }
);
SkeletonCircle.displayName = 'SkeletonCircle';

/**
 * SkeletonGroup Component
 *
 * Groups multiple skeletons with consistent spacing.
 */
export interface SkeletonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction of the group */
  direction?: 'row' | 'column';
  /** Gap between skeletons */
  gap?: number | string;
}

const SkeletonGroup = React.forwardRef<HTMLDivElement, SkeletonGroupProps>(
  ({ className, direction = 'column', gap = 8, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex', direction === 'column' ? 'flex-col' : 'flex-row', className)}
        style={{ gap }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SkeletonGroup.displayName = 'SkeletonGroup';

export { Skeleton, SkeletonText, SkeletonCircle, SkeletonGroup };

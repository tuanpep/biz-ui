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

import * as React from "react";
import { cn } from "../../../utils/cn";
import { skeletonVariants } from "./Skeleton.variants";
import type {
  SkeletonProps,
  SkeletonTextProps,
  SkeletonCircleProps,
  SkeletonGroupProps,
} from "./Skeleton.types";

// ============================================================================
// Skeleton Component
// ============================================================================

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      animate = true,
      width,
      height,
      variant = "text",
      style,
      ...props
    },
    ref,
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
  },
);
Skeleton.displayName = "Skeleton";

// ============================================================================
// SkeletonText Component
// ============================================================================

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  (
    {
      className,
      lines = 3,
      animate = true,
      lineHeight = 16,
      gap = 8,
      lastLineWidth = "60%",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        style={{ gap }}
        {...props}
      >
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            animate={animate}
            height={lineHeight}
            width={index === lines - 1 ? lastLineWidth : "100%"}
            variant="text"
          />
        ))}
      </div>
    );
  },
);
SkeletonText.displayName = "SkeletonText";

// ============================================================================
// SkeletonCircle Component
// ============================================================================

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
  },
);
SkeletonCircle.displayName = "SkeletonCircle";

// ============================================================================
// SkeletonGroup Component
// ============================================================================

const SkeletonGroup = React.forwardRef<HTMLDivElement, SkeletonGroupProps>(
  ({ className, direction = "column", gap = 8, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === "column" ? "flex-col" : "flex-row",
          className,
        )}
        style={{ gap }}
        {...props}
      >
        {children}
      </div>
    );
  },
);
SkeletonGroup.displayName = "SkeletonGroup";

// ============================================================================
// Exports
// ============================================================================

export { Skeleton, SkeletonText, SkeletonCircle, SkeletonGroup };
export { skeletonVariants } from "./Skeleton.variants";
export type {
  SkeletonProps,
  SkeletonTextProps,
  SkeletonCircleProps,
  SkeletonGroupProps,
  SkeletonVariant,
} from "./Skeleton.types";

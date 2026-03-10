/**
 * Stack Component
 *
 * A layout utility for vertical spacing between children.
 * Inspired by Biz UI's spacing principles.
 *
 * @example
 * ```tsx
 * <Stack gap="md">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Stack>
 * ```
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../utils/cn";
import { stackVariants } from "./Stack.variants";
import type { StackProps, HStackProps, VStackProps } from "./Stack.types";

// ============================================================================
// Stack Component
// ============================================================================

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      gap,
      align,
      justify,
      direction,
      wrap,
      reverse,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          stackVariants({ gap, align, justify, direction, wrap }),
          reverse &&
            (direction === "horizontal"
              ? "flex-row-reverse"
              : "flex-col-reverse"),
          className,
        )}
        {...props}
      />
    );
  },
);
Stack.displayName = "Stack";

// ============================================================================
// HStack Component (Horizontal Stack)
// ============================================================================

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ className, ...props }, ref) => {
    return (
      <Stack
        ref={ref}
        direction="horizontal"
        className={className}
        {...props}
      />
    );
  },
);
HStack.displayName = "HStack";

// ============================================================================
// VStack Component (Vertical Stack)
// ============================================================================

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({ className, ...props }, ref) => {
    return (
      <Stack ref={ref} direction="vertical" className={className} {...props} />
    );
  },
);
VStack.displayName = "VStack";

// ============================================================================
// Exports
// ============================================================================

export { Stack, HStack, VStack };
export { stackVariants } from "./Stack.variants";
export type {
  StackProps,
  HStackProps,
  VStackProps,
  StackGap,
  StackAlign,
  StackJustify,
  StackDirection,
} from "./Stack.types";

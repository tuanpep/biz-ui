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

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

// ============================================================================
// STACK VARIANTS
// ============================================================================

const stackVariants = cva('flex', {
  variants: {
    gap: {
      none: 'gap-0',
      xs: 'gap-1',      // 4px
      sm: 'gap-2',      // 8px
      md: 'gap-4',      // 16px
      lg: 'gap-6',      // 24px
      xl: 'gap-8',      // 32px
      '2xl': 'gap-10',  // 40px
      '3xl': 'gap-12',  // 48px
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    gap: 'md',
    direction: 'vertical',
    align: 'stretch',
    justify: 'start',
    wrap: false,
  },
});

// ============================================================================
// TYPES
// ============================================================================

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof stackVariants> {
  /** Map to child element */
  asChild?: boolean;
  /** Reverse the order of items */
  reverse?: boolean;
}

// ============================================================================
// STACK COMPONENT
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
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(
          stackVariants({ gap, align, justify, direction, wrap }),
          reverse && (direction === 'horizontal' ? 'flex-row-reverse' : 'flex-col-reverse'),
          className
        )}
        {...props}
      />
    );
  }
);
Stack.displayName = 'Stack';

// ============================================================================
// HSTACK COMPONENT (Horizontal Stack)
// ============================================================================

export type HStackProps = Omit<StackProps, 'direction'>

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
  }
);
HStack.displayName = 'HStack';

// ============================================================================
// VSTACK COMPONENT (Vertical Stack)
// ============================================================================

export type VStackProps = Omit<StackProps, 'direction'>

const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({ className, ...props }, ref) => {
    return (
      <Stack
        ref={ref}
        direction="vertical"
        className={className}
        {...props}
      />
    );
  }
);
VStack.displayName = 'VStack';

// ============================================================================
// EXPORTS
// ============================================================================

export { Stack, HStack, VStack, stackVariants };

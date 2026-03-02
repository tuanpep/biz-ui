/**
 * Flex Component
 *
 * A flexible layout utility for building responsive layouts.
 * Inspired by Biz UI's spacing and layout principles.
 *
 * @example
 * ```tsx
 * <Flex justify="between" align="center" gap="md">
 *   <div>Left</div>
 *   <div>Right</div>
 * </Flex>
 * ```
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';
import { flexVariants, flexItemVariants } from './Flex.variants';
import type { FlexProps, FlexItemProps, SpacerProps } from './Flex.types';

// ============================================================================
// Flex Component
// ============================================================================

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction,
      wrap,
      justify,
      align,
      gap,
      inline,
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
          flexVariants({ direction, wrap, justify, align, gap, inline }),
          className
        )}
        {...props}
      />
    );
  }
);
Flex.displayName = 'Flex';

// ============================================================================
// FlexItem Component
// ============================================================================

const FlexItem = React.forwardRef<HTMLDivElement, FlexItemProps>(
  (
    {
      className,
      flex,
      grow,
      shrink,
      alignSelf,
      order,
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
          flexItemVariants({ flex, grow, shrink, alignSelf, order }),
          className
        )}
        {...props}
      />
    );
  }
);
FlexItem.displayName = 'FlexItem';

// ============================================================================
// Spacer Component
// ============================================================================

const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn('flex-1', className)}
        {...props}
      />
    );
  }
);
Spacer.displayName = 'Spacer';

// ============================================================================
// Exports
// ============================================================================

export { Flex, FlexItem, Spacer };
export { flexVariants, flexItemVariants } from './Flex.variants';
export type {
  FlexProps,
  FlexItemProps,
  SpacerProps,
  FlexDirection,
  FlexWrap,
  FlexJustify,
  FlexAlign,
  FlexGap,
  FlexItemFlex,
  FlexItemAlign,
  FlexItemOrder,
} from './Flex.types';

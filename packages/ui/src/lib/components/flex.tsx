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
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

// ============================================================================
// FLEX VARIANTS
// ============================================================================

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
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
    inline: {
      true: 'inline-flex',
      false: 'flex',
    },
  },
  defaultVariants: {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    align: 'stretch',
    gap: 'none',
    inline: false,
  },
});

// ============================================================================
// TYPES
// ============================================================================

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof flexVariants> {
  /** Map to a child element */
  asChild?: boolean;
}

// ============================================================================
// FLEX COMPONENT
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
// FLEX ITEM COMPONENT
// ============================================================================

const flexItemVariants = cva('', {
  variants: {
    flex: {
      auto: 'flex-auto',
      initial: 'flex-initial',
      none: 'flex-none',
      '1': 'flex-1',
    },
    grow: {
      true: 'grow',
      false: 'grow-0',
    },
    shrink: {
      true: 'shrink',
      false: 'shrink-0',
    },
    alignSelf: {
      auto: 'self-auto',
      start: 'self-start',
      end: 'self-end',
      center: 'self-center',
      baseline: 'self-baseline',
      stretch: 'self-stretch',
    },
    order: {
      first: 'order-first',
      last: 'order-last',
      none: 'order-none',
      '1': 'order-1',
      '2': 'order-2',
      '3': 'order-3',
      '4': 'order-4',
      '5': 'order-5',
    },
  },
  defaultVariants: {
    flex: undefined,
    grow: false,
    shrink: true,
    alignSelf: 'auto',
    order: 'none',
  },
});

export interface FlexItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof flexItemVariants> {
  /** Map to a child element */
  asChild?: boolean;
}

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
// SPACER COMPONENT
// ============================================================================

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Map to a child element */
  asChild?: boolean;
}

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
// EXPORTS
// ============================================================================

export { Flex, FlexItem, Spacer, flexVariants, flexItemVariants };

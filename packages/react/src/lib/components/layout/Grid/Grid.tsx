/**
 * Grid System Components
 *
 * A 12-column responsive grid system inspired by Biz UI.
 * Follows Biz UI's principles:
 * - Modular and flexible layout
 * - Consistent spacing and alignment
 * - Responsive breakpoints aligned with Biz UI
 *
 * @example
 * ```tsx
 * <Grid>
 *   <Row>
 *     <Column sm={4} md={6} lg={8}>
 *       Content spans 4 columns on small, 6 on medium, 8 on large
 *     </Column>
 *     <Column sm={4} md={6} lg={4}>
 *       Sidebar spans 4 columns on small, 6 on medium, 4 on large
 *     </Column>
 *   </Row>
 * </Grid>
 * ```
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../utils/cn";
import { gridVariants, rowVariants } from "./Grid.variants";
import type {
  GridProps,
  RowProps,
  ColumnProps,
  ColumnBreakpoints,
} from "./Grid.types";

// ============================================================================
// Grid Component
// ============================================================================

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, condensed, narrow, fullWidth, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          gridVariants({ condensed, narrow, fullWidth }),
          className,
        )}
        {...props}
      />
    );
  },
);
Grid.displayName = "Grid";

// ============================================================================
// Row Component
// ============================================================================

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ className, condensed, narrow, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(rowVariants({ condensed, narrow }), className)}
        {...props}
      />
    );
  },
);
Row.displayName = "Row";

// ============================================================================
// Column Component
// ============================================================================

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  (
    { className, span, sm, md, lg, xlg, max, offset, asChild, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";

    // Merge shorthand props with span object
    const breakpoints: ColumnBreakpoints = {
      sm: sm ?? span?.sm,
      md: md ?? span?.md,
      lg: lg ?? span?.lg,
      xlg: xlg ?? span?.xlg,
      max: max ?? span?.max,
    };

    // Generate column classes using Tailwind's col-span utilities
    const columnClasses = cn(
      // Responsive column widths using standard Tailwind grid classes
      breakpoints.sm && `sm:col-span-${breakpoints.sm}`,
      breakpoints.md && `md:col-span-${breakpoints.md}`,
      breakpoints.lg && `lg:col-span-${breakpoints.lg}`,
      breakpoints.xlg && `xlg:col-span-${breakpoints.xlg}`,
      breakpoints.max && `max:col-span-${breakpoints.max}`,
      // Offset classes using standard Tailwind grid classes
      offset?.sm && `sm:col-start-${offset.sm + 1}`,
      offset?.md && `md:col-start-${offset.md + 1}`,
      offset?.lg && `lg:col-start-${offset.lg + 1}`,
      offset?.xlg && `xlg:col-start-${offset.xlg + 1}`,
      offset?.max && `max:col-start-${offset.max + 1}`,
      className,
    );

    return <Comp ref={ref} className={columnClasses} {...props} />;
  },
);
Column.displayName = "Column";

// ============================================================================
// Exports
// ============================================================================

export { Grid, Row, Column };
export { gridVariants, rowVariants } from "./Grid.variants";
export type {
  GridProps,
  RowProps,
  ColumnProps,
  ColumnBreakpoints,
  ColumnOffset,
  BreakpointValue,
} from "./Grid.types";

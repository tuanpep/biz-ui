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

    // Generate column classes
    const columnClasses = cn(
      "ocean-col",
      // Responsive column widths
      breakpoints.sm && `ocean-col-sm-${breakpoints.sm}`,
      breakpoints.md && `ocean-col-md-${breakpoints.md}`,
      breakpoints.lg && `ocean-col-lg-${breakpoints.lg}`,
      breakpoints.xlg && `ocean-col-xlg-${breakpoints.xlg}`,
      breakpoints.max && `ocean-col-max-${breakpoints.max}`,
      // Offset classes
      offset?.sm && `ocean-col-offset-sm-${offset.sm}`,
      offset?.md && `ocean-col-offset-md-${offset.md}`,
      offset?.lg && `ocean-col-offset-lg-${offset.lg}`,
      offset?.xlg && `ocean-col-offset-xlg-${offset.xlg}`,
      offset?.max && `ocean-col-offset-max-${offset.max}`,
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

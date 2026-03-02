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

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

// ============================================================================
// BREAKPOINTS (Biz UI-aligned)
// ============================================================================

/**
 * Biz UI breakpoints:
 * - sm: 320px (small mobile)
 * - md: 672px (tablet)
 * - lg: 1056px (desktop)
 * - xlg: 1312px (large desktop)
 * - max: 1584px (max container width)
 */

// ============================================================================
// GRID VARIANTS
// ============================================================================

const gridVariants = cva('ocean-grid', {
  variants: {
    condensed: {
      true: 'ocean-grid--condensed',
      false: '',
    },
    narrow: {
      true: 'ocean-grid--narrow',
      false: '',
    },
    fullWidth: {
      true: 'ocean-grid--full-width',
      false: '',
    },
  },
  defaultVariants: {
    condensed: false,
    narrow: false,
    fullWidth: false,
  },
});

const rowVariants = cva('ocean-row', {
  variants: {
    condensed: {
      true: 'ocean-row--condensed',
      false: '',
    },
    narrow: {
      true: 'ocean-row--narrow',
      false: '',
    },
  },
  defaultVariants: {
    condensed: false,
    narrow: false,
  },
});

// ============================================================================
// TYPES
// ============================================================================

type BreakpointValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColumnBreakpoints {
  /** Columns at small breakpoint (320px+) */
  sm?: BreakpointValue;
  /** Columns at medium breakpoint (672px+) */
  md?: BreakpointValue;
  /** Columns at large breakpoint (1056px+) */
  lg?: BreakpointValue;
  /** Columns at extra-large breakpoint (1312px+) */
  xlg?: BreakpointValue;
  /** Columns at max breakpoint (1584px+) */
  max?: BreakpointValue;
}

interface ColumnOffset {
  /** Offset at small breakpoint */
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /** Offset at medium breakpoint */
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /** Offset at large breakpoint */
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /** Offset at extra-large breakpoint */
  xlg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /** Offset at max breakpoint */
  max?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}

// ============================================================================
// GRID COMPONENT
// ============================================================================

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof gridVariants> {
  /** Map to a child element */
  asChild?: boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, condensed, narrow, fullWidth, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(gridVariants({ condensed, narrow, fullWidth }), className)}
        {...props}
      />
    );
  }
);
Grid.displayName = 'Grid';

// ============================================================================
// ROW COMPONENT
// ============================================================================

export interface RowProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof rowVariants> {
  /** Map to a child element */
  asChild?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ className, condensed, narrow, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(rowVariants({ condensed, narrow }), className)}
        {...props}
      />
    );
  }
);
Row.displayName = 'Row';

// ============================================================================
// COLUMN COMPONENT
// ============================================================================

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns at each breakpoint (1-12) */
  span?: ColumnBreakpoints;
  /** Shorthand for span.sm */
  sm?: BreakpointValue;
  /** Shorthand for span.md */
  md?: BreakpointValue;
  /** Shorthand for span.lg */
  lg?: BreakpointValue;
  /** Shorthand for span.xlg */
  xlg?: BreakpointValue;
  /** Shorthand for span.max */
  max?: BreakpointValue;
  /** Number of columns to offset at each breakpoint */
  offset?: ColumnOffset;
  /** Map to a child element */
  asChild?: boolean;
}

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  (
    {
      className,
      span,
      sm,
      md,
      lg,
      xlg,
      max,
      offset,
      asChild,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';

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
      'ocean-col',
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
      className
    );

    return <Comp ref={ref} className={columnClasses} {...props} />;
  }
);
Column.displayName = 'Column';

// ============================================================================
// CSS STYLES (to be added to theme.css)
// ============================================================================

/**
 * CSS to add to theme.css:
 *
 * .ocean-grid {
 *   display: flex;
 *   flex-wrap: wrap;
 *   margin-inline: auto;
 *   max-width: 1584px;
 *   padding-inline: 16px;
 * }
 *
 * .ocean-grid--condensed {
 *   padding-inline: 0;
 * }
 *
 * .ocean-grid--narrow {
 *   max-width: 1312px;
 * }
 *
 * .ocean-grid--full-width {
 *   max-width: 100%;
 *   padding-inline: 0;
 * }
 *
 * .ocean-row {
 *   display: flex;
 *   flex-wrap: wrap;
 *   margin-inline: -16px;
 * }
 *
 * .ocean-row--condensed {
 *   margin-inline: -4px;
 * }
 *
 * .ocean-row--narrow {
 *   margin-inline: -8px;
 * }
 *
 * .ocean-col {
 *   box-sizing: border-box;
 *   padding-inline: 16px;
 *   flex: 1 0 0%;
 *   max-width: 100%;
 * }
 *
 * // 12-column system: each column = 8.333% (100/12)
 * // Generate classes for each breakpoint and column size
 */

// ============================================================================
// EXPORTS
// ============================================================================

export { Grid, Row, Column, gridVariants, rowVariants };
export type { ColumnBreakpoints, ColumnOffset };

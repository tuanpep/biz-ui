/**
 * Grid component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Breakpoint value types (1-12 columns).
 */
export type BreakpointValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Column breakpoint values.
 */
export interface ColumnBreakpoints {
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

/**
 * Column offset values.
 */
export interface ColumnOffset {
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

/**
 * Grid component props.
 */
export interface GridProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof import("./Grid.variants").gridVariants> {
  /** Map to a child element */
  asChild?: boolean;
}

/**
 * Row component props.
 */
export interface RowProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof import("./Grid.variants").rowVariants> {
  /** Map to a child element */
  asChild?: boolean;
}

/**
 * Column component props.
 */
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

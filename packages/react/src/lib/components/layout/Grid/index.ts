/**
 * Grid Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 */

// Main components
export { Grid, Row, Column, gridVariants, rowVariants } from "./Grid";

// Types
export type {
  GridProps,
  RowProps,
  ColumnProps,
  ColumnBreakpoints,
  ColumnOffset,
  BreakpointValue,
} from "./Grid.types";

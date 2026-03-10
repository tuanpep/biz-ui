/**
 * SimpleGrid Component Types
 *
 * Types for simple grid layout.
 */

import type { HTMLAttributes } from "react";

export interface SimpleGridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns. If provided, creates a fixed column grid.
   */
  columns?: number;
  /**
   * Minimum width of each child element. When set, creates an auto-fit
   * responsive grid that wraps children based on available space.
   * @example "200px", "15rem"
   */
  minChildWidth?: string;
  /**
   * Gap between grid items.
   * @default "1rem"
   */
  gap?: string;
}

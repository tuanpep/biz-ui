/**
 * SimpleGrid Component
 *
 * An equal-width column grid that auto-wraps based on minChildWidth.
 * Simpler alternative to Grid for equal-column layouts.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface SimpleGridProps extends React.HTMLAttributes<HTMLDivElement> {
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

const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  (
    { className, columns, minChildWidth, gap = "1rem", style, ...props },
    ref,
  ) => {
    const gridStyle: React.CSSProperties = {
      display: "grid",
      gap,
      ...(minChildWidth
        ? {
            gridTemplateColumns: `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`,
          }
        : columns
          ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
          : { gridTemplateColumns: "repeat(1, 1fr)" }),
      ...style,
    };

    return (
      <div ref={ref} className={cn(className)} style={gridStyle} {...props} />
    );
  },
);
SimpleGrid.displayName = "SimpleGrid";

export { SimpleGrid };

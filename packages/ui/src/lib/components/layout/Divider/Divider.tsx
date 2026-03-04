/**
 * Divider Component
 *
 * Enhanced Separator with label support.
 * Can display text or icons in the center of the divider line.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label to display in the center of the divider */
  label?: React.ReactNode;
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Label alignment (only for horizontal) */
  labelAlignment?: "left" | "center" | "right";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      label,
      orientation = "horizontal",
      labelAlignment = "center",
      ...props
    },
    ref,
  ) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={cn("inline-block w-px self-stretch bg-border", className)}
          {...props}
        />
      );
    }

    if (!label) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={cn("h-px w-full bg-border", className)}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn("flex items-center w-full", className)}
        {...props}
      >
        <div
          className={cn(
            "h-px bg-border",
            labelAlignment === "left"
              ? "w-4 flex-shrink-0"
              : labelAlignment === "right"
                ? "flex-1"
                : "flex-1",
          )}
        />
        <span className="px-3 text-xs text-muted-foreground whitespace-nowrap">
          {label}
        </span>
        <div
          className={cn(
            "h-px bg-border",
            labelAlignment === "right"
              ? "w-4 flex-shrink-0"
              : labelAlignment === "left"
                ? "flex-1"
                : "flex-1",
          )}
        />
      </div>
    );
  },
);
Divider.displayName = "Divider";

export { Divider };

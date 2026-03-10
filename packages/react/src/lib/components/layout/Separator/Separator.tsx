/**
 * Separator Component
 *
 * Design Principles:
 * - Visual divider between content sections
 * - Horizontal or vertical orientation
 * - Decorative or semantic
 * - Optional label support for section dividers
 * - Consistent styling
 */

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../../../utils/cn";
import type { SeparatorProps } from "./Separator.types";

// ============================================================================
// Separator Component
// ============================================================================

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      label,
      labelAlignment = "center",
      ...props
    },
    ref,
  ) => {
    // If label is provided and orientation is horizontal, render with label
    if (label && orientation === "horizontal") {
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
              labelAlignment === "left" ? "w-4 flex-shrink-0" : "flex-1",
            )}
          />
          <span className="px-3 text-xs text-muted-foreground whitespace-nowrap">
            {label}
          </span>
          <div
            className={cn(
              "h-px bg-border",
              labelAlignment === "right" ? "w-4 flex-shrink-0" : "flex-1",
            )}
          />
        </div>
      );
    }

    // Standard separator (Radix primitive)
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className,
        )}
        {...props}
      />
    );
  },
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

// ============================================================================
// Exports
// ============================================================================

export { Separator };
export type {
  SeparatorProps,
  SeparatorLabelAlignment,
} from "./Separator.types";

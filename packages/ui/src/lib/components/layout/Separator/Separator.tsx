/**
 * Separator Component
 *
 * Design Principles:
 * - Visual divider between content sections
 * - Horizontal or vertical orientation
 * - Decorative or semantic
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
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
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
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

// ============================================================================
// Exports
// ============================================================================

export { Separator };
export type { SeparatorProps } from "./Separator.types";

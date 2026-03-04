/**
 * Tooltip component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";

/**
 * TooltipContent component props.
 */
export type TooltipContentProps = React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-tooltip").Content
>;

/**
 * SimpleTooltip component props.
 */
export interface SimpleTooltipProps {
  /** Content to show in the tooltip */
  content: React.ReactNode;
  /** The element that triggers the tooltip */
  children: React.ReactNode;
  /** Which side to show the tooltip on */
  side?: "top" | "right" | "bottom" | "left";
  /** Distance from trigger in pixels */
  sideOffset?: number;
  /** Alignment of the tooltip */
  align?: "start" | "center" | "end";
  /** Distance from alignment edge in pixels */
  alignOffset?: number;
  /** Time in ms before tooltip opens */
  delayDuration?: number;
  /** Whether to skip the delay when switching between tooltips */
  skipDelayDuration?: number;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
  /** Additional className for the tooltip content */
  className?: string;
}

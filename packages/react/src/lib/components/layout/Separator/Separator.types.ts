/**
 * Separator component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type * as SeparatorPrimitive from "@radix-ui/react-separator";

/**
 * Label alignment options for Separator with label.
 */
export type SeparatorLabelAlignment = "left" | "center" | "right";

/**
 * Separator component props.
 * Extends Radix UI Separator with optional label support.
 */
export interface SeparatorProps extends React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
> {
  /** Optional label to display in the center of the separator (horizontal only) */
  label?: React.ReactNode;
  /** Label alignment when label is provided */
  labelAlignment?: SeparatorLabelAlignment;
}

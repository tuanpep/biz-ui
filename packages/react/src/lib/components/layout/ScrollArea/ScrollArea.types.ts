/**
 * ScrollArea component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

/**
 * ScrollArea component props.
 */
export type ScrollAreaProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
>;

/**
 * ScrollBar component props.
 */
export type ScrollBarProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

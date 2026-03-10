/**
 * HoverCard component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-popover";

/**
 * HoverCard root props.
 */
export type HoverCardProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Root
>;

/**
 * HoverCard trigger props.
 */
export type HoverCardTriggerProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Trigger
>;

/**
 * HoverCard content props.
 */
export type HoverCardContentProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Content
>;

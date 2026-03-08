/**
 * Collapsible component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

/**
 * Collapsible root props.
 */
export type CollapsibleProps = React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Root
>;

/**
 * Collapsible trigger props.
 */
export type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.CollapsibleTrigger
>;

/**
 * Collapsible content props.
 */
export type CollapsibleContentProps = React.ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

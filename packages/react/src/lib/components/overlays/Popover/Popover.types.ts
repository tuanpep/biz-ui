/**
 * Popover component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

/**
 * Popover content props.
 */
export type PopoverContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
>;

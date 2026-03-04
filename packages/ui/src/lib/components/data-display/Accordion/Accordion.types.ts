/**
 * Accordion component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type * as AccordionPrimitive from "@radix-ui/react-accordion";

/**
 * AccordionItem component props.
 */
export type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

/**
 * AccordionTrigger component props.
 */
export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;

/**
 * AccordionContent component props.
 */
export type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

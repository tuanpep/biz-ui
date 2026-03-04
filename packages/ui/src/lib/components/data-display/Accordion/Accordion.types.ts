/**
 * Accordion component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type * as AccordionPrimitive from '@radix-ui/react-accordion';

/**
 * AccordionItem component props.
 */
export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

/**
 * AccordionTrigger component props.
 */
export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}

/**
 * AccordionContent component props.
 */
export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

/**
 * ScrollArea component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

/**
 * ScrollArea component props.
 */
export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  // All props inherited from Radix ScrollArea
}

/**
 * ScrollBar component props.
 */
export interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
  // All props inherited from Radix ScrollBar
}

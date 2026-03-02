import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

/**
 * Collapsible Component
 *
 * Design Principles:
 * - Show/hide content sections
 * - Accessible keyboard navigation
 * - Controlled or uncontrolled state
 * - Animated expand/collapse
 */

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

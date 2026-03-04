/**
 * Collapsible Component
 *
 * Design Principles:
 * - Show/hide content sections
 * - Accessible keyboard navigation
 * - Controlled or uncontrolled state
 * - Animated expand/collapse
 */

import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

// ============================================================================
// Collapsible Primitive Exports
// ============================================================================

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

// ============================================================================
// Exports
// ============================================================================

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

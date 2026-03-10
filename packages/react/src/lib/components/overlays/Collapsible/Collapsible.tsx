/**
 * Collapsible Component
 *
 * Design Principles:
 * - Show/hide content sections
 * - Accessible keyboard navigation
 * - Controlled or uncontrolled state
 * - Animated expand/collapse
 */

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from "./Collapsible.types";

// ============================================================================
// Collapsible Primitive Exports
// ============================================================================

const Collapsible: React.FC<CollapsibleProps> = CollapsiblePrimitive.Root;
const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> =
  CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent: React.FC<CollapsibleContentProps> =
  CollapsiblePrimitive.CollapsibleContent;

// ============================================================================
// Exports
// ============================================================================

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
export type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps,
} from "./Collapsible.types";

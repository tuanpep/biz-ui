/**
 * Tabs Component
 *
 * Biz UI aligned tabs navigation with:
 * - Consistent sizing (sm, md, lg)
 * - Multiple style variants (default, pills, underline)
 * - Accessible keyboard navigation (WCAG 2.1 AA)
 * - Smooth transition animations
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="overview">
 *   <TabsList>
 *     <TabsTrigger value="overview">Overview</TabsTrigger>
 *     <TabsTrigger value="details">Details</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="overview">Overview content</TabsContent>
 *   <TabsContent value="details">Details content</TabsContent>
 * </Tabs>
 * ```
 */

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../../utils/cn";
import { tabsListVariants, tabsTriggerVariants } from "./Tabs.variants";
import type {
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from "./Tabs.types";

// ============================================================================
// Tabs Root
// ============================================================================

const Tabs = TabsPrimitive.Root;

// ============================================================================
// TabsList Component
// ============================================================================

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, size }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// ============================================================================
// TabsTrigger Component
// ============================================================================

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, size }), className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// ============================================================================
// TabsContent Component
// ============================================================================

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// ============================================================================
// Exports
// ============================================================================

export { Tabs, TabsList, TabsTrigger, TabsContent };
export { tabsListVariants, tabsTriggerVariants } from "./Tabs.variants";
export type {
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
  TabsVariant,
  TabsSize,
} from "./Tabs.types";

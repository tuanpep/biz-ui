/**
 * Tabs component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type * as TabsPrimitive from "@radix-ui/react-tabs";
import type { VariantProps } from "class-variance-authority";

/**
 * Tabs variant types.
 */
export type TabsVariant = VariantProps<
  typeof import("./Tabs.variants").tabsListVariants
>["variant"];

/**
 * Tabs size types.
 */
export type TabsSize = VariantProps<
  typeof import("./Tabs.variants").tabsListVariants
>["size"];

/**
 * TabsList component props.
 */
export type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
> &
  VariantProps<typeof import("./Tabs.variants").tabsListVariants>;

/**
 * TabsTrigger component props.
 */
export type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> &
  VariantProps<typeof import("./Tabs.variants").tabsTriggerVariants>;

/**
 * TabsContent component props.
 */
export type TabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
>;

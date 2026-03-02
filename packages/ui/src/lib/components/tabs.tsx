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

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

// ============================================================================
// VARIANTS
// ============================================================================

const tabsListVariants = cva(
  'inline-flex items-center text-text-02 w-full border-b border-border p-0',
  {
    variants: {
      variant: {
        line: 'border-b border-border bg-transparent h-10',
        contained: 'border-none bg-layer-02 h-10',
      },
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
    },
    defaultVariants: {
      variant: 'line',
      size: 'md',
    },
  }
);

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative rounded-none',
  {
    variants: {
      variant: {
        line: 'px-4 h-full border-b-2 border-transparent data-[state=active]:border-interactive-01 data-[state=active]:text-text-01 hover:text-text-01 hover:bg-layer-hover/10',
        contained: 'px-6 h-full border-r border-border bg-layer-02 data-[state=active]:bg-layer-01 data-[state=active]:text-text-01 data-[state=active]:border-t-2 data-[state=active]:border-t-interactive-01 hover:bg-layer-hover/20',
      },
      size: {
        sm: 'text-xs px-3',
        md: 'text-sm px-4',
        lg: 'text-base px-6',
      },
    },
    defaultVariants: {
      variant: 'line',
      size: 'md',
    },
  }
);

// ============================================================================
// TYPES
// ============================================================================

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
  VariantProps<typeof tabsListVariants> { }

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
  VariantProps<typeof tabsTriggerVariants> { }

// ============================================================================
// TABS ROOT
// ============================================================================

const Tabs = TabsPrimitive.Root;

// ============================================================================
// TABS LIST
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
// TABS TRIGGER
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
// TABS CONTENT
// ============================================================================

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
};


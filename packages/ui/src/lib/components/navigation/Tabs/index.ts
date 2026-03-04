/**
 * Tabs Component Module
 *
 * Following Carbon's component export pattern:
 * - Main component as named export
 * - Variants utility
 * - Type exports
 */

// Main components
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
} from './Tabs';

// Types
export type { TabsListProps, TabsTriggerProps, TabsContentProps, TabsVariant, TabsSize } from './Tabs.types';

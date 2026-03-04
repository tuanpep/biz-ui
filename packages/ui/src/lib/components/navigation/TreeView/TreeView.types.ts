/**
 * TreeView component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * TreeView size type.
 */
export type TreeViewSize = VariantProps<typeof import('./tree-view.variants').treeViewVariants>['size'];

/**
 * TreeView item data.
 */
export interface TreeViewItemData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: TreeViewItemData[];
}

/**
 * TreeView component props.
 */
export interface TreeViewProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange' | 'onSelect'> {
  /** Tree data */
  items: TreeViewItemData[];
  /** Selected item ID */
  selectedId?: string | null;
  /** Default selected for uncontrolled */
  defaultSelectedId?: string;
  /** Callback when selection changes */
  onSelect?: (id: string) => void;
  /** Size variant */
  size?: TreeViewSize;
  /** Allow multiple selection */
  multiSelect?: boolean;
  /** Selected IDs for multi-select */
  selectedIds?: string[];
  /** Callback when multi-selection changes */
  onSelectionChange?: (ids: string[]) => void;
  /** Callback when item is expanded/collapsed */
  onExpand?: (id: string, expanded: boolean) => void;
}

/**
 * TreeItem component props.
 */
export interface TreeItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Item data */
  item: TreeViewItemData;
  /** Depth level */
  depth?: number;
  /** Size variant */
  size?: TreeViewSize;
  /** Selected state */
  selected?: boolean;
  /** Expanded state */
  expanded?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Expand toggle handler */
  onToggleExpand?: () => void;
}

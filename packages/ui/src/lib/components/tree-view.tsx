import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { ChevronRight, ChevronDown, Check } from 'lucide-react';

/**
 * TreeView Component
 *
 * Biz UI aligned tree view with:
 * - Hierarchical data display
 * - Expandable/collapsible nodes
 * - Multiple sizes
 * - Selection support
 */

const treeViewVariants = cva(
  'flex flex-col',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const treeItemVariants = cva(
  'flex items-center cursor-pointer transition-colors rounded-sm',
  {
    variants: {
      selected: {
        true: 'bg-primary/10 text-primary',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  }
);

// Types
export interface TreeViewItemData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: TreeViewItemData[];
}

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
  size?: 'sm' | 'md' | 'lg';
  /** Allow multiple selection */
  multiSelect?: boolean;
  /** Selected IDs for multi-select */
  selectedIds?: string[];
  /** Callback when multi-selection changes */
  onSelectionChange?: (ids: string[]) => void;
  /** Callback when item is expanded/collapsed */
  onExpand?: (id: string, expanded: boolean) => void;
}

const TreeView = React.forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      className,
      size = 'md',
      items,
      selectedId: controlledSelectedId,
      defaultSelectedId,
      onSelect,
      multiSelect = false,
      selectedIds: controlledSelectedIds,
      onSelectionChange,
      onExpand,
      ...props
    },
    ref
  ) => {
    const [selected, setSelected] = React.useState<string | null>(controlledSelectedId ?? defaultSelectedId ?? null);
    const [selectedIds, setSelectedIds] = React.useState<string[]>(controlledSelectedIds ?? []);
    const [expandedIds, setExpandedIds] = React.useState<string[]>([]);

    // Sync with controlled selected
    React.useEffect(() => {
      if (controlledSelectedId !== undefined) {
        setSelected(controlledSelectedId);
      }
    }, [controlledSelectedId]);

    React.useEffect(() => {
      if (controlledSelectedIds !== undefined) {
        setSelectedIds(controlledSelectedIds);
      }
    }, [controlledSelectedIds]);

    const handleSelect = (id: string) => {
      if (multiSelect) {
        const newSelectedIds = selectedIds.includes(id)
          ? selectedIds.filter((i) => i !== id)
          : [...selectedIds, id];
        setSelectedIds(newSelectedIds);
        onSelectionChange?.(newSelectedIds);
      } else {
        setSelected(id);
        onSelect?.(id);
      }
    };

    const toggleExpanded = (id: string) => {
      const newExpandedIds = expandedIds.includes(id)
        ? expandedIds.filter((i) => i !== id)
        : [...expandedIds, id];
      setExpandedIds(newExpandedIds);
      onExpand?.(id, !expandedIds.includes(id));
    };

    const renderTreeItem = (item: TreeViewItemData, depth = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedIds.includes(item.id);
      const isSelected = multiSelect
        ? selectedIds.includes(item.id)
        : selected === item.id;

      return (
        <div
          key={item.id}
          className={cn(treeItemVariants({ selected: isSelected, disabled: item.disabled }))}
          style={{ paddingLeft: depth * 16 }}
          role="treeitem"
          aria-selected={isSelected}
          aria-expanded={hasChildren ? isExpanded : undefined}
        >
          {/* Expand/Collapse button */}
          {hasChildren && (
            <button
              type="button"
              onClick={() => toggleExpanded(item.id)}
              className="mr-1 p-1 rounded hover:bg-muted"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          )}

          {/* Item content */}
          <div
            className="flex-1 flex items-center gap-2"
            onClick={() => !item.disabled && handleSelect(item.id)}
          >
            {item.icon && (
              <span className="flex-shrink-0">{item.icon}</span>
            )}
            <span className={cn(item.disabled && 'text-muted-foreground')}>
              {item.label}
            </span>
          </div>

          {/* Render children */}
          {hasChildren && isExpanded && (
            <div className="ml-4">
              {item.children?.map((child) => renderTreeItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(treeViewVariants({ size }), className)}
        role="tree"
        {...props}
      >
        {items.map((item) => renderTreeItem(item, 0))}
      </div>
    );
  }
);

TreeView.displayName = 'TreeView';

// TreeItem component for individual items
export interface TreeItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Item data */
  item: TreeViewItemData;
  /** Depth level */
  depth?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
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

const TreeItem = React.forwardRef<HTMLDivElement, TreeItemProps>(
  ({ item, size = 'md', depth = 0, selected = false, expanded = false, disabled = false, onClick, onToggleExpand, className, ...props }, ref) => {
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div
        ref={ref}
        className={cn(treeItemVariants({ selected, disabled }), className)}
        style={{ paddingLeft: depth * 16 }}
        {...props}
      >
        {hasChildren && (
          <button
            type="button"
            onClick={onToggleExpand}
            className="mr-1 p-1 rounded hover:bg-muted"
          >
            {expanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        )}

        <div
          className="flex-1 flex items-center gap-2"
          onClick={onClick}
        >
          {item.icon && (
            <span className="flex-shrink-0">{item.icon}</span>
          )}
          <span className={cn(disabled && 'text-muted-foreground')}>
            {item.label}
          </span>
        </div>

        {hasChildren && expanded && (
          <div className="ml-4">
            {item.children?.map((child, index) => (
              <TreeItem
                key={index}
                item={child}
                depth={depth + 1}
                size={size}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

TreeItem.displayName = 'TreeItem';

export { TreeView, TreeItem, treeViewVariants };

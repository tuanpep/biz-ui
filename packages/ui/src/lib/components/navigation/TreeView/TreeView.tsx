/**
 * TreeView Component
 *
 * Biz UI aligned tree view with:
 * - Hierarchical data display
 * - Expandable/collapsible nodes
 * - Multiple sizes
 * - Selection support
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { ChevronRight, ChevronDown } from "lucide-react";
import { treeViewVariants, treeItemVariants } from "./TreeView.variants";
import type {
  TreeViewProps,
  TreeItemProps,
  TreeViewItemData,
} from "./TreeView.types";

// ============================================================================
// TreeView Component
// ============================================================================

const TreeView = React.forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      className,
      size = "md",
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
    ref,
  ) => {
    const [selected, setSelected] = React.useState<string | null>(
      controlledSelectedId ?? defaultSelectedId ?? null,
    );
    const [selectedIds, setSelectedIds] = React.useState<string[]>(
      controlledSelectedIds ?? [],
    );
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
        <div key={item.id}>
          <div
            className={cn(
              treeItemVariants({
                selected: isSelected,
                disabled: item.disabled,
              }),
            )}
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
                aria-label={isExpanded ? "Collapse" : "Expand"}
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
              {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
              <span className={cn(item.disabled && "text-muted-foreground")}>
                {item.label}
              </span>
            </div>
          </div>

          {/* Render children as siblings */}
          {hasChildren && isExpanded && (
            <div role="group">
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
        {items.map((item: TreeViewItemData) => renderTreeItem(item, 0))}
      </div>
    );
  },
);

TreeView.displayName = "TreeView";

// ============================================================================
// TreeItem Component
// ============================================================================

const TreeItem = React.forwardRef<HTMLDivElement, TreeItemProps>(
  (
    {
      item,
      size = "md",
      depth = 0,
      selected = false,
      expanded = false,
      disabled = false,
      onClick,
      onToggleExpand,
      className,
      ...props
    },
    ref,
  ) => {
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div>
        <div
          ref={ref}
          className={cn(treeItemVariants({ selected, disabled }), className)}
          style={{ paddingLeft: depth * 16 }}
          role="treeitem"
          aria-selected={selected}
          aria-expanded={hasChildren ? expanded : undefined}
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

          <div className="flex-1 flex items-center gap-2" onClick={onClick}>
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
            <span className={cn(disabled && "text-muted-foreground")}>
              {item.label}
            </span>
          </div>
        </div>

        {hasChildren && expanded && (
          <div role="group">
            {item.children?.map((child: TreeViewItemData) => (
              <TreeItem
                key={child.id}
                item={child}
                depth={depth + 1}
                size={size}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);

TreeItem.displayName = "TreeItem";

// ============================================================================
// Exports
// ============================================================================

export { TreeView, TreeItem };

/**
 * Tag Component
 *
 * Biz UI aligned tag with:
 * - Multiple color variants
 * - Dismissible option with close button
 * - Selectable option (checkbox-like)
 * - Icon support
 * - Multiple sizes
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';
import { tagVariants, tagCloseVariants } from './Tag.variants';
import type { TagProps, DismissibleTagProps, SelectableTagProps, TagVariant, TagSize } from './Tag.types';

// ============================================================================
// Tag Component
// ============================================================================

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      dismissible = false,
      onDismiss,
      selectable = false,
      selected: controlledSelected,
      onSelect,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const [uncontrolledSelected, setUncontrolledSelected] = React.useState(false);
    const selected = controlledSelected ?? uncontrolledSelected;

    const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
      if (selectable) {
        const newSelected = !selected;
        setUncontrolledSelected(newSelected);
        onSelect?.(newSelected);
      }
      onClick?.(event);
    };

    const handleDismiss = (event: React.MouseEvent) => {
      event.stopPropagation();
      onDismiss?.();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (selectable && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        const newSelected = !selected;
        setUncontrolledSelected(newSelected);
        onSelect?.(newSelected);
      }
    };

    return (
      <span
        ref={ref}
        className={cn(
          tagVariants({ variant, size, selected }),
          selectable && 'cursor-pointer select-none',
          className
        )}
        onClick={handleClick}
        onKeyDown={selectable ? handleKeyDown : undefined}
        tabIndex={selectable ? 0 : undefined}
        role={selectable ? 'checkbox' : undefined}
        aria-checked={selectable ? selected : undefined}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {dismissible && (
          <button
            type="button"
            className={cn(tagCloseVariants({ size }))}
            onClick={handleDismiss}
            aria-label="Remove"
          >
            <X className="h-full w-full" />
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';

// ============================================================================
// DismissibleTag Component
// ============================================================================

const DismissibleTag = React.forwardRef<HTMLSpanElement, DismissibleTagProps>(
  ({ onDismiss, ...props }, ref) => {
    return <Tag ref={ref} dismissible onDismiss={onDismiss} {...props} />;
  }
);

DismissibleTag.displayName = 'DismissibleTag';

// ============================================================================
// SelectableTag Component
// ============================================================================

const SelectableTag = React.forwardRef<HTMLSpanElement, SelectableTagProps>(
  ({ selected, onSelect, ...props }, ref) => {
    return (
      <Tag ref={ref} selectable selected={selected} onSelect={onSelect} {...props} />
    );
  }
);

SelectableTag.displayName = 'SelectableTag';

// ============================================================================
// Exports
// ============================================================================

export { Tag, DismissibleTag, SelectableTag };
export { tagVariants, tagCloseVariants } from './Tag.variants';
export type { TagProps, DismissibleTagProps, SelectableTagProps, TagVariant, TagSize } from './Tag.types';

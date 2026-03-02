import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { X } from 'lucide-react';

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

const tagVariants = cva(
  'inline-flex items-center gap-1.5 font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary border border-primary/20',
        secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
        success: 'bg-success/10 text-success border border-success/20',
        warning: 'bg-warning/10 text-warning border border-warning/20',
        error: 'bg-destructive/10 text-destructive border border-destructive/20',
        info: 'bg-info/10 text-info border border-info/20',
        outline: 'bg-transparent text-foreground border border-border',
        filled: 'bg-primary text-primary-foreground border-0',
      },
      size: {
        sm: 'text-xs px-2 py-0.5 rounded-none',
        md: 'text-sm px-2.5 py-1 rounded-none',
        lg: 'text-base px-3 py-1.5 rounded-none',
      },
      selected: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      selected: false,
    },
  }
);

// Close button variants
const tagCloseVariants = cva(
  'inline-flex items-center justify-center rounded-none opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'size' | 'selected' | 'onSelect'> {
  /** Tag color variant */
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'filled';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Selected state (for visual styling) */
  selected?: boolean;
  /** Icon to display before the label */
  icon?: React.ReactNode;
  /** Show close button */
  dismissible?: boolean;
  /** Callback when close button is clicked */
  onDismiss?: () => void;
  /** Make tag selectable (clickable) */
  selectable?: boolean;
  /** Callback when tag is clicked (for selectable tags) */
  onSelect?: (selected: boolean) => void;
}

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

// Dismissible Tag - pre-configured with dismissible prop
export interface DismissibleTagProps extends Omit<TagProps, 'dismissible'> {
  /** Callback when tag is dismissed */
  onDismiss: () => void;
}

const DismissibleTag = React.forwardRef<HTMLSpanElement, DismissibleTagProps>(
  ({ onDismiss, ...props }, ref) => {
    return <Tag ref={ref} dismissible onDismiss={onDismiss} {...props} />;
  }
);

DismissibleTag.displayName = 'DismissibleTag';

// Selectable Tag - pre-configured with selectable prop
export interface SelectableTagProps extends Omit<TagProps, 'selectable'> {
  /** Selected state */
  selected?: boolean;
  /** Callback when selection changes */
  onSelect?: (selected: boolean) => void;
}

const SelectableTag = React.forwardRef<HTMLSpanElement, SelectableTagProps>(
  ({ selected, onSelect, ...props }, ref) => {
    return (
      <Tag ref={ref} selectable selected={selected} onSelect={onSelect} {...props} />
    );
  }
);

SelectableTag.displayName = 'SelectableTag';

export { Tag, DismissibleTag, SelectableTag, tagVariants };

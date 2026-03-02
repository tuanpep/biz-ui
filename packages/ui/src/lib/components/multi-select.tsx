import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { Check, ChevronDown, X } from 'lucide-react';

/**
 * MultiSelect Component
 *
 * Biz UI aligned multi-select with:
 * - Checkbox selection
 * - Tag display
 * - Multiple sizes
 * - Disabled state
 */

const multiSelectVariants = cva(
  'relative',
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

const multiSelectTriggerVariants = cva(
  'flex items-center justify-between w-full border rounded-md bg-background text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 px-2',
        md: 'h-10 px-3',
        lg: 'h-12 px-4',
      },
      error: {
        true: 'border-destructive',
      },
    },
    defaultVariants: {
      size: 'md',
      error: false,
    },
  }
);

const multiSelectMenuVariants = cva(
  'absolute z-50 mt-1 w-full bg-popover border rounded-md shadow-lg overflow-hidden',
  {
    variants: {
      size: {
        sm: 'max-h-48',
        md: 'max-h-60',
        lg: 'max-h-72',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const multiSelectItemVariants = cva(
  'flex items-center px-3 py-2 cursor-pointer transition-colors rounded-sm',
  {
    variants: {
      selected: {
        true: 'bg-primary/10 text-primary',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed pointer-events-none',
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  }
);

// Types
export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface MultiSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'> {
  /** Selected values */
  value?: string[];
  /** Default value for uncontrolled */
  defaultValue?: string[];
  /** Callback when value changes */
  onChange?: (value: string[]) => void;
  /** Options to display */
  options: MultiSelectOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
}

const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      className,
      size = 'md',
      value: controlledValue,
      defaultValue,
      onChange,
      options = [],
      placeholder = 'Select options',
      disabled = false,
      error = false,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<string[]>(controlledValue ?? defaultValue ?? []);
    const [searchValue, setSearchValue] = React.useState('');

    // Sync with controlled value
    React.useEffect(() => {
      if (controlledValue !== undefined) {
        setSelected(controlledValue);
      }
    }, [controlledValue]);

    const toggleOption = (optionValue: string) => {
      if (disabled) return;

      const newSelected = selected.includes(optionValue)
        ? selected.filter((v) => v !== optionValue)
        : [...selected, optionValue];

      setSelected(newSelected);
      onChange?.(newSelected);
    };

    const removeOption = (optionValue: string) => {
      const newSelected = selected.filter((v) => v !== optionValue);
      setSelected(newSelected);
      onChange?.(newSelected);
    };

    const selectedLabels = options
      .filter((opt) => selected.includes(opt.value))
      .map((opt) => opt.label);

    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div
        ref={ref}
        className={cn(multiSelectVariants({ size }), className)}
        {...props}
      >
        {/* Trigger */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={cn(multiSelectTriggerVariants({ size, error }))}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="flex flex-wrap gap-1 flex-1">
            {selected.length > 0 ? (
              selectedLabels.map((label, index) => (
                <MultiSelectTag
                  key={index}
                  tag={label}
                  size={size}
                  onRemove={() => removeOption(selected[index])}
                />
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className={cn(multiSelectMenuVariants({ size }), 'top-full')}>
            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                onClick={() => !option.disabled && toggleOption(option.value)}
                className={cn(
                  multiSelectItemVariants({
                    selected: selected.includes(option.value),
                    disabled: option.disabled,
                  })
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'h-4 w-4 border rounded flex items-center justify-center',
                      selected.includes(option.value) && 'bg-primary border-primary text-primary-foreground'
                    )}
                  >
                    {selected.includes(option.value) && (
                      <Check className="h-3 w-3" aria-hidden="true" />
                    )}
                  </div>
                  <span className={cn(option.disabled && 'text-muted-foreground')}>
                    {option.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error message */}
        {error && errorMessage && (
          <p className="text-xs text-destructive mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';

// MultiSelectTag component
export interface MultiSelectTagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'size'> {
  /** Tag content */
  tag: React.ReactNode;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether tag is selected */
  selected?: boolean;
  /** Whether tag is removable */
  removable?: boolean;
  /** Callback when remove is clicked */
  onRemove?: () => void;
}

const multiSelectTagVariants = cva(
  'inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-sm font-medium transition-colors',
  {
    variants: {
      size: {
        sm: 'text-xs px-1.5 py-0.5',
        md: 'text-sm px-2 py-1',
        lg: 'text-base px-2.5 py-1',
      },
      selected: {
        true: 'bg-primary/10 text-primary',
        false: 'bg-secondary text-secondary-foreground',
      },
    },
    defaultVariants: {
      size: 'md',
      selected: false,
    },
  }
);

const MultiSelectTag = React.forwardRef<HTMLSpanElement, MultiSelectTagProps>(
  ({ tag, size = 'md', selected = false, removable = false, onRemove, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(multiSelectTagVariants({ size, selected }), className)}
        {...props}
      >
        {tag}
        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className="ml-1 hover:bg-muted rounded-sm"
            aria-label={`Remove ${typeof tag === 'string' ? tag : ''}`}
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </span>
    );
  }
);

MultiSelectTag.displayName = 'MultiSelectTag';

export { MultiSelect, MultiSelectTag, multiSelectVariants };

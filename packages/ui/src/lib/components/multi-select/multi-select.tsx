/**
 * MultiSelect Component
 *
 * Biz UI aligned multi-select with:
 * - Checkbox selection
 * - Tag display
 * - Multiple sizes
 * - Disabled state
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { Check, ChevronDown, X } from 'lucide-react';
import {
  multiSelectVariants,
  multiSelectTriggerVariants,
  multiSelectMenuVariants,
  multiSelectItemVariants,
  multiSelectTagVariants,
} from './multi-select.variants';
import type { MultiSelectProps, MultiSelectTagProps } from './multi-select.types';

// ============================================================================
// MultiSelect Component
// ============================================================================

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
            {filteredOptions.map((option) => (
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

// ============================================================================
// MultiSelectTag Component
// ============================================================================

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

// ============================================================================
// Exports
// ============================================================================

export { MultiSelect, MultiSelectTag };

/**
 * MultiSelect Component
 *
 * Design Principles:
 * - Checkbox selection
 * - Tag display
 * - Multiple sizes
 * - Carbon-aligned validation patterns
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
      wrapperClassName,
      size = 'md',
      value: controlledValue,
      defaultValue,
      onChange,
      options = [],
      placeholder = 'Select options',
      disabled = false,
      readOnly = false,
      error,
      errorMessage,
      hasError: legacyHasError,
      warn,
      description,
      label,
      required = false,
      hideLabel = false,
      'data-testid': testId,
      id: propId,
      ...props
    },
    ref
  ) => {
    // Handle legacy props with deprecation warnings
    const resolvedError = React.useMemo(() => {
      if (error) return error;
      if (errorMessage) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('MultiSelect: errorMessage is deprecated. Use error prop with the message string instead.');
        }
        return errorMessage;
      }
      if (legacyHasError) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('MultiSelect: hasError is deprecated. Use error prop with the message string instead.');
        }
        return 'Invalid selection';
      }
      return undefined;
    }, [error, errorMessage, legacyHasError]);

    // Generate IDs
    const generatedId = React.useId();
    const selectId = propId || generatedId;
    const descriptionId = `${selectId}-description`;
    const errorId = `${selectId}-error`;
    const warnId = `${selectId}-warn`;
    const listId = `${selectId}-list`;

    // Calculate effective states
    const effectiveDisabled = !readOnly && disabled;
    const hasErrorState = !readOnly && !effectiveDisabled && !!resolvedError;
    const hasWarning = !readOnly && !hasErrorState && !effectiveDisabled && !!warn;

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
      if (effectiveDisabled) return;

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

    // Build aria-describedby
    const ariaDescribedBy = [
      description && !hasErrorState && !hasWarning ? descriptionId : null,
      hasErrorState ? errorId : null,
      hasWarning ? warnId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    const triggerElement = (
      <>
        <button
          type="button"
          id={selectId}
          disabled={effectiveDisabled}
          onClick={() => !effectiveDisabled && setIsOpen(!isOpen)}
          className={cn(
            multiSelectTriggerVariants({ size, error: hasErrorState }),
            hasWarning && 'border-warning focus-visible:ring-warning'
          )}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-invalid={hasErrorState}
          aria-describedby={ariaDescribedBy}
          aria-required={required}
          data-testid={testId}
        >
          <div className="flex flex-wrap gap-1 flex-1">
            {selected.length > 0 ? (
              selectedLabels.map((label, index) => (
                <MultiSelectTag
                  key={index}
                  tag={label}
                  size={size}
                  onRemove={() => removeOption(selected[index])}
                  removable
                />
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div
            id={listId}
            className={cn(multiSelectMenuVariants({ size }), 'top-full')}
            role="listbox"
            aria-multiselectable
          >
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
                role="option"
                aria-selected={selected.includes(option.value)}
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
      </>
    );

    // Render without wrapper if no label/description/error/warn
    if (hideLabel && !description && !hasErrorState && !hasWarning) {
      return (
        <div
          ref={ref}
          className={cn(multiSelectVariants({ size }), className)}
          data-testid={testId}
          {...props}
        >
          {triggerElement}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(multiSelectVariants({ size }), wrapperClassName, className)}
        data-testid={testId}
        {...props}
      >
        {label && !hideLabel && (
          <label
            htmlFor={selectId}
            className={cn(
              'block font-medium mb-1.5 text-text-02',
              size === 'sm' && 'text-xs',
              size === 'lg' && 'text-base',
              effectiveDisabled && 'opacity-50'
            )}
          >
            {label}
            {required && (
              <span className="text-destructive ml-1" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        {triggerElement}
        <div>
          {description && !hasErrorState && !hasWarning && (
            <p id={descriptionId} className="text-sm text-muted-foreground mt-1">
              {description}
            </p>
          )}
          {hasErrorState && (
            <p id={errorId} className="text-xs text-destructive mt-1" role="alert">
              {resolvedError}
            </p>
          )}
          {hasWarning && !hasErrorState && (
            <p id={warnId} className="text-xs text-warning mt-1" role="alert">
              {warn}
            </p>
          )}
        </div>
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
            <X className="h-3 w-3" aria-hidden="true" />
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

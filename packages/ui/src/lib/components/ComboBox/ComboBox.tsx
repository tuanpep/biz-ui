/**
 * ComboBox Component
 *
 * Biz UI aligned combo box with:
 * - Text input with filtering
 * - Dropdown list
 * - Clear button
 * - Multiple sizes
 * - Disabled state
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown, X } from 'lucide-react';
import {
  comboBoxVariants,
  comboBoxInputVariants,
  comboBoxMenuVariants,
  comboBoxItemVariants,
} from './ComboBox.variants';
import type { ComboBoxProps } from './ComboBox.types';

// ============================================================================
// ComboBox Component
// ============================================================================

const ComboBox = React.forwardRef<HTMLDivElement, ComboBoxProps>(
  (
    {
      className,
      size = 'md',
      value: controlledValue,
      defaultValue,
      onChange,
      options,
      placeholder = 'Select...',
      disabled = false,
      error = false,
      errorMessage,
      label,
      helperText,
      clearable = true,
      filterOption,
      noOptionsMessage = 'No options found',
      loading = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue ?? '');
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [highlightedIndex, setHighlightedIndex] = React.useState(-1);

    const selectedValue = controlledValue ?? uncontrolledValue;
    const selectedOption = options.find((opt) => opt.value === selectedValue);

    // Default filter function
    const defaultFilter = (option: typeof options[0], input: string) => {
      return option.label.toLowerCase().includes(input.toLowerCase());
    };

    const filter = filterOption ?? defaultFilter;

    // Filtered options
    const filteredOptions = inputValue
      ? options.filter((opt) => filter(opt, inputValue))
      : options;

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setInputValue('');
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      setIsOpen(true);
      setHighlightedIndex(0);
    };

    const handleSelect = (option: typeof options[0]) => {
      if (option.disabled) return;
      setUncontrolledValue(option.value);
      onChange?.(option.value);
      setIsOpen(false);
      setInputValue('');
    };

    const handleClear = () => {
      setUncontrolledValue('');
      onChange?.('');
      setInputValue('');
      inputRef.current?.focus();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen) {
        if (event.key === 'ArrowDown' || event.key === 'Enter') {
          setIsOpen(true);
          setHighlightedIndex(0);
        }
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Enter':
          event.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setInputValue('');
          break;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(comboBoxVariants({ size }), className)}
        {...props}
      >
        {label && (
          <label className={cn('block font-medium mb-1.5', size === 'sm' && 'text-xs', size === 'lg' && 'text-base')}>
            {label}
          </label>
        )}
        <div ref={containerRef} className="relative">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={isOpen ? inputValue : (selectedOption?.label ?? '')}
              onChange={handleInputChange}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              placeholder={placeholder}
              className={cn(
                comboBoxInputVariants({ size, error }),
                className
              )}
              role="combobox"
              aria-expanded={isOpen}
              aria-autocomplete="list"
              aria-controls={isOpen ? 'combobox-list' : undefined}
              aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
            />
            {/* Dropdown arrow */}
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={-1}
            >
              <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
            </button>
            {/* Clear button */}
            {clearable && selectedValue && !disabled && (
              <button
                type="button"
                className="absolute right-8 top-1/2 -translate-y-1/2 hover:text-foreground"
                onClick={handleClear}
                tabIndex={-1}
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>

          {/* Dropdown menu */}
          {isOpen && (
            <div
              id="combobox-list"
              className={comboBoxMenuVariants({ size })}
              role="listbox"
            >
              {loading ? (
                <div className="flex items-center justify-center py-4 text-muted-foreground">
                  Loading...
                </div>
              ) : filteredOptions.length === 0 ? (
                <div className="flex items-center justify-center py-4 text-muted-foreground">
                  {noOptionsMessage}
                </div>
              ) : (
                <div className="overflow-auto max-h-full">
                  {filteredOptions.map((option, index) => (
                    <div
                      key={option.value}
                      id={`option-${index}`}
                      role="option"
                      aria-selected={selectedValue === option.value}
                      className={cn(
                        comboBoxItemVariants({
                          selected: selectedValue === option.value,
                          disabled: option.disabled,
                          highlighted: highlightedIndex === index,
                        })
                      )}
                      onClick={() => handleSelect(option)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                    >
                      <span>{option.label}</span>
                      {selectedValue === option.value && (
                        <span className="text-primary">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {helperText && !error && (
          <p className={cn('text-muted-foreground mt-1', size === 'sm' && 'text-xs')}>{helperText}</p>
        )}
        {error && errorMessage && (
          <p className="text-xs text-destructive mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);

ComboBox.displayName = 'ComboBox';

// ============================================================================
// Exports
// ============================================================================

export { ComboBox };
export { comboBoxVariants, comboBoxInputVariants, comboBoxMenuVariants, comboBoxItemVariants } from './ComboBox.variants';
export type { ComboBoxProps, ComboBoxSkeletonProps, ComboBoxOption, ComboBoxSize } from './ComboBox.types';

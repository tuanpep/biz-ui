/**
 * ComboBox Component
 *
 * Design Principles:
 * - Text input with filtering
 * - Dropdown list with keyboard navigation
 * - Clear button
 * - Multiple sizes
 * - Carbon-aligned validation patterns
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { ChevronDown, X } from "lucide-react";
import {
  comboBoxVariants,
  comboBoxInputVariants,
  comboBoxMenuVariants,
  comboBoxItemVariants,
} from "./ComboBox.variants";
import type { ComboBoxProps } from "./ComboBox.types";

// ============================================================================
// ComboBox Component
// ============================================================================

const ComboBox = React.forwardRef<HTMLDivElement, ComboBoxProps>(
  (
    {
      className,
      wrapperClassName,
      size = "md",
      value: controlledValue,
      defaultValue,
      onChange,
      options,
      placeholder = "Select...",
      disabled = false,
      readOnly = false,
      error,
      errorMessage,
      hasError: legacyHasError,
      warn,
      description,
      helperText,
      label,
      required = false,
      hideLabel = false,
      clearable = true,
      filterOption,
      noOptionsMessage = "No options found",
      loading = false,
      "data-testid": testId,
      id: propId,
      ...props
    },
    ref,
  ) => {
    // Handle legacy props with deprecation warnings
    const resolvedError = React.useMemo(() => {
      if (error) return error;
      if (errorMessage) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "ComboBox: errorMessage is deprecated. Use error prop with the message string instead.",
          );
        }
        return errorMessage;
      }
      if (legacyHasError) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "ComboBox: hasError is deprecated. Use error prop with the message string instead.",
          );
        }
        return "Invalid selection";
      }
      return undefined;
    }, [error, errorMessage, legacyHasError]);

    const resolvedDescription = React.useMemo(() => {
      if (description) return description;
      if (helperText) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "ComboBox: helperText is deprecated. Use description instead.",
          );
        }
        return helperText;
      }
      return undefined;
    }, [description, helperText]);

    // Generate IDs
    const generatedId = React.useId();
    const comboBoxId = propId || generatedId;
    const descriptionId = `${comboBoxId}-description`;
    const errorId = `${comboBoxId}-error`;
    const warnId = `${comboBoxId}-warn`;
    const listId = `${comboBoxId}-list`;

    // Calculate effective states
    const effectiveDisabled = !readOnly && disabled;
    const hasError = !readOnly && !effectiveDisabled && !!resolvedError;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [uncontrolledValue, setUncontrolledValue] = React.useState(
      defaultValue ?? "",
    );
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [highlightedIndex, setHighlightedIndex] = React.useState(-1);

    const selectedValue = controlledValue ?? uncontrolledValue;
    const selectedOption = options.find((opt) => opt.value === selectedValue);

    // Default filter function
    const defaultFilter = (option: (typeof options)[0], input: string) => {
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
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setInputValue("");
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      setIsOpen(true);
      setHighlightedIndex(0);
    };

    const handleSelect = (option: (typeof options)[0]) => {
      if (option.disabled) return;
      setUncontrolledValue(option.value);
      onChange?.(option.value);
      setIsOpen(false);
      setInputValue("");
    };

    const handleClear = () => {
      setUncontrolledValue("");
      onChange?.("");
      setInputValue("");
      inputRef.current?.focus();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen) {
        if (event.key === "ArrowDown" || event.key === "Enter") {
          setIsOpen(true);
          setHighlightedIndex(0);
        }
        return;
      }

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev,
          );
          break;
        case "ArrowUp":
          event.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          event.preventDefault();
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case "Escape":
          setIsOpen(false);
          setInputValue("");
          break;
      }
    };

    // Build aria-describedby
    const ariaDescribedBy =
      [
        resolvedDescription && !hasError && !hasWarning ? descriptionId : null,
        hasError ? errorId : null,
        hasWarning ? warnId : null,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const inputElement = (
      <div ref={containerRef} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            id={comboBoxId}
            value={isOpen ? inputValue : (selectedOption?.label ?? "")}
            onChange={handleInputChange}
            onFocus={() => !effectiveDisabled && setIsOpen(true)}
            onKeyDown={handleKeyDown}
            disabled={effectiveDisabled}
            readOnly={readOnly}
            placeholder={placeholder}
            className={cn(
              comboBoxInputVariants({ size, error: hasError }),
              hasWarning && "border-warning focus-visible:ring-warning",
              className,
            )}
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            aria-controls={isOpen ? listId : undefined}
            aria-activedescendant={
              highlightedIndex >= 0
                ? `${comboBoxId}-option-${highlightedIndex}`
                : undefined
            }
            aria-invalid={hasError}
            aria-describedby={ariaDescribedBy}
            aria-required={required}
            data-testid={testId}
          />
          {/* Dropdown arrow */}
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            onClick={() => !effectiveDisabled && setIsOpen(!isOpen)}
            tabIndex={-1}
            aria-hidden="true"
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                isOpen && "rotate-180",
              )}
            />
          </button>
          {/* Clear button */}
          {clearable && selectedValue && !effectiveDisabled && (
            <button
              type="button"
              className="absolute right-8 top-1/2 -translate-y-1/2 hover:text-foreground"
              onClick={handleClear}
              tabIndex={-1}
              aria-label="Clear selection"
            >
              <X className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            id={listId}
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
                    id={`${comboBoxId}-option-${index}`}
                    role="option"
                    aria-selected={selectedValue === option.value}
                    className={cn(
                      comboBoxItemVariants({
                        selected: selectedValue === option.value,
                        disabled: option.disabled,
                        highlighted: highlightedIndex === index,
                      }),
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
    );

    // Render without wrapper if no label/description/error/warn
    if (hideLabel && !resolvedDescription && !hasError && !hasWarning) {
      return (
        <div
          ref={ref}
          className={cn(comboBoxVariants({ size }), wrapperClassName)}
          data-testid={testId}
          {...props}
        >
          {inputElement}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(comboBoxVariants({ size }), wrapperClassName)}
        data-testid={testId}
        {...props}
      >
        {label && !hideLabel && (
          <label
            htmlFor={comboBoxId}
            className={cn(
              "block font-medium mb-1.5 text-muted-foreground",
              size === "sm" && "text-xs",
              size === "lg" && "text-base",
              effectiveDisabled && "opacity-50",
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
        {inputElement}
        <div>
          {resolvedDescription && !hasError && !hasWarning && (
            <p
              id={descriptionId}
              className="text-sm text-muted-foreground mt-1"
            >
              {resolvedDescription}
            </p>
          )}
          {hasError && (
            <p
              id={errorId}
              className="text-xs text-destructive mt-1"
              role="alert"
            >
              {resolvedError}
            </p>
          )}
          {hasWarning && !hasError && (
            <p id={warnId} className="text-xs text-warning mt-1" role="alert">
              {warn}
            </p>
          )}
        </div>
      </div>
    );
  },
);

ComboBox.displayName = "ComboBox";

// ============================================================================
// Exports
// ============================================================================

export { ComboBox };
export {
  comboBoxVariants,
  comboBoxInputVariants,
  comboBoxMenuVariants,
  comboBoxItemVariants,
} from "./ComboBox.variants";
export type {
  ComboBoxProps,
  ComboBoxSkeletonProps,
  ComboBoxOption,
  ComboBoxSize,
} from "./ComboBox.types";

/**
 * Search Component
 *
 * Design Principles:
 * - Search icon prefix
 * - Clear button
 * - Expandable variant
 * - Loading state
 * - Carbon-aligned validation patterns
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { Search as SearchIcon, X, Loader2 } from "lucide-react";
import {
  searchVariants,
  searchInputVariants,
  searchIconVariants,
  clearButtonVariants,
} from "./Search.variants";
import type { SearchProps, ExpandableSearchProps } from "./Search.types";

// ============================================================================
// Loading Spinner Component
// ============================================================================

const LoadingSpinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => (
  <Loader2
    className={cn(clearButtonVariants({ size }), "animate-spin")}
    aria-hidden="true"
  />
);

// ============================================================================
// Search Component
// ============================================================================

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      wrapperClassName,
      variant,
      size = "md",
      expandable,
      label = "Search",
      description,
      error,
      warn,
      required = false,
      hideLabel = false,
      loading = false,
      value: controlledValue,
      defaultValue,
      onChange,
      onClear,
      onSearch,
      hideClear = false,
      disabled,
      readOnly,
      id: propId,
      "data-testid": testId,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(
      defaultValue ?? "",
    );
    const value = controlledValue ?? uncontrolledValue;
    const hasValue = Boolean(value);

    // Generate IDs
    const generatedId = React.useId();
    const inputId = propId || generatedId;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;
    const warnId = `${inputId}-warn`;

    // Calculate effective states
    const effectiveDisabled = !readOnly && (disabled || loading);
    const hasError = !readOnly && !effectiveDisabled && !!error;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUncontrolledValue(event.target.value);
      onChange?.(event);
    };

    const handleClear = () => {
      setUncontrolledValue("");
      onClear?.();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSearch?.(value as string);
      }
      onKeyDown?.(event);
    };

    // Build aria-describedby
    const ariaDescribedBy =
      [
        description && !hasError && !hasWarning ? descriptionId : null,
        hasError ? errorId : null,
        hasWarning ? warnId : null,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    // Build validation classes
    const validationClasses = {
      "border-destructive focus-visible:ring-destructive": hasError,
      "border-warning focus-visible:ring-warning": hasWarning,
    };

    const searchInput = (
      <div className={cn(searchVariants({ size, expandable }))}>
        <SearchIcon
          className={cn(searchIconVariants({ size }))}
          aria-hidden="true"
        />
        <input
          ref={ref}
          type="search"
          id={inputId}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={cn(
            searchInputVariants({ variant, size }),
            validationClasses,
            className,
          )}
          disabled={effectiveDisabled}
          readOnly={readOnly}
          aria-label={hideLabel ? label : undefined}
          aria-invalid={hasError}
          aria-describedby={ariaDescribedBy}
          aria-required={required}
          data-testid={testId}
          {...props}
        />
        {loading && <LoadingSpinner size={size || "md"} />}
        {!loading && hasValue && !hideClear && (
          <button
            type="button"
            className={cn(clearButtonVariants({ size }))}
            onClick={handleClear}
            aria-label="Clear search"
            tabIndex={-1}
          >
            <X className="h-full w-full" aria-hidden="true" />
          </button>
        )}
      </div>
    );

    // Render without wrapper if no visible label/description/error/warn
    if (hideLabel && !description && !error && !warn) {
      return searchInput;
    }

    return (
      <div className={cn("grid w-full gap-1.5", wrapperClassName)}>
        {label && !hideLabel && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium leading-none",
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
        {searchInput}
        <div>
          {description && !hasError && !hasWarning && (
            <p id={descriptionId} className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
          {hasError && (
            <p id={errorId} className="text-xs text-destructive" role="alert">
              {error}
            </p>
          )}
          {hasWarning && !hasError && (
            <p id={warnId} className="text-xs text-warning" role="alert">
              {warn}
            </p>
          )}
        </div>
      </div>
    );
  },
);

Search.displayName = "Search";

// ============================================================================
// ExpandableSearch Component
// ============================================================================

const ExpandableSearch = React.forwardRef<
  HTMLInputElement,
  ExpandableSearchProps
>((props, ref) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Search
      ref={ref}
      expandable
      className={cn("transition-all duration-200", expanded ? "w-64" : "w-10")}
      onFocus={() => setExpanded(true)}
      onBlur={(e) => {
        if (!e.target.value) {
          setExpanded(false);
        }
        props.onBlur?.(e);
      }}
      {...props}
    />
  );
});

ExpandableSearch.displayName = "ExpandableSearch";

// ============================================================================
// Exports
// ============================================================================

export { Search, ExpandableSearch };
export {
  searchVariants,
  searchInputVariants,
  searchIconVariants,
  clearButtonVariants,
} from "./Search.variants";
export type {
  SearchProps,
  ExpandableSearchProps,
  SearchSkeletonProps,
  SearchVariant,
  SearchSize,
} from "./Search.types";

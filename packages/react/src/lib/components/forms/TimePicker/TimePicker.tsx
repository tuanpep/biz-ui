/**
 * TimePicker Component
 *
 * Design Principles:
 * - Native time input
 * - Multiple sizes
 * - Carbon-aligned validation patterns
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { Clock } from "lucide-react";
import { timePickerVariants } from "./TimePicker.variants";
import type { TimePickerProps } from "./TimePicker.types";

// ============================================================================
// TimePicker Component
// ============================================================================

const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      className,
      wrapperClassName,
      size,
      value,
      onChange,
      label,
      placeholder = "00:00",
      error,
      warn,
      description,
      required = false,
      hideLabel = false,
      disabled = false,
      readOnly = false,
      "data-testid": testId,
      id: propId,
      ...props
    },
    ref,
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const pickerId = propId || generatedId;
    const descriptionId = `${pickerId}-description`;
    const errorId = `${pickerId}-error`;
    const warnId = `${pickerId}-warn`;

    // Calculate effective states
    const effectiveDisabled = !readOnly && disabled;
    const hasError = !readOnly && !effectiveDisabled && !!error;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
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

    const inputElement = (
      <div
        className={cn(
          timePickerVariants({ size, error: hasError }),
          hasWarning && "border-warning focus-within:ring-warning",
          effectiveDisabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <input
          id={pickerId}
          type="time"
          disabled={effectiveDisabled}
          readOnly={readOnly}
          value={value || ""}
          onChange={handleTimeChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
          aria-invalid={hasError}
          aria-describedby={ariaDescribedBy}
          aria-required={required}
          data-testid={testId}
        />
        <Clock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      </div>
    );

    // Render without wrapper if no label/description/error/warn
    if (hideLabel && !description && !hasError && !hasWarning) {
      return (
        <div ref={ref} className={className} data-testid={testId} {...props}>
          {inputElement}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5", wrapperClassName, className)}
        data-testid={testId}
        {...props}
      >
        {label && !hideLabel && (
          <label
            htmlFor={pickerId}
            className={cn(
              "block font-medium text-muted-foreground",
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

TimePicker.displayName = "TimePicker";

// ============================================================================
// Exports
// ============================================================================

export { TimePicker };
export type {
  TimePickerProps,
  TimePickerSkeletonProps,
  TimePickerSize,
} from "./TimePicker.types";

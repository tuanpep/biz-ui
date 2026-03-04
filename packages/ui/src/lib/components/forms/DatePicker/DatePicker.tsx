/**
 * DatePicker Component
 *
 * Design Principles:
 * - Radix UI Popover for accessibility
 * - Carbon-aligned validation patterns
 * - Supports: Single date selection, Date range, and DateTime.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { CalendarIcon } from "lucide-react";
import { format, isSameDay, isValid } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../overlays/Popover";
import { Calendar } from "../../data-display/Calendar";
import { TimePicker } from "../TimePicker";
import {
  datePickerVariants,
  datePickerInputVariants,
} from "./DatePicker.variants";
import type {
  DatePickerProps,
  DateRangePickerProps,
  DateTimePickerProps,
} from "./DatePicker.types";

// ============================================================================
// DatePicker Component
// ============================================================================

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      className,
      wrapperClassName,
      size,
      value,
      onChange,
      placeholder = "Select date",
      dateFormat = "MM/dd/yyyy",
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
      minDate,
      maxDate,
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
            "DatePicker: errorMessage is deprecated. Use error prop with the message string instead.",
          );
        }
        return errorMessage;
      }
      if (legacyHasError) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "DatePicker: hasError is deprecated. Use error prop with the message string instead.",
          );
        }
        return "Invalid date";
      }
      return undefined;
    }, [error, errorMessage, legacyHasError]);

    // Generate IDs
    const generatedId = React.useId();
    const pickerId = propId || generatedId;
    const descriptionId = `${pickerId}-description`;
    const errorId = `${pickerId}-error`;
    const warnId = `${pickerId}-warn`;

    // Calculate effective states
    const effectiveDisabled = !readOnly && disabled;
    const hasError = !readOnly && !effectiveDisabled && !!resolvedError;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    const handleDateSelect = (date: Date) => {
      onChange?.(date);
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

    const triggerElement = (
      <Popover>
        <PopoverTrigger asChild disabled={effectiveDisabled || undefined}>
          <div
            className={cn(
              datePickerInputVariants({ size, error: hasError }),
              "w-full justify-between",
              hasWarning && "border-warning focus-visible:ring-warning",
            )}
            aria-invalid={hasError}
            aria-describedby={ariaDescribedBy}
            aria-required={required}
          >
            <span className={cn(!value && "text-text-03")}>
              {value && isValid(value)
                ? format(value, dateFormat)
                : placeholder}
            </span>
            <CalendarIcon className="h-4 w-4 text-text-02" aria-hidden="true" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto" align="start">
          <Calendar
            selected={value}
            onSelect={handleDateSelect}
            minDate={minDate}
            maxDate={maxDate}
          />
        </PopoverContent>
      </Popover>
    );

    // Render without wrapper if no label/description/error/warn
    if (hideLabel && !description && !hasError && !hasWarning) {
      return (
        <div
          ref={ref}
          id={pickerId}
          className={cn(
            datePickerVariants({ size, disabled: effectiveDisabled }),
            className,
          )}
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
        id={pickerId}
        className={cn(
          datePickerVariants({ size, disabled: effectiveDisabled }),
          wrapperClassName,
        )}
        data-testid={testId}
        {...props}
      >
        {label && !hideLabel && (
          <label
            htmlFor={pickerId}
            className={cn(
              "block font-medium mb-1.5 text-text-02",
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
        {triggerElement}
        <div>
          {description && !hasError && !hasWarning && (
            <p
              id={descriptionId}
              className="text-sm text-muted-foreground mt-1"
            >
              {description}
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

DatePicker.displayName = "DatePicker";

// ============================================================================
// DateRangePicker Component
// ============================================================================

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      className,
      wrapperClassName,
      size,
      value = { start: null, end: null },
      onChange,
      startPlaceholder = "Start date",
      endPlaceholder = "End date",
      dateFormat = "MM/dd/yyyy",
      disabled = false,
      readOnly = false,
      error,
      errorMessage,
      warn,
      description,
      label,
      required = false,
      hideLabel = false,
      minDate,
      maxDate,
      "data-testid": testId,
      id: propId,
      ...props
    },
    ref,
  ) => {
    // Handle legacy errorMessage prop
    const resolvedError = React.useMemo(() => {
      if (error) return error;
      if (errorMessage) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "DateRangePicker: errorMessage is deprecated. Use error prop with the message string instead.",
          );
        }
        return errorMessage;
      }
      return undefined;
    }, [error, errorMessage]);

    // Generate IDs
    const generatedId = React.useId();
    const pickerId = propId || generatedId;
    const descriptionId = `${pickerId}-description`;
    const errorId = `${pickerId}-error`;
    const warnId = `${pickerId}-warn`;

    // Calculate effective states
    const effectiveDisabled = !readOnly && disabled;
    const hasError = !readOnly && !effectiveDisabled && !!resolvedError;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    const handleSelect = (date: Date) => {
      if (!value.start || (value.start && value.end)) {
        onChange?.({ start: date, end: null });
      } else if (value.start && !value.end) {
        if (isSameDay(date, value.start)) {
          onChange?.({ start: value.start, end: null });
        } else if (date < value.start) {
          onChange?.({ start: date, end: value.start });
        } else {
          onChange?.({ start: value.start, end: date });
        }
      }
    };

    const displayText =
      value.start && isValid(value.start)
        ? `${format(value.start, dateFormat)} - ${
            value.end && isValid(value.end)
              ? format(value.end, dateFormat)
              : endPlaceholder
          }`
        : `${startPlaceholder} - ${endPlaceholder}`;

    // Build aria-describedby
    const ariaDescribedBy =
      [
        description && !hasError && !hasWarning ? descriptionId : null,
        hasError ? errorId : null,
        hasWarning ? warnId : null,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const triggerElement = (
      <Popover>
        <PopoverTrigger asChild disabled={effectiveDisabled || undefined}>
          <div
            className={cn(
              datePickerInputVariants({ size, error: hasError }),
              "w-full justify-between",
              hasWarning && "border-warning focus-visible:ring-warning",
            )}
            aria-invalid={hasError}
            aria-describedby={ariaDescribedBy}
            aria-required={required}
          >
            <span className={cn(!value.start && "text-text-03")}>
              {displayText}
            </span>
            <CalendarIcon className="h-4 w-4 text-text-02" aria-hidden="true" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto" align="start">
          <Calendar
            mode="range"
            range={value}
            onSelect={handleSelect}
            minDate={minDate}
            maxDate={maxDate}
          />
        </PopoverContent>
      </Popover>
    );

    // Render without wrapper if no label/description/error/warn
    if (hideLabel && !description && !hasError && !hasWarning) {
      return (
        <div
          ref={ref}
          id={pickerId}
          className={cn(
            datePickerVariants({ size, disabled: effectiveDisabled }),
            className,
          )}
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
        id={pickerId}
        className={cn(
          datePickerVariants({ size, disabled: effectiveDisabled }),
          wrapperClassName,
        )}
        data-testid={testId}
        {...props}
      >
        {label && !hideLabel && (
          <label
            htmlFor={pickerId}
            className={cn(
              "block font-medium mb-1.5 text-text-02",
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
        {triggerElement}
        <div>
          {description && !hasError && !hasWarning && (
            <p
              id={descriptionId}
              className="text-sm text-muted-foreground mt-1"
            >
              {description}
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
DateRangePicker.displayName = "DateRangePicker";

// ============================================================================
// DateTimePicker Component
// ============================================================================

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>(
  (
    {
      className,
      size,
      label,
      description,
      error,
      warn,
      required,
      hideLabel,
      disabled,
      timeValue,
      onTimeChange,
      ...props
    },
    ref,
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const pickerId = props.id || generatedId;

    return (
      <div
        ref={ref}
        id={pickerId}
        className={cn(
          "flex flex-col gap-1.5",
          props.wrapperClassName,
          className,
        )}
      >
        {label && !hideLabel && (
          <label
            className={cn(
              "block font-medium text-text-02",
              size === "sm" && "text-xs",
              size === "lg" && "text-base",
              disabled && "opacity-50",
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
        <div className="flex items-start gap-2">
          <DatePicker
            size={size}
            {...props}
            label={undefined}
            description={undefined}
            error={error}
            warn={warn}
            required={required}
            hideLabel
            disabled={disabled}
            className="flex-1"
          />
          <TimePicker
            size={size}
            value={timeValue}
            onChange={onTimeChange}
            disabled={disabled ?? undefined}
            className="w-32"
          />
        </div>
        {description && !error && !warn && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {error && (
          <p className="text-xs text-destructive" role="alert">
            {error}
          </p>
        )}
        {warn && !error && (
          <p className="text-xs text-warning" role="alert">
            {warn}
          </p>
        )}
      </div>
    );
  },
);
DateTimePicker.displayName = "DateTimePicker";

// ============================================================================
// Exports
// ============================================================================

export { DatePicker, DateRangePicker, DateTimePicker };
export {
  datePickerVariants,
  datePickerInputVariants,
} from "./DatePicker.variants";
export type {
  DatePickerProps,
  DateRangePickerProps,
  DateTimePickerProps,
  DatePickerSkeletonProps,
  DateRange,
  DatePickerSize,
} from "./DatePicker.types";

/**
 * DatePicker Component
 *
 * Refactored using Radix UI Popover and Biz UI patterns.
 * Supports: Single date selection, Date range, and DateTime.
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { CalendarIcon } from 'lucide-react';
import { format, isSameDay, isValid } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import { Calendar } from '../calendar';
import { TimePicker } from '../time-picker';
import { datePickerVariants, datePickerInputVariants } from './DatePicker.variants';
import type { DatePickerProps, DateRangePickerProps, DateTimePickerProps } from './DatePicker.types';

// ============================================================================
// DatePicker Component
// ============================================================================

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      className,
      size,
      value,
      onChange,
      placeholder = 'Select date',
      dateFormat = 'MM/dd/yyyy',
      disabled = false,
      error = false,
      errorMessage,
      label,
      minDate,
      maxDate,
      ...props
    },
    ref
  ) => {
    const handleDateSelect = (date: Date) => {
      onChange?.(date);
    };

    return (
      <div
        ref={ref}
        className={cn(datePickerVariants({ size, disabled }), className)}
        {...props}
      >
        {label && (
          <label className={cn('block font-medium mb-1.5 text-text-02', size === 'sm' && 'text-xs', size === 'lg' && 'text-base')}>
            {label}
          </label>
        )}
        <Popover>
          <PopoverTrigger asChild disabled={disabled || undefined}>
            <div className={cn(datePickerInputVariants({ size, error }), 'w-full justify-between')}>
              <span className={cn(!value && 'text-text-03')}>
                {value && isValid(value) ? format(value, dateFormat) : placeholder}
              </span>
              <CalendarIcon className="h-4 w-4 text-text-02" />
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

        {error && errorMessage && (
          <p className="text-xs text-support-error mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

// ============================================================================
// DateRangePicker Component
// ============================================================================

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      className,
      size,
      value = { start: null, end: null },
      onChange,
      startPlaceholder = 'Start date',
      endPlaceholder = 'End date',
      dateFormat = 'MM/dd/yyyy',
      disabled = false,
      error = false,
      errorMessage,
      label,
      minDate,
      maxDate,
      ...props
    },
    ref
  ) => {
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
        ? `${format(value.start, dateFormat)} - ${value.end && isValid(value.end) ? format(value.end, dateFormat) : endPlaceholder
        }`
        : `${startPlaceholder} - ${endPlaceholder}`;

    return (
      <div
        ref={ref}
        className={cn(datePickerVariants({ size, disabled }), className)}
        {...props}
      >
        {label && (
          <label className={cn('block font-medium mb-1.5 text-text-02', size === 'sm' && 'text-xs', size === 'lg' && 'text-base')}>
            {label}
          </label>
        )}
        <Popover>
          <PopoverTrigger asChild disabled={disabled || undefined}>
            <div className={cn(datePickerInputVariants({ size, error }), 'w-full justify-between')}>
              <span className={cn(!value.start && 'text-text-03')}>
                {displayText}
              </span>
              <CalendarIcon className="h-4 w-4 text-text-02" />
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

        {error && errorMessage && (
          <p className="text-xs text-support-error mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);
DateRangePicker.displayName = 'DateRangePicker';

// ============================================================================
// DateTimePicker Component
// ============================================================================

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>(
  ({ className, size, label, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-1.5', className)}>
        {label && (
          <label className={cn('block font-medium text-text-02', size === 'sm' && 'text-xs', size === 'lg' && 'text-base')}>
            {label}
          </label>
        )}
        <div className="flex items-start gap-2">
          <DatePicker size={size} {...props} label={undefined} className="flex-1" />
          <TimePicker
            size={size}
            value={props.timeValue}
            onChange={props.onTimeChange}
            className="w-32"
          />
        </div>
      </div>
    );
  }
);
DateTimePicker.displayName = 'DateTimePicker';

// ============================================================================
// Exports
// ============================================================================

export { DatePicker, DateRangePicker, DateTimePicker };
export { datePickerVariants, datePickerInputVariants } from './DatePicker.variants';
export type {
  DatePickerProps,
  DateRangePickerProps,
  DateTimePickerProps,
  DatePickerSkeletonProps,
  DateRange,
  DatePickerSize,
} from './DatePicker.types';

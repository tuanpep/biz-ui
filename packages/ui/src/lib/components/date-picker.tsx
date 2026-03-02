import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { CalendarIcon, Clock } from 'lucide-react';
import { format, isSameDay, isValid, parse, setHours, setMinutes } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar } from './calendar';
import { TimePicker } from './time-picker';

/**
 * DatePicker Component
 *
 * Refactored using Radix UI Popover and Biz UI patterns.
 * Supports: Single date selection, Date range, and DateTime.
 */

const datePickerVariants = cva(
  'relative biz-ui',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const datePickerInputVariants = cva(
  'flex items-center gap-2 px-3 py-2 border rounded-md bg-ui-01 cursor-pointer transition-colors hover:bg-ui-02 focus:outline-none focus:ring-2 focus:ring-interactive-01',
  {
    variants: {
      size: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
      error: {
        true: 'border-support-error',
      },
    },
    defaultVariants: {
      size: 'md',
      error: false,
    },
  }
);

export interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange' | 'value'>,
  VariantProps<typeof datePickerVariants> {
  /** Selected date */
  value?: Date | null;
  /** Callback when date changes */
  onChange?: (date: Date | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Date format string (default: MM/dd/yyyy) */
  dateFormat?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Label */
  label?: string;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
}

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
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

// DateRangePicker Component
export interface DateRangePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange' | 'value'>,
  VariantProps<typeof datePickerVariants> {
  /** Selected date range */
  value?: { start: Date | null; end: Date | null };
  /** Callback when range changes */
  onChange?: (range: { start: Date | null; end: Date | null }) => void;
  /** Placeholder text for start date */
  startPlaceholder?: string;
  /** Placeholder text for end date */
  endPlaceholder?: string;
  /** Date format string */
  dateFormat?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Label */
  label?: string;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
}

export const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
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

// DateTimePicker Component
export interface DateTimePickerProps extends DatePickerProps {
  /** Time part (HH:mm) */
  timeValue?: string | null;
  /** Callback for time change */
  onTimeChange?: (time: string) => void;
}

export const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>(
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

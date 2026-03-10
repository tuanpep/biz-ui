/**
 * Calendar component types.
 * Separated for better organization and reusability.
 */

/**
 * Calendar mode type.
 */
export type CalendarMode = "single" | "range";

/**
 * Date range type.
 */
export interface DateRange {
  start: Date | null;
  end: Date | null;
}

/**
 * Calendar component props.
 */
export interface CalendarProps {
  /** Mode: 'single' for one date, 'range' for start/end */
  mode?: CalendarMode;
  /** Selected date (mode='single') */
  selected?: Date | null;
  /** Selected range (mode='range') */
  range?: DateRange;
  /** Callback on selection */
  onSelect?: (date: Date) => void;
  /** Optional class name */
  className?: string;
  /** Disable dates before */
  minDate?: Date;
  /** Disable dates after */
  maxDate?: Date;
}

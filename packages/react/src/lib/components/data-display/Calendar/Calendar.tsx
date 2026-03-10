/**
 * Calendar Component
 *
 * Biz UI aligned calendar with:
 * - Single date and range selection
 * - Month navigation
 * - Min/max date constraints
 */

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  isWithinInterval,
  isBefore,
  isAfter,
  startOfDay,
} from "date-fns";
import { cn } from "../../../utils/cn";
import { IconButton } from "../../forms/IconButton";
import type { CalendarProps } from "./Calendar.types";

// ============================================================================
// Calendar Component
// ============================================================================

const Calendar = ({
  mode = "single",
  selected,
  range,
  onSelect,
  className,
  minDate,
  maxDate,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = React.useState(
    selected ?? range?.start ?? new Date(),
  );

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handleDateClick = (day: Date) => {
    onSelect?.(day);
  };

  const isSelected = (day: Date) => {
    if (mode === "single" && selected) {
      return isSameDay(day, selected);
    }
    if (mode === "range" && range) {
      return (
        (range.start && isSameDay(day, range.start)) ||
        (range.end && isSameDay(day, range.end))
      );
    }
    return false;
  };

  const isInRange = (day: Date) => {
    if (mode === "range" && range?.start && range?.end) {
      return isWithinInterval(day, { start: range.start, end: range.end });
    }
    return false;
  };

  const isDisabled = (day: Date) => {
    const d = startOfDay(day);
    if (minDate && isBefore(d, startOfDay(minDate))) return true;
    if (maxDate && isAfter(d, startOfDay(maxDate))) return true;
    return false;
  };

  return (
    <div className={cn("p-3", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <IconButton
          icon={ChevronLeft}
          label="Previous month"
          variant="ghost"
          size="sm"
          onClick={prevMonth}
        />
        <div className="text-sm font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </div>
        <IconButton
          icon={ChevronRight}
          label="Next month"
          variant="ghost"
          size="sm"
          onClick={nextMonth}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="h-8 w-8 flex items-center justify-center text-[10px] uppercase font-semibold text-muted-foreground"
          >
            {day}
          </div>
        ))}
        {days.map((day) => {
          const selectedState = isSelected(day);
          const rangeState = isInRange(day);
          const disabledState = isDisabled(day);
          const currentMonthState = isSameMonth(day, monthStart);

          return (
            <button
              key={day.toString()}
              type="button"
              disabled={disabledState}
              onClick={() => handleDateClick(day)}
              className={cn(
                "h-8 w-8 text-xs flex items-center justify-center rounded-sm transition-colors relative cursor-pointer",
                !currentMonthState && "text-muted-foreground opacity-40",
                selectedState && "bg-primary text-white z-10",
                rangeState && !selectedState && "bg-primary/10",
                !selectedState &&
                  currentMonthState &&
                  !disabledState &&
                  "hover:bg-muted",
                isToday(day) &&
                  !selectedState &&
                  "border border-primary text-primary",
                disabledState &&
                  "cursor-not-allowed text-muted-foreground bg-transparent",
              )}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================================
// Exports
// ============================================================================

export { Calendar };

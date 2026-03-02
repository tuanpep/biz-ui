/**
 * TimePicker Component
 *
 * Biz UI aligned time picker with:
 * - Native time input
 * - Multiple sizes
 * - Error state
 * - Label support
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { Clock } from 'lucide-react';
import { timePickerVariants } from './time-picker.variants';
import type { TimePickerProps } from './time-picker.types';

// ============================================================================
// TimePicker Component
// ============================================================================

const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  ({ className, size, error, value, onChange, label, placeholder = '00:00', disabled, ...props }, ref) => {
    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div ref={ref} className={cn('relative', className)}>
        {label && (
          <label className={cn('block font-medium mb-1.5 text-text-02', size === 'sm' && 'text-xs', size === 'lg' && 'text-base')}>
            {label}
          </label>
        )}
        <div className={cn(timePickerVariants({ size, error }), disabled && 'opacity-50 cursor-not-allowed')}>
          <input
            type="time"
            disabled={disabled}
            value={value || ''}
            onChange={handleTimeChange}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-text-01 placeholder:text-text-03"
          />
          <Clock className="h-4 w-4 text-text-02" />
        </div>
      </div>
    );
  }
);

TimePicker.displayName = 'TimePicker';

// ============================================================================
// Exports
// ============================================================================

export { TimePicker };

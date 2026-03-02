import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { Clock } from 'lucide-react';

const timePickerVariants = cva(
    'flex items-center gap-2 px-3 py-2 border rounded-md bg-ui-01 cursor-pointer transition-colors hover:bg-ui-02 focus-within:ring-2 focus-within:ring-interactive-01',
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

export interface TimePickerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'>,
    VariantProps<typeof timePickerVariants> {
    /** Value: Date (time part is used) or 'HH:mm' string */
    value?: string | null;
    /** Callback on change */
    onChange?: (time: string) => void;
    /** Label */
    label?: string;
    /** Placeholder */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
}

export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
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

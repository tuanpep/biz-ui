/**
 * TimePicker component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

/**
 * TimePicker size type.
 */
export type TimePickerSize = VariantProps<typeof import('./time-picker.variants').timePickerVariants>['size'];

/**
 * TimePicker component props.
 */
export interface TimePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'>,
  VariantProps<typeof import('./time-picker.variants').timePickerVariants> {
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

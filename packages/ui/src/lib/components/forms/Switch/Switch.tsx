/**
 * Switch Component
 *
 * Design Principles:
 * - Clear on/off visual states
 * - Smooth transition animation
 * - Accessible keyboard navigation
 * - Support for labels and descriptions
 * - Carbon-aligned validation patterns
 */

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../utils/cn';
import { switchVariants, switchThumbVariants } from './Switch.variants';
import type { SwitchProps } from './Switch.types';

// ============================================================================
// Switch Component
// ============================================================================

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    {
      className,
      variant,
      size,
      label,
      description,
      error,
      warn,
      required = false,
      wrapperClassName,
      disabled,
      id: propId,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const switchId = propId || generatedId;
    const descriptionId = `${switchId}-description`;
    const errorId = `${switchId}-error`;
    const warnId = `${switchId}-warn`;

    // Calculate effective states
    const hasError = !disabled && !!error;
    const hasWarning = !disabled && !hasError && !!warn;

    // Build aria-describedby
    const ariaDescribedBy = [
      description && !hasError && !hasWarning ? descriptionId : null,
      hasError ? errorId : null,
      hasWarning ? warnId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    const switchElement = (
      <SwitchPrimitive.Root
        className={cn(
          switchVariants({ variant, size }),
          hasError && 'ring-2 ring-destructive ring-offset-2',
          className
        )}
        id={switchId}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        {...props}
        ref={ref}
      >
        <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
      </SwitchPrimitive.Root>
    );

    // Render without wrapper if no label/description/error/warn
    if (!label && !description && !error && !warn) {
      return switchElement;
    }

    return (
      <div className={cn('flex items-start space-x-2', wrapperClassName)}>
        <div className="pt-0.5">{switchElement}</div>
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={switchId}
              className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer',
                hasError && 'text-destructive',
                hasWarning && 'text-warning',
                disabled && 'opacity-50 cursor-not-allowed'
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
          <div>
            {description && !hasError && !hasWarning && (
              <p id={descriptionId} className="text-sm text-muted-foreground leading-normal">
                {description}
              </p>
            )}
            {hasError && (
              <p id={errorId} role="alert" className="text-xs text-destructive leading-normal">
                {error}
              </p>
            )}
            {hasWarning && !hasError && (
              <p id={warnId} role="alert" className="text-xs text-warning leading-normal">
                {warn}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Switch.displayName = 'Switch';

// ============================================================================
// Exports
// ============================================================================

export { Switch };
export { switchVariants, switchThumbVariants } from './Switch.variants';
export type { SwitchProps, SwitchSkeletonProps, SwitchVariant, SwitchSize } from './Switch.types';

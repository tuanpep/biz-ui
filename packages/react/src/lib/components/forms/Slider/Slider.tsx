/**
 * Slider Component
 *
 * Design Principles:
 * - Single or range selection
 * - Multiple size variants
 * - Disabled state
 * - Custom formatting
 * - Carbon-aligned validation patterns
 */

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../../utils/cn";
import {
  sliderVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
} from "./Slider.variants";
import type { SliderProps, RangeSliderProps } from "./Slider.types";

// ============================================================================
// Slider Component
// ============================================================================

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      size = "md",
      variant,
      label,
      description,
      error,
      warn,
      required = false,
      hideLabel = false,
      wrapperClassName,
      disabled,
      id: propId,
      "data-testid": testId,
      ...props
    },
    ref,
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const sliderId = propId || generatedId;
    const descriptionId = `${sliderId}-description`;
    const errorId = `${sliderId}-error`;
    const warnId = `${sliderId}-warn`;

    // Calculate effective states
    const effectiveDisabled = disabled;
    const hasError = !effectiveDisabled && !!error;
    const hasWarning = !effectiveDisabled && !hasError && !!warn;
    const effectiveVariant = hasError
      ? "destructive"
      : hasWarning
        ? "warning"
        : variant;

    // Build aria-describedby
    const ariaDescribedBy =
      [
        description && !hasError && !hasWarning ? descriptionId : null,
        hasError ? errorId : null,
        hasWarning ? warnId : null,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    // Build validation classes
    const validationClasses = {
      "border-destructive": hasError,
      "border-warning": hasWarning,
    };

    const slider = (
      <SliderPrimitive.Root
        ref={ref}
        id={sliderId}
        className={cn(sliderVariants({ size }), validationClasses, className)}
        disabled={effectiveDisabled}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        data-testid={testId}
        {...props}
      >
        <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
          <SliderPrimitive.Range
            className={cn(sliderRangeVariants({ variant: effectiveVariant }))}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            sliderThumbVariants({ size, variant: effectiveVariant }),
          )}
          aria-label={label || "Value"}
        />
      </SliderPrimitive.Root>
    );

    // Render without wrapper if no label/description/error/warn
    if (!label && !description && !error && !warn) {
      return slider;
    }

    return (
      <div className={cn("grid w-full gap-1.5", wrapperClassName)}>
        {label && (
          <label
            htmlFor={sliderId}
            className={cn(
              "text-sm font-medium leading-none",
              hideLabel && "sr-only",
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
        {slider}
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

Slider.displayName = "Slider";

// ============================================================================
// RangeSlider Component
// ============================================================================

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(
  (
    {
      label,
      startLabel,
      endLabel,
      description,
      error,
      warn,
      required = false,
      hideLabel = false,
      wrapperClassName,
      size = "md",
      variant,
      disabled,
      id: propId,
      className,
      "data-testid": testId,
      ...props
    },
    ref,
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const sliderId = propId || generatedId;
    const descriptionId = `${sliderId}-description`;
    const errorId = `${sliderId}-error`;
    const warnId = `${sliderId}-warn`;

    // Calculate effective states
    const effectiveDisabled = disabled;
    const hasError = !effectiveDisabled && !!error;
    const hasWarning = !effectiveDisabled && !hasError && !!warn;
    const effectiveVariant = hasError
      ? "destructive"
      : hasWarning
        ? "warning"
        : variant;

    // Build aria-describedby
    const ariaDescribedBy =
      [
        description && !hasError && !hasWarning ? descriptionId : null,
        hasError ? errorId : null,
        hasWarning ? warnId : null,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    // Build validation classes
    const validationClasses = {
      "border-destructive": hasError,
      "border-warning": hasWarning,
    };

    const slider = (
      <SliderPrimitive.Root
        ref={ref}
        id={sliderId}
        className={cn(sliderVariants({ size }), validationClasses, className)}
        disabled={effectiveDisabled}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        data-testid={testId}
        {...props}
      >
        <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
          <SliderPrimitive.Range
            className={cn(sliderRangeVariants({ variant: effectiveVariant }))}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            sliderThumbVariants({ size, variant: effectiveVariant }),
          )}
          aria-label={startLabel || label || "Minimum value"}
        />
        <SliderPrimitive.Thumb
          className={cn(
            sliderThumbVariants({ size, variant: effectiveVariant }),
          )}
          aria-label={endLabel || label || "Maximum value"}
        />
      </SliderPrimitive.Root>
    );

    // Render without wrapper if no label/description/error/warn
    if (!label && !description && !error && !warn) {
      return slider;
    }

    return (
      <div className={cn("grid w-full gap-1.5", wrapperClassName)}>
        {label && (
          <label
            htmlFor={sliderId}
            className={cn(
              "text-sm font-medium leading-none",
              hideLabel && "sr-only",
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
        {slider}
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

RangeSlider.displayName = "RangeSlider";

// ============================================================================
// Exports
// ============================================================================

export { Slider, RangeSlider };
export {
  sliderVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
} from "./Slider.variants";
export type {
  SliderProps,
  RangeSliderProps,
  SliderSkeletonProps,
  SliderVariant,
  SliderSize,
} from "./Slider.types";

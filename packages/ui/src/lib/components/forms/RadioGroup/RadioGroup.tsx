/**
 * RadioGroup Component
 *
 * Design Principles:
 * - Clear selected/unselected states
 * - Accessible keyboard navigation
 * - Consistent sizing with other form elements
 * - Support for labels and descriptions
 * - Carbon-aligned validation patterns
 */

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "../../../utils/cn";
import { radioGroupItemVariants } from "./RadioGroup.variants";
import type { RadioGroupProps, RadioGroupItemProps } from "./RadioGroup.types";

// ============================================================================
// RadioGroup Component
// ============================================================================

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      className,
      orientation = "vertical",
      label,
      description,
      error,
      warn,
      required = false,
      hideLabel = false,
      wrapperClassName,
      "data-testid": testId,
      disabled,
      id: propId,
      ...props
    },
    ref,
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const groupId = propId || generatedId;
    const descriptionId = `${groupId}-description`;
    const errorId = `${groupId}-error`;
    const warnId = `${groupId}-warn`;

    // Calculate effective states
    const hasError = !disabled && !!error;
    const hasWarning = !disabled && !hasError && !!warn;

    // Build aria-describedby
    const ariaDescribedBy =
      [
        description && !hasError && !hasWarning ? descriptionId : null,
        hasError ? errorId : null,
        hasWarning ? warnId : null,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const radioGroup = (
      <RadioGroupPrimitive.Root
        ref={ref}
        id={groupId}
        className={cn(
          "grid gap-2",
          orientation === "horizontal" && "flex flex-row gap-4",
          className,
        )}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        data-testid={testId}
        disabled={disabled}
        {...props}
      />
    );

    // Render without wrapper if no label/description/error/warn
    if (!label && !description && !error && !warn) {
      return radioGroup;
    }

    return (
      <div className={cn("grid w-full gap-1.5", wrapperClassName)}>
        {label && (
          <label
            htmlFor={groupId}
            className={cn(
              "text-sm font-medium leading-none",
              hideLabel && "sr-only",
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
        {radioGroup}
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
RadioGroup.displayName = "RadioGroup";

// ============================================================================
// RadioGroupItem Component
// ============================================================================

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      variant,
      size,
      label,
      description,
      id: propId,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const itemId = propId || generatedId;
    const itemDescriptionId = `${itemId}-item-description`;

    const radio = (
      <RadioGroupPrimitive.Item
        ref={ref}
        id={itemId}
        className={cn(
          radioGroupItemVariants({ variant, size }),
          "aspect-square rounded-full border border-primary text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        disabled={disabled}
        aria-describedby={description ? itemDescriptionId : undefined}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );

    if (!label && !description) {
      return radio;
    }

    return (
      <div
        className={cn(
          "flex items-start space-x-2",
          disabled && "disabled:opacity-50",
        )}
      >
        <div className="pt-0.5">{radio}</div>
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={itemId}
              className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p
              id={itemDescriptionId}
              className="text-sm text-muted-foreground leading-normal"
            >
              {description}
            </p>
          )}
        </div>
      </div>
    );
  },
);
RadioGroupItem.displayName = "RadioGroupItem";

// ============================================================================
// Exports
// ============================================================================

export { RadioGroup, RadioGroupItem };
export {
  radioGroupItemVariants,
  radioIndicatorVariants,
} from "./RadioGroup.variants";
export type {
  RadioGroupProps,
  RadioGroupItemProps,
  RadioGroupSkeletonProps,
  RadioGroupVariant,
  RadioGroupSize,
} from "./RadioGroup.types";

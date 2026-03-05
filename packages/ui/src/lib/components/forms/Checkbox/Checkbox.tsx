/**
 * Checkbox Component
 *
 * Design Principles:
 * - Clear checked/unchecked/indeterminate states
 * - Accessible keyboard navigation
 * - Consistent sizing with other form elements
 * - Support for labels and descriptions
 * - Carbon-aligned validation patterns
 */

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "../../../utils/cn";
import { checkboxVariants } from "./Checkbox.variants";
import type { CheckboxProps } from "./Checkbox.types";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
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
      checked,
      disabled,
      id: propId,
      ...props
    },
    ref,
  ) => {
    const innerRef =
      React.useRef<React.ElementRef<typeof CheckboxPrimitive.Root>>(null);

    // Generate unique IDs for accessibility
    const generatedId = React.useId();
    const id = propId || generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;
    const warnId = `${id}-warn`;

    // Calculate effective states
    const hasError = !disabled && !!error;
    const hasWarning = !disabled && !hasError && !!warn;

    // Expose the inner checkbox element to the parent ref
    React.useImperativeHandle(
      ref,
      () => innerRef.current as React.ElementRef<typeof CheckboxPrimitive.Root>,
    );

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

    const checkbox = (
      <CheckboxPrimitive.Root
        ref={innerRef}
        id={id}
        checked={checked}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        className={cn(
          checkboxVariants({ variant, size }),
          validationClasses,
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          {checked === "indeterminate" ? (
            <Minus
              className={cn(
                size === "sm"
                  ? "h-3 w-3"
                  : size === "lg"
                    ? "h-5 w-5"
                    : "h-4 w-4",
              )}
            />
          ) : (
            <Check
              className={cn(
                size === "sm"
                  ? "h-3 w-3"
                  : size === "lg"
                    ? "h-5 w-5"
                    : "h-4 w-4",
              )}
            />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    // Render without wrapper if no label/description/error/warn
    if (!label && !description && !error && !warn) {
      return checkbox;
    }

    return (
      <div className={cn("flex items-start space-x-2", wrapperClassName)}>
        <div className="pt-0.5">{checkbox}</div>
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={id}
              className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
                hasError && "text-destructive",
                hasWarning && "text-warning",
                disabled && "disabled:opacity-50 disabled:cursor-not-allowed",
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
              <p
                id={descriptionId}
                className="text-sm text-muted-foreground leading-normal"
              >
                {description}
              </p>
            )}
            {hasError && (
              <p
                id={errorId}
                role="alert"
                className="text-xs text-destructive leading-normal"
              >
                {error}
              </p>
            )}
            {hasWarning && !hasError && (
              <p
                id={warnId}
                role="alert"
                className="text-xs text-warning leading-normal"
              >
                {warn}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps } from "./Checkbox.types";

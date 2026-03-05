/**
 * Select Component
 *
 * Design Principles:
 * - Consistent styling with Input component
 * - Clear focus and error/warning states
 * - Support for labels and descriptions
 * - Carbon-aligned validation patterns
 */

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../../utils/cn";
import { selectTriggerVariants, selectItemVariants } from "./Select.variants";
import type { SelectTriggerProps, SelectItemProps } from "./Select.types";

// ============================================================================
// ROOT COMPONENTS (Radix re-exports)
// ============================================================================

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

// ============================================================================
// TRIGGER COMPONENT
// ============================================================================

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(
  (
    {
      className,
      children,
      variant,
      size,
      error,
      warn,
      label,
      description,
      errorText,
      warnText,
      required = false,
      hideLabel = false,
      wrapperClassName,
      "data-testid": testId,
      id: providedId,
      disabled,
      ...props
    },
    ref,
  ) => {
    // Generate IDs
    const generatedId = React.useId();
    const selectId = providedId || generatedId;
    const descriptionId = `${selectId}-description`;
    const errorId = `${selectId}-error`;
    const warnId = `${selectId}-warn`;

    // Calculate effective states
    const hasError = !!error || !!errorText;
    const hasWarning = !hasError && (!!warn || !!warnText);
    const displayError = hasError && errorText;
    const displayWarning = hasWarning && warnText;

    // Build aria-describedby
    const ariaDescribedBy =
      [
        description && !hasError && !hasWarning ? descriptionId : null,
        displayError ? errorId : null,
        displayWarning ? warnId : null,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const trigger = (
      <SelectPrimitive.Trigger
        ref={ref}
        id={selectId}
        className={cn(
          selectTriggerVariants({
            variant,
            size,
            error: hasError,
            warn: hasWarning,
          }),
          className,
        )}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        data-testid={testId}
        disabled={disabled}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    );

    // Render without wrapper if no label/description/error/warn
    if (!label && !description && !displayError && !displayWarning) {
      return trigger;
    }

    return (
      <div className={cn("grid w-full gap-1.5", wrapperClassName)}>
        {label && (
          <label
            htmlFor={selectId}
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
        {trigger}
        <div>
          {description && !hasError && !hasWarning && (
            <p id={descriptionId} className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
          {displayError && (
            <p id={errorId} className="text-xs text-destructive" role="alert">
              {errorText}
            </p>
          )}
          {displayWarning && !displayError && (
            <p id={warnId} className="text-xs text-warning" role="alert">
              {warnText}
            </p>
          )}
        </div>
      </div>
    );
  },
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

// ============================================================================
// CONTENT COMPONENT
// ============================================================================

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden border border-border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
        <ChevronUp className="h-4 w-4" />
      </SelectPrimitive.ScrollUpButton>
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
        <ChevronDown className="h-4 w-4" />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

// ============================================================================
// ITEM COMPONENT
// ============================================================================

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, size, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(selectItemVariants({ size }), className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// ============================================================================
// LABEL COMPONENT
// ============================================================================

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-muted-foreground",
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

// ============================================================================
// SEPARATOR COMPONENT
// ============================================================================

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  selectTriggerVariants,
  selectItemVariants,
};

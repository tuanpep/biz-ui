/**
 * Select component types.
 * Following Carbon's patterns with enhanced validation states.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Select trigger variant types.
 */
export type SelectTriggerVariant = VariantProps<
  typeof import("./Select.variants").selectTriggerVariants
>["variant"];

/**
 * Select trigger size types.
 */
export type SelectTriggerSize = VariantProps<
  typeof import("./Select.variants").selectTriggerVariants
>["size"];

/**
 * Select item size types.
 */
export type SelectItemSize = VariantProps<
  typeof import("./Select.variants").selectItemVariants
>["size"];

/**
 * Select validation state.
 */
export type SelectValidationState = "valid" | "warning" | "error";

/**
 * Select trigger props.
 */
export interface SelectTriggerProps extends React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-select").Trigger
> {
  /** Select trigger variant style */
  variant?: SelectTriggerVariant;
  /** Select trigger size */
  size?: SelectTriggerSize;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Show error state (legacy prop) */
  error?: boolean;
  /** Warning state (not invalid, but needs attention) */
  warn?: boolean;
  /** Label text for the select */
  label?: string;
  /** Description text shown below the select */
  description?: string;
  /** Error message to display */
  errorText?: string;
  /** Warning message to display */
  warnText?: string;
  /** Show required indicator on label */
  required?: boolean;
  /** Hide label visually but keep for accessibility */
  hideLabel?: boolean;
  /** Additional wrapper className when label/description is present */
  wrapperClassName?: string;
  /** Test id for testing */
  "data-testid"?: string;
}

/**
 * Select item props.
 */
export interface SelectItemProps extends React.ComponentPropsWithoutRef<
  typeof import("@radix-ui/react-select").Item
> {
  /** Select item size */
  size?: SelectItemSize;
}

/**
 * Select skeleton props.
 */
export interface SelectSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton size to match select trigger */
  size?: SelectTriggerSize;
  /** Show label skeleton */
  hasLabel?: boolean;
  /** Show description skeleton */
  hasDescription?: boolean;
  /** Show error skeleton */
  hasError?: boolean;
}

/**
 * SelectField component props.
 * A wrapper that combines Select with label, description, and validation.
 */
export interface SelectFieldProps extends Omit<SelectTriggerProps, "ref"> {
  /** Select value (controlled) */
  value?: string;
  /** Default select value (uncontrolled) */
  defaultValue?: string;
  /** Callback when value changes */
  onValueChange?: (value: string) => void;
  /** Select name for form submission */
  name?: string;
  /** Disable the select */
  disabled?: boolean;
  /** Make select read-only */
  readOnly?: boolean;
  /** Select options */
  children?: React.ReactNode;
}

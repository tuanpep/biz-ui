/**
 * Normalized input props hook for consistent form input handling.
 * Following Carbon's useNormalizedInputProps pattern.
 *
 * This hook standardizes validation states, IDs, and accessibility attributes
 * across all form input components.
 */

import * as React from "react";
import { useId } from "../hooks/use-id";

// ============================================================================
// Types
// ============================================================================

export interface NormalizedInputPropsConfig {
  /** Unique ID for the input */
  id?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is read-only */
  readOnly?: boolean;
  /** Whether the input has an error */
  invalid?: boolean;
  /** Error message to display */
  invalidText?: React.ReactNode;
  /** Whether to show a warning state */
  warn?: boolean;
  /** Warning message to display */
  warnText?: React.ReactNode;
  /** Helper text to display */
  helperText?: React.ReactNode;
}

export interface NormalizedInputProps {
  /** Whether the input is effectively disabled */
  disabled: boolean;
  /** Whether the input is effectively invalid */
  invalid: boolean;
  /** ID for the error message element */
  invalidId: string;
  /** Whether the input is in warning state */
  warn: boolean;
  /** ID for the warning message element */
  warnId: string;
  /** ID for the helper text element */
  helperId: string;
  /** ID for the input element */
  inputId: string;
  /** Validation message element to render */
  validation: React.ReactNode;
  /** Helper text element to render */
  helper: React.ReactNode;
  /** Aria-describedby value */
  ariaDescribedBy: string | undefined;
  /** Additional props to spread on input */
  inputProps: {
    id: string;
    "aria-invalid"?: "true";
    "aria-describedby"?: string;
    "data-invalid"?: boolean;
    disabled: boolean;
  };
}

// ============================================================================
// Hook
// ============================================================================

/**
 * Normalize input props for consistent validation state handling.
 *
 * This hook handles:
 * - ID generation for input and associated elements
 * - Validation state precedence (invalid > warn > default)
 * - ARIA attribute generation
 * - Helper and validation message rendering
 *
 * @example
 * ```tsx
 * const inputProps = useNormalizedInputProps({
 *   id: 'email',
 *   invalid: hasError,
 *   invalidText: 'Invalid email',
 *   helperText: 'Enter your email address',
 * });
 *
 * return (
 *   <div>
 *     <input {...inputProps.inputProps} />
 *     {inputProps.helper}
 *     {inputProps.validation}
 *   </div>
 * );
 * ```
 */
export function useNormalizedInputProps({
  id: providedId,
  disabled = false,
  readOnly = false,
  invalid = false,
  invalidText,
  warn = false,
  warnText,
  helperText,
}: NormalizedInputPropsConfig): NormalizedInputProps {
  const generatedId = useId("input");
  const id = providedId || generatedId;

  // Calculate effective states (considering readOnly and disabled)
  const effectiveDisabled = !readOnly && disabled;
  const effectiveInvalid = !readOnly && !disabled && invalid;
  const effectiveWarn = !readOnly && !effectiveInvalid && !disabled && warn;

  // Generate IDs for associated elements
  const inputId = id;
  const invalidId = `${id}-error-message`;
  const warnId = `${id}-warn-message`;
  const helperId = `${id}-helper-text`;

  // Build aria-describedby
  const ariaDescribedBy: string | undefined =
    [
      effectiveInvalid && invalidText ? invalidId : null,
      effectiveWarn && warnText ? warnId : null,
      !effectiveInvalid && !effectiveWarn && helperText ? helperId : null,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  // Create validation element
  let validation: React.ReactNode = null;

  if (effectiveInvalid && invalidText) {
    validation = (
      <div
        id={invalidId}
        role="alert"
        className="text-destructive text-sm mt-1"
      >
        {invalidText}
      </div>
    );
  } else if (effectiveWarn && warnText) {
    validation = (
      <div id={warnId} role="alert" className="text-warning text-sm mt-1">
        {warnText}
      </div>
    );
  }

  // Create helper element
  let helper: React.ReactNode = null;

  if (!effectiveInvalid && !effectiveWarn && helperText) {
    helper = (
      <div id={helperId} className="text-muted-foreground text-sm mt-1">
        {helperText}
      </div>
    );
  }

  // Build input props
  const inputProps: NormalizedInputProps["inputProps"] = {
    id: inputId,
    disabled: effectiveDisabled,
    "aria-describedby": ariaDescribedBy,
  };

  if (effectiveInvalid) {
    inputProps["aria-invalid"] = "true";
    inputProps["data-invalid"] = true;
  }

  return {
    disabled: effectiveDisabled,
    invalid: effectiveInvalid,
    invalidId,
    warn: effectiveWarn,
    warnId,
    helperId,
    inputId,
    validation,
    helper,
    ariaDescribedBy,
    inputProps,
  };
}

// ============================================================================
// Utility for non-hook usage (for class components)
// ============================================================================

/**
 * Get validation state class names.
 * Useful for components that need to apply validation classes.
 */
export function getValidationClassNames(
  invalid?: boolean,
  warn?: boolean,
): Record<string, boolean> {
  return {
    "border-destructive": !!invalid,
    "focus-visible:ring-destructive": !!invalid,
    "border-warning": !!warn && !invalid,
    "focus-visible:ring-warning": !!warn && !invalid,
  };
}

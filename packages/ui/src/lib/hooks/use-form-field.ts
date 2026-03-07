/**
 * useFormField Hook
 *
 * A shared hook for form field components that provides:
 * - ID generation for field, description, error, and warning elements
 * - State calculation (disabled, error, warning states)
 * - aria-describedby attribute building
 * - Validation class generation
 *
 * This eliminates duplication across Input, Textarea, Select, Checkbox,
 * Switch, RadioGroup, and other form components.
 *
 * @example
 * ```tsx
 * const Input = ({ label, error, warn, disabled, readOnly, ...props }) => {
 *   const {
 *     fieldId,
 *     descriptionId,
 *     errorId,
 *     warnId,
 *     effectiveDisabled,
 *     hasError,
 *     hasWarning,
 *     ariaDescribedBy,
 *     validationClasses,
 *   } = useFormField({ id: props.id, error, warn, disabled, readOnly });
 *
 *   return <input id={fieldId} aria-describedby={ariaDescribedBy} ... />;
 * };
 * ```
 */

import * as React from "react";
import { cn } from "../utils/cn";

// ============================================================================
// Types
// ============================================================================

export interface UseFormFieldOptions {
  /** Optional provided ID (will generate one if not provided) */
  id?: string;
  /** Error message to display */
  error?: string;
  /** Warning message to display */
  warn?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Whether the field is read-only */
  readOnly?: boolean;
  /** Description text */
  description?: string;
}

export interface FormFieldIds {
  /** The main field ID */
  fieldId: string;
  /** ID for the description element */
  descriptionId: string;
  /** ID for the error message element */
  errorId: string;
  /** ID for the warning message element */
  warnId: string;
}

export interface FormFieldStates {
  /** Effective disabled state (false if readOnly) */
  effectiveDisabled: boolean;
  /** Whether field has error state */
  hasError: boolean;
  /** Whether field has warning state */
  hasWarning: boolean;
}

export interface UseFormFieldReturn extends FormFieldIds, FormFieldStates {
  /** Combined aria-describedby attribute value */
  ariaDescribedBy: string | undefined;
  /** CSS classes for validation states */
  validationClasses: string;
  /** Props to spread onto the form control */
  fieldProps: {
    id: string;
    "aria-invalid"?: boolean;
    "aria-describedby"?: string;
    disabled?: boolean;
  };
}

// ============================================================================
// Hook Implementation
// ============================================================================

/**
 * Hook for managing form field state and accessibility attributes.
 * Follows Carbon's useNormalizedInputProps pattern.
 */
export function useFormField(options: UseFormFieldOptions): UseFormFieldReturn {
  const {
    id: providedId,
    error,
    warn,
    disabled,
    readOnly,
    description,
  } = options;

  // Generate IDs
  const generatedId = React.useId();
  const fieldId = providedId || generatedId;
  const descriptionId = `${fieldId}-description`;
  const errorId = `${fieldId}-error`;
  const warnId = `${fieldId}-warn`;

  // Calculate effective states (matching Carbon's useNormalizedInputProps)
  const effectiveDisabled = !readOnly && !!disabled;
  const hasError = !readOnly && !effectiveDisabled && !!error;
  const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

  // Build aria-describedby
  const ariaDescribedBy = React.useMemo(() => {
    const ids = [
      description && !hasError && !hasWarning ? descriptionId : null,
      hasError ? errorId : null,
      hasWarning ? warnId : null,
    ];
    return ids.filter(Boolean).join(" ") || undefined;
  }, [description, hasError, hasWarning, descriptionId, errorId, warnId]);

  // Build validation classes
  const validationClasses = React.useMemo(() => {
    return cn(
      hasError && "border-destructive focus-visible:ring-destructive",
      hasWarning && "border-warning focus-visible:ring-warning",
    );
  }, [hasError, hasWarning]);

  // Props to spread onto the form control
  const fieldProps = React.useMemo(
    () => ({
      id: fieldId,
      "aria-invalid": hasError || undefined,
      "aria-describedby": ariaDescribedBy,
      disabled: effectiveDisabled || undefined,
    }),
    [fieldId, hasError, ariaDescribedBy, effectiveDisabled],
  );

  return {
    fieldId,
    descriptionId,
    errorId,
    warnId,
    effectiveDisabled,
    hasError,
    hasWarning,
    ariaDescribedBy,
    validationClasses,
    fieldProps,
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generates a consistent set of IDs for form field elements.
 * Useful when you only need IDs without the full hook.
 */
export function useFormFieldIds(id?: string): FormFieldIds {
  const generatedId = React.useId();
  const fieldId = id || generatedId;

  return React.useMemo(
    () => ({
      fieldId,
      descriptionId: `${fieldId}-description`,
      errorId: `${fieldId}-error`,
      warnId: `${fieldId}-warn`,
    }),
    [fieldId],
  );
}

/**
 * Calculates effective form field states.
 * Useful when you only need state calculation without IDs.
 */
export function useFormFieldStates(
  error?: string,
  warn?: string,
  disabled?: boolean,
  readOnly?: boolean,
): FormFieldStates {
  return React.useMemo(() => {
    const effectiveDisabled = !readOnly && !!disabled;
    const hasError = !readOnly && !effectiveDisabled && !!error;
    const hasWarning = !readOnly && !hasError && !effectiveDisabled && !!warn;

    return {
      effectiveDisabled,
      hasError,
      hasWarning,
    };
  }, [error, warn, disabled, readOnly]);
}

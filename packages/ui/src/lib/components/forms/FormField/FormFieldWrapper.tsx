/**
 * FormFieldWrapper Component
 *
 * A shared wrapper component for form fields that handles:
 * - Label rendering (with required indicator and hideLabel support)
 * - Error/warning/description message rendering
 * - Proper accessibility attributes
 *
 * This eliminates duplication across Input, Textarea, Select, and other form components.
 *
 * @example
 * ```tsx
 * const { fieldId, errorId, ... } = useFormField({ error, warn, disabled, readOnly });
 *
 * return (
 *   <FormFieldWrapper
 *     fieldId={fieldId}
 *     label={label}
 *     error={error}
 *     errorId={errorId}
 *     required={required}
 *     disabled={effectiveDisabled}
 *   >
 *     <input ... />
 *   </FormFieldWrapper>
 * );
 * ```
 */

import * as React from "react";
import { cn } from "../../../utils/cn";

// ============================================================================
// Types
// ============================================================================

export interface FormFieldWrapperProps {
  /** The form control element(s) to wrap */
  children: React.ReactNode;
  /** ID of the form control (for label htmlFor) */
  fieldId: string;
  /** Label text */
  label?: string;
  /** Whether to visually hide the label (still accessible) */
  hideLabel?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Description text */
  description?: string;
  /** ID for the description element */
  descriptionId?: string;
  /** Error message */
  error?: string;
  /** ID for the error element */
  errorId?: string;
  /** Warning message */
  warn?: string;
  /** ID for the warning element */
  warnId?: string;
  /** Whether error state is active */
  hasError?: boolean;
  /** Whether warning state is active */
  hasWarning?: boolean;
  /** Additional wrapper class name */
  wrapperClassName?: string;
  /** Whether to skip wrapper when no label/description/error/warn */
  skipWrapper?: boolean;
  /** Content to render after messages (e.g., character count) */
  afterMessages?: React.ReactNode;
}

// ============================================================================
// Component Implementation
// ============================================================================

/**
 * Wrapper component for form fields with consistent label and message rendering.
 */
export const FormFieldWrapper = React.forwardRef<
  HTMLDivElement,
  FormFieldWrapperProps
>(
  (
    {
      children,
      fieldId,
      label,
      hideLabel = false,
      required = false,
      disabled = false,
      description,
      descriptionId,
      error,
      errorId,
      warn,
      warnId,
      hasError = false,
      hasWarning = false,
      wrapperClassName,
      skipWrapper = true,
      afterMessages,
    },
    ref,
  ) => {
    // Determine if we need the wrapper
    const needsWrapper =
      label || description || error || warn || afterMessages || !skipWrapper;

    // Label element
    const labelElement = label && (
      <label
        htmlFor={fieldId}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          hideLabel && "sr-only",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        {label}
        {required && (
          <span className="text-destructive ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );

    // Description element
    const descriptionElement = description && !hasError && !hasWarning && (
      <p id={descriptionId} className="text-sm text-muted-foreground">
        {description}
      </p>
    );

    // Error element
    const errorElement = hasError && error && (
      <p
        id={errorId}
        className="text-xs text-destructive"
        role="alert"
        aria-live="polite"
      >
        {error}
      </p>
    );

    // Warning element
    const warningElement = hasWarning && warn && !hasError && (
      <p
        id={warnId}
        className="text-xs text-warning"
        role="alert"
        aria-live="polite"
      >
        {warn}
      </p>
    );

    // Messages container
    const messagesElement = (descriptionElement ||
      errorElement ||
      warningElement ||
      afterMessages) && (
      <div className="flex items-center justify-between gap-2">
        <div>
          {descriptionElement}
          {errorElement}
          {warningElement}
        </div>
        {afterMessages}
      </div>
    );

    // Render without wrapper if not needed
    if (!needsWrapper) {
      return <>{children}</>;
    }

    return (
      <div ref={ref} className={cn("grid w-full gap-1.5", wrapperClassName)}>
        {labelElement}
        {children}
        {messagesElement}
      </div>
    );
  },
);

FormFieldWrapper.displayName = "FormFieldWrapper";

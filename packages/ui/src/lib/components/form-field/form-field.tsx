/**
 * Form Field Component
 *
 * A wrapper component for form elements that provides consistent
 * layout for labels, inputs, descriptions, and error messages.
 *
 * Design Principles:
 * - Consistent spacing and layout
 * - Clear error states
 * - Accessible form structure
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import type { FormFieldProps, FormGroupProps, FormProps } from './form-field.types';

// ============================================================================
// FormField Component
// ============================================================================

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      label,
      htmlFor,
      description,
      error,
      required,
      orientation = 'vertical',
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const hasError = !!error;

    return (
      <div
        ref={ref}
        className={cn(
          'grid gap-1.5',
          orientation === 'horizontal' && 'flex items-center gap-4 grid-cols-none',
          size === 'sm' && 'gap-1',
          size === 'lg' && 'gap-2',
          className
        )}
        {...props}
      >
        {label && (
          <label
            htmlFor={htmlFor}
            className={cn(
              'text-sm font-medium leading-none',
              orientation === 'horizontal' && 'shrink-0 w-24',
              hasError && 'text-destructive',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <div className={cn('grid gap-1.5', orientation === 'horizontal' && 'flex-1')}>
          {children}
          {description && !error && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          {error && (
            <p className="text-xs text-destructive font-medium" role="alert">{error}</p>
          )}
        </div>
      </div>
    );
  }
);

FormField.displayName = 'FormField';

// ============================================================================
// FormGroup Component
// ============================================================================

/**
 * Groups multiple form fields with a common legend.
 */
const FormGroup = React.forwardRef<HTMLFieldSetElement, FormGroupProps>(
  ({ className, legend, description, children, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        className={cn('space-y-4', className)}
        {...props}
      >
        {(legend || description) && (
          <div className="space-y-1">
            {legend && (
              <legend className="text-sm font-semibold">{legend}</legend>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </fieldset>
    );
  }
);

FormGroup.displayName = 'FormGroup';

// ============================================================================
// Form Component
// ============================================================================

/**
 * A form wrapper with consistent styling.
 */
const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn(
          'space-y-6',
          variant === 'compact' && 'space-y-4',
          variant === 'spacious' && 'space-y-8',
          className
        )}
        {...props}
      />
    );
  }
);

Form.displayName = 'Form';

// ============================================================================
// Exports
// ============================================================================

export { Form, FormField, FormGroup };

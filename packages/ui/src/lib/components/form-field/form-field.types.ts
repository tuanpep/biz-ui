/**
 * Form Field component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';

/**
 * Form field size type.
 */
export type FormFieldSize = 'sm' | 'md' | 'lg';

/**
 * Form field orientation type.
 */
export type FormFieldOrientation = 'vertical' | 'horizontal';

/**
 * Form variant type.
 */
export type FormVariant = 'default' | 'compact' | 'spacious';

/**
 * FormField component props.
 */
export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label?: string;
  /** HTML for attribute (links label to input) */
  htmlFor?: string;
  /** Description text */
  description?: string;
  /** Error message */
  error?: string;
  /** Required field indicator */
  required?: boolean;
  /** Orientation of label and input */
  orientation?: FormFieldOrientation;
  /** Size variant */
  size?: FormFieldSize;
}

/**
 * FormGroup component props.
 */
export interface FormGroupProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  /** Legend text for the group */
  legend?: string;
  /** Description for the group */
  description?: string;
}

/**
 * Form component props.
 */
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** Form layout variant */
  variant?: FormVariant;
}

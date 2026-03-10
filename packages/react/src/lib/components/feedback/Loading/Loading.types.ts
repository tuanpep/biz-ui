/**
 * Loading component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Spinner size types.
 */
export type SpinnerSize = VariantProps<
  typeof import("./Loading.variants").spinnerVariants
>["size"];

/**
 * Loading overlay variant types.
 */
export type LoadingOverlayVariant = VariantProps<
  typeof import("./Loading.variants").loadingOverlayVariants
>["variant"];

/**
 * Inline loading status types.
 */
export type InlineLoadingStatus = "inactive" | "active" | "finished" | "error";

/**
 * Spinner component props.
 */
export interface SpinnerProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof import("./Loading.variants").spinnerVariants> {
  /** Accessible label for screen readers */
  label?: string;
}

/**
 * LoadingOverlay component props.
 */
export interface LoadingOverlayProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof import("./Loading.variants").loadingOverlayVariants> {
  /** Loading spinner size */
  size?: SpinnerSize;
  /** Text to display below spinner */
  text?: string;
  /** Show overlay (controlled) */
  show?: boolean;
}

/**
 * InlineLoading component props.
 */
export interface InlineLoadingProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof import("./Loading.variants").inlineLoadingVariants> {
  /** Loading status */
  status?: InlineLoadingStatus;
  /** Status text to display */
  text?: string;
  /** Show loading spinner */
  showSpinner?: boolean;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Success icon when finished */
  successIcon?: React.ReactNode;
  /** Error icon when error */
  errorIcon?: React.ReactNode;
}

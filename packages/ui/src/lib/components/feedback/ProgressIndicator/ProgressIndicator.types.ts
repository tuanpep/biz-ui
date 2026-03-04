/**
 * ProgressIndicator component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * ProgressIndicator orientation type.
 */
export type ProgressIndicatorOrientation = VariantProps<
  typeof import("./ProgressIndicator.variants").stepProgressVariants
>["orientation"];

/**
 * ProgressIndicator size type.
 */
export type ProgressIndicatorSize = VariantProps<
  typeof import("./ProgressIndicator.variants").stepProgressVariants
>["size"];

/**
 * Progress step status type.
 */
export type ProgressStepStatus = "pending" | "current" | "completed";

/**
 * ProgressIndicator component props.
 */
export interface ProgressIndicatorProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "size" | "onChange"
> {
  /** Orientation of the indicator */
  orientation?: ProgressIndicatorOrientation;
  /** Size variant */
  size?: ProgressIndicatorSize;
  /** Current step (1-indexed) */
  currentStep: number;
  /** Total number of steps */
  totalSteps: number;
  /** Callback when step changes */
  onChange?: (step: number) => void;
  /** Show step labels */
  showLabels?: boolean;
  /** Position of labels (for vertical orientation) */
  labelPosition?: "start" | "end";
}

/**
 * ProgressStep component props.
 */
export interface ProgressStepProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "size"
> {
  /** Step number */
  step: number;
  /** Step label */
  label?: React.ReactNode;
  /** Step description */
  description?: React.ReactNode;
  /** Step status */
  status?: ProgressStepStatus;
  /** Optional icon for step */
  icon?: React.ReactNode;
  /** Show step number */
  showStepNumber?: boolean;
  /** Show label */
  showLabel?: boolean;
  /** Size variant */
  size?: ProgressIndicatorSize;
}

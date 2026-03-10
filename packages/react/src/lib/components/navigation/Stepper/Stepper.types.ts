/**
 * Stepper component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import type { stepperVariants } from "./Stepper.variants";

/**
 * Stepper step definition.
 */
export interface StepperStep {
  /** Step label */
  label: string;
  /** Optional description */
  description?: string;
  /** Whether the step is optional */
  optional?: boolean;
}

/**
 * Stepper orientation variant.
 */
export type StepperOrientation = VariantProps<
  typeof stepperVariants
>["orientation"];

/**
 * Stepper size variant.
 */
export type StepperSize = "sm" | "md";

/**
 * Stepper component props.
 */
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of step definitions */
  steps: StepperStep[];
  /** Current active step (0-indexed) */
  activeStep: number;
  /** Orientation */
  orientation?: StepperOrientation;
  /** Size variant */
  size?: StepperSize;
}

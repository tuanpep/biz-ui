/**
 * Stepper Component Module
 *
 * Following Carbon's component export pattern:
 * - Main components as named exports
 * - Type exports
 */

// Main components
export { Stepper } from "./Stepper";

// Variants
export {
  stepperVariants,
  stepperStepVariants,
  stepperIndicatorVariants,
  stepperLabelVariants,
  stepperDescriptionVariants,
  stepperConnectorVariants,
} from "./Stepper.variants";

// Types
export type {
  StepperProps,
  StepperStep,
  StepperOrientation,
  StepperSize,
} from "./Stepper.types";

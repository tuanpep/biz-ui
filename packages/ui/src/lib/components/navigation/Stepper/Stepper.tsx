/**
 * Stepper Component
 *
 * Multi-step wizard / progress indicator showing current step
 * in a workflow. Supports horizontal and vertical orientations.
 */

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../../utils/cn";
import {
  stepperVariants,
  stepperStepVariants,
  stepperIndicatorVariants,
  stepperLabelVariants,
  stepperDescriptionVariants,
  stepperConnectorVariants,
} from "./Stepper.variants";
import type { StepperProps } from "./Stepper.types";

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      steps,
      activeStep,
      orientation = "horizontal",
      size = "md",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(stepperVariants({ orientation }), className)}
        role="list"
        aria-label="Progress steps"
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={index}
              className={cn(stepperStepVariants({ orientation, isLast }))}
              role="listitem"
              aria-current={isActive ? "step" : undefined}
            >
              {/* Step indicator */}
              <div
                className={cn(
                  "flex flex-col items-center",
                  orientation === "vertical" && "mr-3",
                )}
              >
                <div
                  className={cn(
                    stepperIndicatorVariants({
                      size,
                      state: isCompleted
                        ? "completed"
                        : isActive
                          ? "active"
                          : "pending",
                    }),
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Vertical connector */}
                {!isLast && orientation === "vertical" && (
                  <div
                    className={cn(
                      stepperConnectorVariants({
                        orientation: "vertical",
                        state: isCompleted ? "completed" : "pending",
                      }),
                    )}
                  />
                )}
              </div>

              {/* Step content */}
              <div
                className={cn(
                  "flex flex-col",
                  orientation === "horizontal" ? "ml-2" : "mt-0",
                )}
              >
                <span className={cn(stepperLabelVariants({ size, isActive }))}>
                  {step.label}
                </span>
                {step.description && (
                  <span className={cn(stepperDescriptionVariants({ size }))}>
                    {step.description}
                  </span>
                )}
                {step.optional && (
                  <span className="text-xs text-muted-foreground italic">
                    Optional
                  </span>
                )}
              </div>

              {/* Horizontal connector */}
              {!isLast && orientation === "horizontal" && (
                <div
                  className={cn(
                    stepperConnectorVariants({
                      orientation: "horizontal",
                      state: isCompleted ? "completed" : "pending",
                    }),
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  },
);
Stepper.displayName = "Stepper";

export { Stepper };
export type {
  StepperProps,
  StepperStep,
  StepperOrientation,
  StepperSize,
} from "./Stepper.types";
export {
  stepperVariants,
  stepperStepVariants,
  stepperIndicatorVariants,
  stepperLabelVariants,
  stepperDescriptionVariants,
  stepperConnectorVariants,
} from "./Stepper.variants";

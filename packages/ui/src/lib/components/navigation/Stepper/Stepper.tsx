/**
 * Stepper Component
 *
 * Multi-step wizard / progress indicator showing current step
 * in a workflow. Supports horizontal and vertical orientations.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface StepperStep {
  /** Step label */
  label: string;
  /** Optional description */
  description?: string;
  /** Whether the step is optional */
  optional?: boolean;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of step definitions */
  steps: StepperStep[];
  /** Current active step (0-indexed) */
  activeStep: number;
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Size variant */
  size?: "sm" | "md";
}

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
        className={cn(
          orientation === "horizontal"
            ? "flex items-start w-full"
            : "flex flex-col",
          className,
        )}
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
              className={cn(
                orientation === "horizontal"
                  ? "flex items-center flex-1"
                  : "flex items-start",
                isLast && orientation === "horizontal" && "flex-none",
              )}
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
                    "flex items-center justify-center border-2 font-medium transition-colors",
                    size === "sm" ? "h-6 w-6 text-xs" : "h-8 w-8 text-sm",
                    isCompleted &&
                      "border-[var(--interactive-01)] bg-[var(--interactive-01)] text-white",
                    isActive &&
                      "border-[var(--interactive-01)] text-[var(--interactive-01)]",
                    !isCompleted &&
                      !isActive &&
                      "border-border text-muted-foreground",
                  )}
                >
                  {isCompleted ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Vertical connector */}
                {!isLast && orientation === "vertical" && (
                  <div
                    className={cn(
                      "w-0.5 min-h-[2rem] my-1",
                      isCompleted ? "bg-[var(--interactive-01)]" : "bg-border",
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
                <span
                  className={cn(
                    "font-medium leading-tight",
                    size === "sm" ? "text-xs" : "text-sm",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {step.label}
                </span>
                {step.description && (
                  <span
                    className={cn(
                      "text-muted-foreground mt-0.5",
                      size === "sm" ? "text-[10px]" : "text-xs",
                    )}
                  >
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
                    "flex-1 h-0.5 mx-3 mt-4 min-w-[2rem]",
                    isCompleted ? "bg-[var(--interactive-01)]" : "bg-border",
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

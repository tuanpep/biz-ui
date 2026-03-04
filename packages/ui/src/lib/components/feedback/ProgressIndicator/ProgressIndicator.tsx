/**
 * ProgressIndicator Component
 *
 * Biz UI aligned step progress indicator with:
 * - Vertical step display
 * - Horizontal orientation
 * - Multiple sizes
 * - Labels for descriptions
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { Check } from "lucide-react";
import {
  stepProgressVariants,
  progressStepVariants,
  iconSizes,
} from "./ProgressIndicator.variants";
import type {
  ProgressIndicatorProps,
  ProgressStepProps,
} from "./ProgressIndicator.types";

// ============================================================================
// ProgressIndicator Component
// ============================================================================

const ProgressIndicator = React.forwardRef<
  HTMLDivElement,
  ProgressIndicatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      size = "md",
      currentStep,
      totalSteps,
      onChange,
      showLabels = false,
      ...props
    },
    ref,
  ) => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      const status: "pending" | "current" | "completed" =
        i < currentStep
          ? "completed"
          : i === currentStep
            ? "current"
            : "pending";
      steps.push({
        step: i,
        status,
        label: `Step ${i}`,
      });
    }

    return (
      <div
        ref={ref}
        className={cn(stepProgressVariants({ orientation, size }), className)}
        role="navigation"
        aria-label={`Progress: ${currentStep} of ${totalSteps}`}
        {...props}
      >
        {steps.map((step, index) => (
          <ProgressStep
            key={index}
            step={step.step}
            status={step.status}
            label={step.label}
            onClick={() => onChange?.(index + 1)}
            showLabel={showLabels}
            size={size}
          />
        ))}
      </div>
    );
  },
);

ProgressIndicator.displayName = "ProgressIndicator";

// ============================================================================
// ProgressStep Component
// ============================================================================

const ProgressStep = React.forwardRef<HTMLDivElement, ProgressStepProps>(
  (
    {
      className,
      size = "md",
      status = "pending",
      step,
      label,
      description,
      showLabel = true,
      onClick,
      ...props
    },
    ref,
  ) => {
    const isCompleted = status === "completed";
    const isCurrent = status === "current";

    const stepNumberSize = {
      sm: "h-5 w-5 text-xs",
      md: "h-6 w-6 text-sm",
      lg: "h-7 w-7 text-base",
    }[size as NonNullable<typeof size>];

    return (
      <div
        ref={ref}
        className={cn(progressStepVariants({ status, size }), className)}
        aria-current={isCurrent ? "step" : undefined}
        role={isCurrent ? "step" : undefined}
        tabIndex={isCurrent || isCompleted ? 0 : undefined}
        onClick={onClick}
        {...props}
      >
        {/* Step indicator circle */}
        <div
          className={cn(
            "rounded-full flex items-center justify-center font-medium",
            stepNumberSize,
            isCompleted && "bg-success text-success-foreground",
            isCurrent && "bg-primary text-white",
            !isCompleted && !isCurrent && "border border-border",
          )}
        >
          {isCompleted ? (
            <Check
              className={iconSizes[size as keyof typeof iconSizes]}
              aria-hidden="true"
            />
          ) : (
            <span>{step}</span>
          )}
        </div>

        {/* Label */}
        {showLabel && label && (
          <div className="flex-1">
            <span
              className={cn(
                "font-medium",
                iconSizes[size as keyof typeof iconSizes],
              )}
            >
              {label}
            </span>
            {description && (
              <span
                className={cn(
                  "text-muted-foreground",
                  size === "sm" ? "text-xs" : "text-sm",
                )}
              >
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
);

ProgressStep.displayName = "ProgressStep";

// ============================================================================
// Exports
// ============================================================================

export { ProgressIndicator, ProgressStep };

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { Check } from 'lucide-react';

/**
 * ProgressIndicator Component
 *
 * Biz UI aligned step progress indicator with:
 * - Vertical step display
 * - Horizontal orientation
 * - Multiple sizes
 * - Labels for descriptions
 */

const stepProgressVariants = cva(
  'flex',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
      size: {
        sm: 'gap-1',
        md: 'gap-2',
        lg: 'gap-3',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
    },
  }
);

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
} as const;

export interface ProgressIndicatorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'> {
  /** Orientation of the indicator */
  orientation?: 'horizontal' | 'vertical';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Current step (1-indexed) */
  currentStep: number;
  /** Total number of steps */
  totalSteps: number;
  /** Callback when step changes */
  onChange?: (step: number) => void;
  /** Show step labels */
  showLabels?: boolean;
  /** Position of labels (for vertical orientation) */
  labelPosition?: 'start' | 'end';
}

const ProgressIndicator = React.forwardRef<HTMLDivElement, ProgressIndicatorProps>(
  (
    {
      className,
      orientation = 'horizontal',
      size = 'md',
      currentStep,
      totalSteps,
      onChange,
      showLabels = false,
      labelPosition = 'end',
      ...props
    },
    ref
  ) => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      const status: 'pending' | 'current' | 'completed' =
        i < currentStep ? 'completed' : i === currentStep ? 'current' : 'pending';
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
  }
);

ProgressIndicator.displayName = 'ProgressIndicator';

// ProgressStep component
export interface ProgressStepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Step number */
  step: number;
  /** Step label */
  label?: React.ReactNode;
  /** Step description */
  description?: React.ReactNode;
  /** Step status */
  status?: 'pending' | 'current' | 'completed';
  /** Optional icon for step */
  icon?: React.ReactNode;
  /** Show step number */
  showStepNumber?: boolean;
  /** Show label */
  showLabel?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

const progressStepVariants = cva(
  'flex items-center gap-2',
  {
    variants: {
      status: {
        pending: 'text-muted-foreground',
        current: 'text-interactive-01',
        completed: 'text-success',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      status: 'pending',
      size: 'md',
    },
  }
);

const ProgressStep = React.forwardRef<HTMLDivElement, ProgressStepProps>(
  (
    {
      className,
      size = 'md',
      status = 'pending',
      step,
      label,
      description,
      icon,
      showStepNumber = true,
      showLabel = true,
      onClick,
      ...props
    },
    ref
  ) => {
    const isCompleted = status === 'completed';
    const isCurrent = status === 'current';

    const stepNumberSize = {
      sm: 'h-5 w-5 text-xs',
      md: 'h-6 w-6 text-sm',
      lg: 'h-7 w-7 text-base',
    }[size];

    return (
      <div
        ref={ref}
        className={cn(progressStepVariants({ status, size }), className)}
        aria-current={isCurrent ? 'step' : undefined}
        role={isCurrent ? 'step' : undefined}
        tabIndex={isCurrent || isCompleted ? 0 : undefined}
        onClick={onClick}
        {...props}
      >
        {/* Step indicator circle */}
        <div
          className={cn(
            'rounded-full flex items-center justify-center font-medium',
            stepNumberSize,
            isCompleted && 'bg-success text-success-foreground',
            isCurrent && 'bg-interactive-01 text-white',
            !isCompleted && !isCurrent && 'border border-border'
          )}
        >
          {isCompleted ? (
            <Check className={iconSizes[size]} aria-hidden="true" />
          ) : (
            <span>{step}</span>
          )}
        </div>

        {/* Label */}
        {showLabel && label && (
          <div className="flex-1">
            <span className={cn('font-medium', iconSizes[size])}>{label}</span>
            {description && (
              <span className={cn('text-muted-foreground', size === 'sm' ? 'text-xs' : 'text-sm')}>
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

ProgressStep.displayName = 'ProgressStep';

export { ProgressIndicator, ProgressStep, stepProgressVariants };

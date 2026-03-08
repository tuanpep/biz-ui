/**
 * Stepper variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Stepper container variant styles.
 */
export const stepperVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "flex items-start w-full",
      vertical: "flex flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

/**
 * Stepper step container variant styles.
 */
export const stepperStepVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "flex items-center flex-1",
      vertical: "flex items-start",
    },
    isLast: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      isLast: true,
      className: "flex-none",
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
    isLast: false,
  },
});

/**
 * Stepper indicator (circle) variant styles.
 */
export const stepperIndicatorVariants = cva(
  "flex items-center justify-center border-2 font-medium transition-colors",
  {
    variants: {
      size: {
        sm: "h-6 w-6 text-xs",
        md: "h-8 w-8 text-sm",
      },
      state: {
        completed: "border-primary bg-primary text-primary-foreground",
        active: "border-primary text-primary",
        pending: "border-border text-muted-foreground",
      },
    },
    defaultVariants: {
      size: "md",
      state: "pending",
    },
  },
);

/**
 * Stepper label variant styles.
 */
export const stepperLabelVariants = cva("font-medium leading-tight", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
    },
    isActive: {
      true: "text-foreground",
      false: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "md",
    isActive: false,
  },
});

/**
 * Stepper description variant styles.
 */
export const stepperDescriptionVariants = cva("text-muted-foreground mt-0.5", {
  variants: {
    size: {
      sm: "text-[10px]",
      md: "text-xs",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * Stepper connector variant styles.
 */
export const stepperConnectorVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "flex-1 h-0.5 mx-3 mt-4 min-w-[2rem]",
      vertical: "w-0.5 min-h-[2rem] my-1",
    },
    state: {
      completed: "bg-primary",
      pending: "bg-border",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    state: "pending",
  },
});

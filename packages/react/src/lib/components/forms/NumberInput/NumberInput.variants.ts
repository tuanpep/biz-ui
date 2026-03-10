/**
 * NumberInput variants using CVA (Class Variance Authority).
 * Following Carbon's NumberInput patterns with enhanced validation states.
 */

import { cva } from "class-variance-authority";

/**
 * NumberInput wrapper variants.
 */
export const numberInputVariants = cva("flex flex-col gap-1.5", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

/**
 * NumberInput input variants.
 */
export const numberInputInputVariants = cva(
  "flex w-full rounded-md border bg-background text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      variant: {
        default: "border-border",
        inline:
          "border-0 border-b border-border rounded-none bg-transparent px-0 hover:border-primary focus-visible:ring-0 focus-visible:border-primary",
        "inline-filled":
          "border-0 border-b border-border rounded-none bg-background px-0 hover:border-primary focus-visible:ring-0 focus-visible:border-primary",
      },
      size: {
        sm: "h-8 px-3 py-1.5 text-xs",
        md: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-4 py-3 text-base",
      },
      error: {
        true: "border-destructive focus-visible:ring-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      error: false,
    },
  },
);

/**
 * NumberInput steppers variants.
 */
export const numberInputStepperVariants = cva(
  "flex flex-col border-l border-border",
  {
    variants: {
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * NumberInput stepper button variants.
 */
export const numberInputStepperButtonVariants = cva(
  "flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-4 w-6",
        md: "h-5 w-8",
        lg: "h-6 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * NumberInput skeleton variants.
 */
export const numberInputSkeletonVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * NumberInput skeleton label variants.
 */
export const numberInputSkeletonLabelVariants = cva(
  "animate-pulse rounded bg-muted",
  {
    variants: {
      size: {
        sm: "h-3 w-16",
        md: "h-4 w-20",
        lg: "h-4 w-24",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

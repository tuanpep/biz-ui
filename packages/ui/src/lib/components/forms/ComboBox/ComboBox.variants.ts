/**
 * ComboBox variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * ComboBox root variant styles.
 */
export const comboBoxVariants = cva("relative", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * ComboBox input variant styles.
 */
export const comboBoxInputVariants = cva(
  "flex w-full border rounded-md bg-background px-3 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
      error: {
        true: "border-destructive focus-visible:ring-destructive",
        false: "border-input",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

/**
 * ComboBox menu variant styles.
 */
export const comboBoxMenuVariants = cva(
  "absolute z-50 w-full mt-1 bg-popover border rounded-md shadow-lg overflow-hidden",
  {
    variants: {
      size: {
        sm: "max-h-48",
        md: "max-h-60",
        lg: "max-h-72",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * ComboBox item variant styles.
 */
export const comboBoxItemVariants = cva(
  "flex items-center justify-between px-3 py-2 cursor-pointer transition-colors",
  {
    variants: {
      selected: {
        true: "bg-primary/10 text-primary",
        false: "hover:bg-muted",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
      highlighted: {
        true: "bg-muted",
        false: "",
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
      highlighted: false,
    },
  },
);

/**
 * ComboBox skeleton variant styles.
 */
export const comboBoxSkeletonVariants = cva(
  "animate-pulse bg-muted rounded-md",
  {
    variants: {
      size: {
        sm: "h-8 w-full",
        md: "h-10 w-full",
        lg: "h-12 w-full",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * ComboBox skeleton label variant styles.
 */
export const comboBoxSkeletonLabelVariants = cva(
  "animate-pulse bg-muted rounded",
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

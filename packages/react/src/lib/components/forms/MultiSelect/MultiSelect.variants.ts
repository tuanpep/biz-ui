/**
 * MultiSelect variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * MultiSelect container variants.
 */
export const multiSelectVariants = cva("relative", {
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
 * MultiSelect trigger variants.
 */
export const multiSelectTriggerVariants = cva(
  "flex items-center justify-between w-full border rounded-md bg-background text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-8 px-2",
        md: "h-10 px-3",
        lg: "h-12 px-4",
      },
      error: {
        true: "border-destructive",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

/**
 * MultiSelect menu variants.
 */
export const multiSelectMenuVariants = cva(
  "absolute z-50 mt-1 w-full bg-popover border rounded-md shadow-lg overflow-hidden",
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
 * MultiSelect item variants.
 */
export const multiSelectItemVariants = cva(
  "flex items-center px-3 py-2 cursor-pointer transition-colors rounded-sm",
  {
    variants: {
      selected: {
        true: "bg-primary/10 text-primary",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  },
);

/**
 * MultiSelect tag variants.
 */
export const multiSelectTagVariants = cva(
  "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-sm font-medium transition-colors",
  {
    variants: {
      size: {
        sm: "text-xs px-1.5 py-0.5",
        md: "text-sm px-2 py-1",
        lg: "text-base px-2.5 py-1",
      },
      selected: {
        true: "bg-primary/10 text-primary",
        false: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      size: "md",
      selected: false,
    },
  },
);

/**
 * MultiSelect skeleton variants.
 */
export const multiSelectSkeletonVariants = cva(
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
 * MultiSelect skeleton label variants.
 */
export const multiSelectSkeletonLabelVariants = cva(
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

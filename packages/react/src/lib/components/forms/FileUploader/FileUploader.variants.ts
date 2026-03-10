/**
 * FileUploader variants using CVA (Class Variance Authority).
 * Following Carbon's FileUploader patterns with enhanced validation states.
 */

import { cva } from "class-variance-authority";

/**
 * FileUploader wrapper variants.
 */
export const fileUploaderVariants = cva("flex flex-col gap-1.5", {
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
 * FileUploader button variants.
 */
export const fileUploaderButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        tertiary: "bg-transparent text-foreground hover:bg-muted",
        ghost: "bg-transparent text-foreground hover:bg-muted",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  },
);

/**
 * FileUploader drop container variants.
 */
export const fileUploaderDropContainerVariants = cva(
  "flex flex-col items-center justify-center rounded-md border-2 border-dashed border-border bg-muted/30 transition-colors cursor-pointer hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      size: {
        sm: "p-4 min-h-[80px]",
        md: "p-6 min-h-[100px]",
        lg: "p-8 min-h-[120px]",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
      active: {
        true: "border-primary bg-primary/10",
      },
      invalid: {
        true: "border-destructive",
      },
      variant: {
        default: "",
        compact: "p-3 min-h-[60px]",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      active: false,
      invalid: false,
      variant: "default",
    },
  },
);

/**
 * FileUploader item variants.
 */
export const fileUploaderItemVariants = cva(
  "flex items-center justify-between rounded-md bg-background border border-border px-3 py-2 transition-colors",
  {
    variants: {
      size: {
        sm: "py-1.5 text-xs",
        md: "py-2 text-sm",
        lg: "py-2.5 text-base",
      },
      status: {
        uploading: "border-primary",
        complete: "border-success",
        editing: "border-primary",
        error: "border-destructive bg-destructive/5",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
      readOnly: {
        true: "cursor-default",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
      readOnly: false,
    },
  },
);

/**
 * FileUploader item icon variants.
 */
export const fileUploaderItemIconVariants = cva("flex-shrink-0", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    status: {
      uploading: "text-primary animate-spin",
      complete: "text-success",
      editing: "text-primary",
      error: "text-destructive",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

/**
 * FileUploader skeleton variants.
 */
export const fileUploaderSkeletonVariants = cva(
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
 * FileUploader skeleton label variants.
 */
export const fileUploaderSkeletonLabelVariants = cva(
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

/**
 * FileUploader skeleton drop container variants.
 */
export const fileUploaderSkeletonDropContainerVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      size: {
        sm: "h-20",
        md: "h-24",
        lg: "h-28",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * FileUploader skeleton item variants.
 */
export const fileUploaderSkeletonItemVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      size: {
        sm: "h-6",
        md: "h-8",
        lg: "h-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

import { cva } from "class-variance-authority";

export const emptyStateVariants = cva(
  "flex flex-col items-center justify-center text-center",
  {
    variants: {
      size: {
        sm: "py-8 px-4",
        md: "py-12 px-6",
        lg: "py-16 px-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const emptyStateIconVariants = cva(
  "text-muted-foreground [&>svg]:h-10 [&>svg]:w-10",
  {
    variants: {
      size: {
        sm: "mb-2",
        md: "mb-3",
        lg: "mb-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const emptyStateTitleVariants = cva("font-medium text-foreground", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const emptyStateDescVariants = cva(
  "text-muted-foreground mt-1 max-w-sm",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

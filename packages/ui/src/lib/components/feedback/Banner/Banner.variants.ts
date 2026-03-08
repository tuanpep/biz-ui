import { cva } from "class-variance-authority";

export const bannerVariants = cva(
  "relative flex items-center w-full px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        info: "bg-info-muted text-foreground border-b border-info",
        success: "bg-success-muted text-foreground border-b border-success",
        warning: "bg-warning-muted text-foreground border-b border-warning",
        error:
          "bg-destructive-muted text-foreground border-b border-destructive",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

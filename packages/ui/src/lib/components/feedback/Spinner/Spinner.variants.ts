import { cva } from "class-variance-authority";

export const spinnerVariants = cva("", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
    color: {
      default: "text-muted-foreground",
      primary: "text-primary",
      white: "text-white",
      current: "text-current",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
});

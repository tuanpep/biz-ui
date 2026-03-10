/**
 * Button variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Button variant styles.
 * Biz UI aligned with clear visual feedback on hover/active states.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-2 ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-0 hover:bg-primary/90",
        // Biz UI-aligned aliases
        primary: "bg-primary text-white border-0 hover:bg-primary-hover",
        secondary: "bg-secondary text-white border-0 hover:bg-secondary-hover",
        tertiary:
          "bg-transparent text-primary border-0 hover:bg-primary-subtle",
        destructive:
          "bg-destructive text-destructive-foreground border-0 hover:bg-destructive/90",
        outline:
          "border border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/50",
        ghost:
          "border border-transparent bg-transparent text-foreground hover:bg-muted hover:border-border",
        link: "border-0 text-primary underline-offset-4 hover:underline",
        success:
          "bg-success text-success-foreground border-0 hover:bg-success/90",
        warning:
          "bg-warning text-warning-foreground border-0 hover:bg-warning/90",
      },
      size: {
        md: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs", // 32px - Biz UI small
        lg: "h-12 px-6 text-base", // 48px - Biz UI large
        xl: "h-14 px-8 text-lg", // 56px - Biz UI extra large
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

/**
 * Button skeleton variant styles.
 */
export const buttonSkeletonVariants = cva("animate-pulse bg-muted rounded-md", {
  variants: {
    size: {
      md: "h-10 w-24",
      sm: "h-8 w-20",
      lg: "h-12 w-32",
      xl: "h-14 w-40",
      icon: "h-10 w-10",
    },
    hasIcon: {
      true: "gap-2",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    hasIcon: false,
  },
});

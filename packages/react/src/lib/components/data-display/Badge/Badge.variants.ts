/**
 * Badge variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Badge variant styles.
 * Semantic colors for different states.
 */
export const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-0",
        secondary: "bg-secondary text-secondary-foreground border-0",
        destructive: "bg-destructive text-destructive-foreground border-0",
        outline: "bg-transparent text-foreground border-0",
        success: "bg-success text-success-foreground border-0",
        warning: "bg-warning text-warning-foreground border-0",
        info: "bg-info-muted text-info border-0",
        accent: "bg-accent text-accent-foreground border-0",
      },
      size: {
        sm: "px-2 py-0 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

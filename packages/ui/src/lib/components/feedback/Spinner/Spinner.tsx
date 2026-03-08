/**
 * Spinner Component
 *
 * Standalone loading spinner with size and color variants.
 * Unlike the Loading component which provides text + spinner,
 * Spinner is a pure visual indicator.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../../utils/cn";

const spinnerVariants = cva("", {
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

export interface SpinnerProps
  extends
    Omit<React.SVGAttributes<SVGSVGElement>, "color">,
    VariantProps<typeof spinnerVariants> {
  /** Accessible label */
  label?: string;
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, color, label = "Loading", ...props }, ref) => (
    <Loader2
      ref={ref}
      className={cn(
        "animate-spin",
        spinnerVariants({ size, color }),
        className,
      )}
      role="status"
      aria-label={label}
      {...props}
    />
  ),
);
Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };

/**
 * Spinner Component
 *
 * Standalone loading spinner with size and color variants.
 * Unlike the Loading component which provides text + spinner,
 * Spinner is a pure visual indicator.
 */

import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../../utils/cn";
import { spinnerVariants } from "./Spinner.variants";
import type { SpinnerProps } from "./Spinner.types";

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
export type { SpinnerProps } from "./Spinner.types";

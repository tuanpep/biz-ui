import type { SVGAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { spinnerVariants } from "./Spinner.variants";

export interface SpinnerProps
  extends
    Omit<SVGAttributes<SVGSVGElement>, "color">,
    VariantProps<typeof spinnerVariants> {
  /** Accessible label */
  label?: string;
}

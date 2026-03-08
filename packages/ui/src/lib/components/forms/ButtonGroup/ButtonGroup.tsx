/**
 * ButtonGroup Component
 *
 * Groups related buttons together with consistent spacing and optional
 * attached styling (connected buttons).
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { buttonGroupVariants } from "./ButtonGroup.variants";
import type { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, variant, orientation, role = "group", ...props }, ref) => (
    <div
      ref={ref}
      role={role}
      className={cn(buttonGroupVariants({ variant, orientation }), className)}
      {...props}
    />
  ),
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
export { buttonGroupVariants } from "./ButtonGroup.variants";
export type {
  ButtonGroupProps,
  ButtonGroupVariant,
  ButtonGroupOrientation,
} from "./ButtonGroup.types";

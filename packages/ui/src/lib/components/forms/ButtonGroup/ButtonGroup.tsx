/**
 * ButtonGroup Component
 *
 * Groups related buttons together with consistent spacing and optional
 * attached styling (connected buttons).
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const buttonGroupVariants = cva("inline-flex", {
  variants: {
    /** Visual style of the button group */
    variant: {
      /** Buttons are spaced apart */
      spaced: "gap-2",
      /** Buttons are attached/connected together */
      attached:
        "[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child)]:-ml-px",
    },
    /** Orientation of the button group */
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  compoundVariants: [
    {
      variant: "attached",
      orientation: "vertical",
      className:
        "[&>*:not(:first-child):not(:last-child)]:rounded-none [&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:ml-0",
    },
  ],
  defaultVariants: {
    variant: "spaced",
    orientation: "horizontal",
  },
});

export interface ButtonGroupProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

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

export { ButtonGroup, buttonGroupVariants };

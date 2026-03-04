/**
 * Center Component
 *
 * Centers content horizontally and/or vertically.
 * A convenience layout primitive that reduces flex boilerplate.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const centerVariants = cva("flex items-center justify-center", {
  variants: {
    /** When true, takes full height of parent */
    fullHeight: {
      true: "h-full",
      false: "",
    },
    /** When true, centers inline (inline-flex) instead of block (flex) */
    inline: {
      true: "inline-flex",
      false: "",
    },
  },
  defaultVariants: {
    fullHeight: false,
    inline: false,
  },
});

export interface CenterProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof centerVariants> {}

const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ className, fullHeight, inline, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(centerVariants({ fullHeight, inline }), className)}
      {...props}
    />
  ),
);
Center.displayName = "Center";

export { Center, centerVariants };

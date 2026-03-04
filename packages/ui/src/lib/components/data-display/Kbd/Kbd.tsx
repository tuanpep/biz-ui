/**
 * Kbd Component
 *
 * Keyboard shortcut indicator. Displays keyboard key combinations
 * in a visually distinct style.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const kbdVariants = cva(
  "inline-flex items-center justify-center font-mono border border-border bg-muted text-muted-foreground",
  {
    variants: {
      size: {
        sm: "h-5 min-w-[1.25rem] px-1 text-[10px]",
        md: "h-6 min-w-[1.5rem] px-1.5 text-xs",
        lg: "h-7 min-w-[1.75rem] px-2 text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(kbdVariants({ size }), className)}
      {...props}
    />
  ),
);
Kbd.displayName = "Kbd";

export { Kbd, kbdVariants };

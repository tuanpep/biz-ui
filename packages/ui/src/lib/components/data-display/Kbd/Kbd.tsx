/**
 * Kbd Component
 *
 * Keyboard shortcut indicator. Displays keyboard key combinations
 * in a visually distinct style.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { kbdVariants } from "./Kbd.variants";
import type { KbdProps } from "./Kbd.types";

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

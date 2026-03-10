/**
 * Kbd Component Variants
 *
 * Style variants for keyboard shortcut indicators.
 */

import { cva } from "class-variance-authority";

export const kbdVariants = cva(
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

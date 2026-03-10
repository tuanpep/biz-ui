/**
 * Textarea variants using CVA.
 */

import { cva } from "class-variance-authority";

/**
 * Textarea variant styles.
 */
export const textareaVariants = cva(
  "flex w-full border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      variant: {
        default: "border-input",
        filled: "border-transparent bg-muted",
        unstyled: "border-none bg-transparent shadow-none focus-visible:ring-0",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
      size: {
        sm: "min-h-[60px] text-xs",
        md: "min-h-[80px] text-sm",
        lg: "min-h-[100px] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      resize: "vertical",
      size: "md",
    },
  },
);

/**
 * Textarea skeleton variant styles.
 */
export const textareaSkeletonVariants = cva(
  "animate-pulse bg-muted rounded-md",
  {
    variants: {
      size: {
        sm: "min-h-[60px]",
        md: "min-h-[80px]",
        lg: "min-h-[100px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

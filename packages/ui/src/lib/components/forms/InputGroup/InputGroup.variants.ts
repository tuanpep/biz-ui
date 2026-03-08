/**
 * InputGroup variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * InputGroup size variant styles.
 */
export const inputGroupVariants = cva(
  "flex items-center w-full [&>input]:flex-1 [&>input]:min-w-0",
  {
    variants: {
      size: {
        sm: "[&>input]:h-8",
        md: "[&>input]:h-10",
        lg: "[&>input]:h-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * InputAddon variant styles.
 */
export const inputAddonVariants = cva(
  "flex items-center justify-center px-3 border border-border bg-muted text-muted-foreground text-sm whitespace-nowrap h-10",
  {
    variants: {
      placement: {
        left: "border-r-0",
        right: "border-l-0",
      },
    },
    defaultVariants: {
      placement: "left",
    },
  },
);

/**
 * InputLeftElement variant styles.
 */
export const inputLeftElementVariants = cva(
  "absolute left-0 top-0 flex items-center justify-center h-full w-10 text-muted-foreground pointer-events-none",
);

/**
 * InputRightElement variant styles.
 */
export const inputRightElementVariants = cva(
  "absolute right-0 top-0 flex items-center justify-center h-full w-10 text-muted-foreground",
);

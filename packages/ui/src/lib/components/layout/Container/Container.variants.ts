/**
 * Container Component Variants
 *
 * Style variants for responsive container.
 */

import { cva } from "class-variance-authority";

export const containerVariants = cva("mx-auto w-full px-4", {
  variants: {
    /** Maximum width of the container */
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    },
    /** Horizontal padding size */
    padding: {
      none: "px-0",
      sm: "px-2",
      md: "px-4",
      lg: "px-6",
      xl: "px-8",
    },
    /** When true, centers content vertically */
    centerContent: {
      true: "flex flex-col items-center",
      false: "",
    },
  },
  defaultVariants: {
    size: "xl",
    padding: "md",
    centerContent: false,
  },
});

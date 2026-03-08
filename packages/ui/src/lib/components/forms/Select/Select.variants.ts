/**
 * Select variants using CVA.
 * Aligned with Input component for consistency.
 */

import { cva } from "class-variance-authority";

/**
 * Select trigger variant styles.
 * Biz UI aligned with clear visual feedback on validation states.
 */
export const selectTriggerVariants = cva(
  "flex w-full items-center justify-between border bg-card text-sm ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer [&>span]:line-clamp-1",
  {
    variants: {
      variant: {
        default: "border-input",
        filled: "border-transparent bg-muted",
        unstyled: "border-transparent bg-transparent",
      },
      size: {
        sm: "h-8 px-2.5 py-1.5 text-xs",
        md: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-4 py-3 text-base",
      },
      error: {
        true: "border-destructive focus-visible:ring-destructive",
        false: "",
      },
      warn: {
        true: "border-warning focus-visible:ring-warning",
        false: "",
      },
      success: {
        true: "border-success focus-visible:ring-success",
        false: "",
      },
    },
    compoundVariants: [
      // Filled variant + error state
      {
        variant: "filled",
        error: true,
        className: "bg-destructive-muted",
      },
      // Filled variant + warn state
      {
        variant: "filled",
        warn: true,
        className: "bg-warning-muted",
      },
      // Filled variant + success state
      {
        variant: "filled",
        success: true,
        className: "bg-success-muted",
      },
      // Unstyled variant should not show validation rings
      {
        variant: "unstyled",
        error: true,
        className: "focus-visible:ring-0",
      },
      {
        variant: "unstyled",
        warn: true,
        className: "focus-visible:ring-0",
      },
      {
        variant: "unstyled",
        success: true,
        className: "focus-visible:ring-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      error: false,
      warn: false,
      success: false,
    },
  },
);

/**
 * Select item variant styles.
 */
export const selectItemVariants = cva(
  "relative flex w-full cursor-default select-none items-center outline-none focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        sm: "py-1.5 pl-7 pr-2 text-xs",
        md: "py-1.5 pl-8 pr-2 text-sm",
        lg: "py-2 pl-9 pr-3 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * Select skeleton variant styles.
 */
export const selectSkeletonVariants = cva("animate-pulse bg-muted rounded-md", {
  variants: {
    size: {
      sm: "h-8 w-full",
      md: "h-10 w-full",
      lg: "h-12 w-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

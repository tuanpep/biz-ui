/**
 * Flex variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Flex container variant styles.
 */
export const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1", // 4px
      sm: "gap-2", // 8px
      md: "gap-4", // 16px
      lg: "gap-6", // 24px
      xl: "gap-8", // 32px
      "2xl": "gap-10", // 40px
      "3xl": "gap-12", // 48px
    },
    inline: {
      true: "inline-flex",
      false: "flex",
    },
  },
  defaultVariants: {
    direction: "row",
    wrap: "nowrap",
    justify: "start",
    align: "stretch",
    gap: "none",
    inline: false,
  },
});

/**
 * Flex item variant styles.
 */
export const flexItemVariants = cva("", {
  variants: {
    flex: {
      auto: "flex-auto",
      initial: "flex-initial",
      none: "flex-none",
      "1": "flex-1",
    },
    grow: {
      true: "grow",
      false: "grow-0",
    },
    shrink: {
      true: "shrink",
      false: "shrink-0",
    },
    alignSelf: {
      auto: "self-auto",
      start: "self-start",
      end: "self-end",
      center: "self-center",
      baseline: "self-baseline",
      stretch: "self-stretch",
    },
    order: {
      first: "order-first",
      last: "order-last",
      none: "order-none",
      "1": "order-1",
      "2": "order-2",
      "3": "order-3",
      "4": "order-4",
      "5": "order-5",
    },
  },
  defaultVariants: {
    flex: undefined,
    grow: false,
    shrink: true,
    alignSelf: "auto",
    order: "none",
  },
});

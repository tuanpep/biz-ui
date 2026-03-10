/**
 * Table variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 */

import { cva } from "class-variance-authority";

/**
 * Table variant styles.
 */
export const tableVariants = cva("w-full caption-bottom text-sm", {
  variants: {
    stickyHeader: {
      true: "[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-10 [&_thead_th]:bg-card",
      false: "",
    },
    useZebraStyles: {
      true: "[&_tbody_tr:nth-child(odd)]:bg-transparent [&_tbody_tr:nth-child(even)]:bg-muted/30",
      false: "",
    },
    size: {
      sm: "[&_th]:h-10 [&_th]:px-4 [&_td]:px-4 [&_td]:py-2 text-xs",
      md: "[&_th]:h-12 [&_th]:px-6 [&_td]:px-6 [&_td]:py-4 text-sm",
      lg: "[&_th]:h-14 [&_th]:px-8 [&_td]:px-8 [&_td]:py-5 text-base",
    },
  },
  defaultVariants: {
    stickyHeader: false,
    useZebraStyles: false,
    size: "md",
  },
});

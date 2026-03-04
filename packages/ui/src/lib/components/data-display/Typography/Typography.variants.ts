/**
 * Typography variants using CVA (Class Variance Authority).
 * Separated for better organization and reusability.
 * Based on Biz UI's type scale.
 */

import { cva } from "class-variance-authority";

/**
 * Heading variant styles.
 */
export const headingVariants = cva("", {
  variants: {
    variant: {
      // Productive headings (for UI)
      "heading-01": "text-xs font-semibold tracking-wide text-foreground", // 12px/700
      "heading-02": "text-sm font-semibold tracking-wide text-foreground", // 14px/700
      "heading-03": "text-base font-semibold text-foreground", // 16px/700
      "heading-04": "text-lg font-semibold text-foreground", // 18px/700
      "heading-05": "text-xl font-semibold text-foreground", // 20px/700
      "heading-06": "text-2xl font-semibold text-foreground", // 24px/700
      "heading-07": "text-3xl font-semibold text-foreground", // 28px/700
    },
  },
  defaultVariants: {
    variant: "heading-03",
  },
});

/**
 * Body variant styles.
 */
export const bodyVariants = cva("", {
  variants: {
    variant: {
      // Body text
      "body-01": "text-sm font-normal leading-5 text-foreground", // 14px/400, 20px line-height
      "body-02": "text-base font-normal leading-6 text-foreground", // 16px/400, 24px line-height
      "body-compact-01": "text-sm font-normal leading-4 text-foreground", // 14px/400, 16px line-height
      "body-compact-02": "text-base font-normal leading-5 text-foreground", // 16px/400, 20px line-height
    },
  },
  defaultVariants: {
    variant: "body-01",
  },
});

/**
 * Typography label variant styles.
 */
export const typographyLabelVariants = cva("", {
  variants: {
    variant: {
      // Labels
      "label-01": "text-xs font-normal tracking-wide text-muted-foreground", // 12px/400
      "label-02": "text-sm font-normal tracking-wide text-muted-foreground", // 14px/400
    },
  },
  defaultVariants: {
    variant: "label-01",
  },
});

/**
 * Helper text variant styles.
 */
export const helperTextVariants = cva("", {
  variants: {
    variant: {
      // Helper text
      "helper-text-01": "text-xs font-normal text-muted-foreground", // 12px/400
    },
  },
  defaultVariants: {
    variant: "helper-text-01",
  },
});

/**
 * Code variant styles.
 */
export const codeVariants = cva(
  "font-mono bg-muted px-1 py-0.5 rounded-none text-foreground",
  {
    variants: {
      variant: {
        // Code
        "code-01": "text-xs", // 12px mono
        "code-02": "text-sm", // 14px mono
      },
    },
    defaultVariants: {
      variant: "code-01",
    },
  },
);

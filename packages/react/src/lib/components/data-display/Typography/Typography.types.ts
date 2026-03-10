/**
 * Typography component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Heading variant type.
 */
export type HeadingVariant = NonNullable<
  VariantProps<
    typeof import("./Typography.variants").headingVariants
  >["variant"]
>;

/**
 * Body variant type.
 */
export type BodyVariant = VariantProps<
  typeof import("./Typography.variants").bodyVariants
>["variant"];

/**
 * Typography label variant type.
 */
export type TypographyLabelVariant = VariantProps<
  typeof import("./Typography.variants").typographyLabelVariants
>["variant"];

/**
 * Helper text variant type.
 */
export type HelperTextVariant = VariantProps<
  typeof import("./Typography.variants").helperTextVariants
>["variant"];

/**
 * Code variant type.
 */
export type CodeVariant = VariantProps<
  typeof import("./Typography.variants").codeVariants
>["variant"];

/**
 * Heading component props.
 */
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Typography variant */
  variant?: HeadingVariant;
  /** HTML element to render (defaults based on variant) */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Map to a child element */
  asChild?: boolean;
}

/**
 * Body component props.
 */
export interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Typography variant */
  variant?: BodyVariant;
  /** Map to a child element */
  asChild?: boolean;
}

/**
 * TypographyLabel component props.
 */
export interface TypographyLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Typography variant */
  variant?: TypographyLabelVariant;
  /** Map to a child element */
  asChild?: boolean;
}

/**
 * HelperText component props.
 */
export interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Typography variant */
  variant?: HelperTextVariant;
  /** Map to a child element */
  asChild?: boolean;
}

/**
 * Code component props.
 */
export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  /** Typography variant */
  variant?: CodeVariant;
  /** Map to a child element */
  asChild?: boolean;
}

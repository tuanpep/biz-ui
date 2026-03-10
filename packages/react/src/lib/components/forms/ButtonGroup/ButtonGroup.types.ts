/**
 * ButtonGroup component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * ButtonGroup variant type.
 */
export type ButtonGroupVariant = VariantProps<
  typeof import("./ButtonGroup.variants").buttonGroupVariants
>["variant"];

/**
 * ButtonGroup orientation type.
 */
export type ButtonGroupOrientation = VariantProps<
  typeof import("./ButtonGroup.variants").buttonGroupVariants
>["orientation"];

/**
 * ButtonGroup component props.
 */
export interface ButtonGroupProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof import("./ButtonGroup.variants").buttonGroupVariants> {}

/**
 * Icon component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { LucideProps } from "lucide-react";
import type { VariantProps } from "class-variance-authority";

/**
 * Icon size types.
 */
export type IconSize = VariantProps<
  typeof import("./Icon.variants").iconVariants
>["size"];

/**
 * Icon color types.
 */
export type IconColor = VariantProps<
  typeof import("./Icon.variants").iconVariants
>["color"];

/**
 * Icon component props.
 */
export interface IconProps
  extends
    Omit<LucideProps, "size" | "color">,
    VariantProps<typeof import("./Icon.variants").iconVariants> {
  /** The Lucide icon component to render */
  icon: React.ComponentType<LucideProps>;
  /** Accessible label for the icon */
  label?: string;
}

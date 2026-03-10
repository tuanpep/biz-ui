/**
 * IconButton component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

/**
 * IconButton variant types.
 */
export type IconButtonVariant = VariantProps<
  typeof import("./IconButton.variants").iconButtonVariants
>["variant"];

/**
 * IconButton size types.
 */
export type IconButtonSize = VariantProps<
  typeof import("./IconButton.variants").iconButtonVariants
>["size"];

/**
 * IconButton component props.
 */
export interface IconButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof import("./IconButton.variants").iconButtonVariants> {
  /** The Lucide icon to render */
  icon: LucideIcon;
  /** Accessible label (required for screen readers) */
  label: string;
  /** Render as child component using Radix Slot */
  asChild?: boolean;
  /** Show loading spinner and disable button */
  loading?: boolean;
}

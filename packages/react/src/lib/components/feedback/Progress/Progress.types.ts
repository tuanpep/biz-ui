/**
 * Progress component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type * as ProgressPrimitive from "@radix-ui/react-progress";
import type { VariantProps } from "class-variance-authority";

/**
 * Progress variant types.
 */
export type ProgressVariant = VariantProps<
  typeof import("./Progress.variants").progressVariants
>["variant"];

/**
 * Progress size types.
 */
export type ProgressSize = VariantProps<
  typeof import("./Progress.variants").progressVariants
>["size"];

/**
 * Progress component props.
 */
export type ProgressProps = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> &
  VariantProps<typeof import("./Progress.variants").progressVariants>;

/**
 * Table component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Table size type.
 */
export type TableSize = VariantProps<
  typeof import("./Table.variants").tableVariants
>["size"];

/**
 * Table component props.
 */
export type TableProps = React.HTMLAttributes<HTMLTableElement> &
  VariantProps<typeof import("./Table.variants").tableVariants>;

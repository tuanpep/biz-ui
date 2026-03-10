/**
 * List Component Types
 *
 * Types for ordered and unordered lists.
 */

import type { HTMLAttributes, LiHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { listVariants } from "./List.variants";

export interface ListProps
  extends
    HTMLAttributes<HTMLUListElement | HTMLOListElement>,
    VariantProps<typeof listVariants> {
  /** Render as ordered list */
  ordered?: boolean;
}

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Icon to display before the content */
  icon?: ReactNode;
}

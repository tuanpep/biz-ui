import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { emptyStateVariants } from "./EmptyState.variants";

export interface EmptyStateProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyStateVariants> {
  /** Icon to display */
  icon?: ReactNode;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Call-to-action element (e.g., a Button) */
  action?: ReactNode;
}

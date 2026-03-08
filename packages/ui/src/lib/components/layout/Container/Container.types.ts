/**
 * Container Component Types
 *
 * Types for responsive container.
 */

import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { containerVariants } from "./Container.variants";

export interface ContainerProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

/**
 * Center Component Types
 *
 * Types for centering layout component.
 */

import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { centerVariants } from "./Center.variants";

export interface CenterProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof centerVariants> {}

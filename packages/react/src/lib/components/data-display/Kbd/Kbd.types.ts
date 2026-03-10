/**
 * Kbd Component Types
 *
 * Keyboard shortcut indicator types.
 */

import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { kbdVariants } from "./Kbd.variants";

export interface KbdProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {}

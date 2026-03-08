/**
 * VisuallyHidden Component Types
 *
 * Types for visually hidden accessibility component.
 */

import type { HTMLAttributes } from "react";

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * When true, content becomes visible (useful for focus-visible scenarios).
   * @default false
   */
  focusable?: boolean;
}

/**
 * AspectRatio Component Types
 *
 * Types for aspect ratio container.
 */

import type { HTMLAttributes } from "react";

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The desired aspect ratio expressed as width/height.
   * @example 16/9, 4/3, 1
   * @default 1
   */
  ratio?: number;
}

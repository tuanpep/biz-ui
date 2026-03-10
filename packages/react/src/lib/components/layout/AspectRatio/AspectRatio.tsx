/**
 * AspectRatio Component
 *
 * Displays content within a desired ratio (e.g., 16/9, 4/3, 1/1).
 * Useful for responsive images, videos, and maps.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The desired aspect ratio expressed as width/height.
   * @example 16/9, 4/3, 1
   * @default 1
   */
  ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 1, style, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ paddingBottom: `${(1 / ratio) * 100}%`, ...style }}
      {...props}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  ),
);
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };

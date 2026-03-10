/**
 * VisuallyHidden Component
 *
 * Hides content visually while keeping it accessible to screen readers.
 * Essential for accessibility — provides context to assistive technologies
 * without affecting visual layout.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * When true, content becomes visible (useful for focus-visible scenarios).
   * @default false
   */
  focusable?: boolean;
}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, focusable = false, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        focusable
          ? "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2"
          : "sr-only",
        className,
      )}
      {...props}
    />
  ),
);
VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };

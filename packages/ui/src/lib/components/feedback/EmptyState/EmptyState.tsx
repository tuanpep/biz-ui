/**
 * EmptyState Component
 *
 * Placeholder for empty content areas. Provides a visual indication
 * and optional call-to-action when there is no data to display.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  emptyStateVariants,
  emptyStateIconVariants,
  emptyStateTitleVariants,
  emptyStateDescVariants,
} from "./EmptyState.variants";
import type { EmptyStateProps } from "./EmptyState.types";

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    { className, icon, title, description, action, size = "md", ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(emptyStateVariants({ size }), className)}
        {...props}
      >
        {icon && (
          <div className={cn(emptyStateIconVariants({ size }))}>{icon}</div>
        )}
        <h3 className={cn(emptyStateTitleVariants({ size }))}>{title}</h3>
        {description && (
          <p className={cn(emptyStateDescVariants({ size }))}>{description}</p>
        )}
        {action && <div className="mt-4">{action}</div>}
      </div>
    );
  },
);
EmptyState.displayName = "EmptyState";

export {
  EmptyState,
  emptyStateVariants,
  emptyStateIconVariants,
  emptyStateTitleVariants,
  emptyStateDescVariants,
};
export type { EmptyStateProps } from "./EmptyState.types";

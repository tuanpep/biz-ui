/**
 * EmptyState Component
 *
 * Placeholder for empty content areas. Provides a visual indication
 * and optional call-to-action when there is no data to display.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon to display */
  icon?: React.ReactNode;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Call-to-action element (e.g., a Button) */
  action?: React.ReactNode;
  /** Size variant */
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: { wrapper: "py-8 px-4", icon: "mb-2", title: "text-sm", desc: "text-xs" },
  md: {
    wrapper: "py-12 px-6",
    icon: "mb-3",
    title: "text-base",
    desc: "text-sm",
  },
  lg: {
    wrapper: "py-16 px-8",
    icon: "mb-4",
    title: "text-lg",
    desc: "text-sm",
  },
};

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    { className, icon, title, description, action, size = "md", ...props },
    ref,
  ) => {
    const styles = sizeStyles[size];
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center",
          styles.wrapper,
          className,
        )}
        {...props}
      >
        {icon && (
          <div
            className={cn(
              "text-muted-foreground [&>svg]:h-10 [&>svg]:w-10",
              styles.icon,
            )}
          >
            {icon}
          </div>
        )}
        <h3 className={cn("font-medium text-foreground", styles.title)}>
          {title}
        </h3>
        {description && (
          <p className={cn("text-muted-foreground mt-1 max-w-sm", styles.desc)}>
            {description}
          </p>
        )}
        {action && <div className="mt-4">{action}</div>}
      </div>
    );
  },
);
EmptyState.displayName = "EmptyState";

export { EmptyState };

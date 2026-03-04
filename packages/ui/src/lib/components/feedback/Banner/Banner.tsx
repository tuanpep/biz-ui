/**
 * Banner Component
 *
 * Full-width notification banner for page-level messages.
 * Used for system announcements, maintenance notices, etc.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const bannerVariants = cva(
  "relative flex items-center w-full px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        info: "bg-info-muted text-foreground border-b border-info",
        success: "bg-success-muted text-foreground border-b border-success",
        warning: "bg-warning-muted text-foreground border-b border-warning",
        error:
          "bg-destructive-muted text-foreground border-b border-destructive",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

export interface BannerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  /** Whether the banner can be dismissed */
  dismissible?: boolean;
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Icon to display before the content */
  icon?: React.ReactNode;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      variant,
      dismissible = false,
      onDismiss,
      icon,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(bannerVariants({ variant }), className)}
      {...props}
    >
      {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
      <div className="flex-1">{children}</div>
      {dismissible && (
        <button
          onClick={onDismiss}
          className="ml-2 flex-shrink-0 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss banner"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      )}
    </div>
  ),
);
Banner.displayName = "Banner";

export { Banner, bannerVariants };

/**
 * Banner Component
 *
 * Full-width notification banner for page-level messages.
 * Used for system announcements, maintenance notices, etc.
 */

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../../utils/cn";
import { bannerVariants } from "./Banner.variants";
import type { BannerProps } from "./Banner.types";

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
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      )}
    </div>
  ),
);
Banner.displayName = "Banner";

export { Banner, bannerVariants };
export type { BannerProps } from "./Banner.types";

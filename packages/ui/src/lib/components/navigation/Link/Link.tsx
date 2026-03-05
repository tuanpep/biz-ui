/**
 * Link Component
 *
 * Biz UI aligned link with:
 * - Multiple variants for different contexts
 * - External link indicator
 * - Disabled state
 * - Underline control
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { ExternalLink } from "lucide-react";
import { linkVariants } from "./Link.variants";
import type { LinkProps } from "./Link.types";

// ============================================================================
// Link Component
// ============================================================================

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      underline,
      size,
      external = false,
      disabled = false,
      asSpan = false,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref,
  ) => {
    const isExternal = external || target === "_blank";

    const externalProps = isExternal
      ? {
          target: target || "_blank",
          rel: rel || "noopener noreferrer",
        }
      : {};

    const linkClasses = cn(
      linkVariants({ variant, underline, size }),
      disabled &&
        "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
    );

    // Render as span for non-interactive links
    if (asSpan || disabled) {
      return (
        <span
          className={cn(linkClasses, disabled && "pointer-events-none")}
          aria-disabled={disabled}
          ref={ref as React.Ref<HTMLSpanElement>}
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {children}
          {isExternal && (
            <ExternalLink
              className="h-3 w-3 flex-shrink-0"
              aria-hidden="true"
            />
          )}
        </span>
      );
    }

    return (
      <a
        className={cn(linkClasses, className)}
        ref={ref}
        href={href}
        {...externalProps}
        {...props}
      >
        {children}
        {isExternal && (
          <ExternalLink className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
        )}
      </a>
    );
  },
);

Link.displayName = "Link";

// ============================================================================
// Exports
// ============================================================================

export { Link };
export { linkVariants } from "./Link.variants";
export type {
  LinkProps,
  LinkVariant,
  LinkUnderline,
  LinkSize,
} from "./Link.types";

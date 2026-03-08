/**
 * IconButton Component
 *
 * Biz UI aligned icon button with:
 * - Square aspect ratio for icons
 * - Accessible label (required)
 * - Multiple variants matching Button component
 * - Loading state with spinner
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cn } from "../../../utils/cn";
import { iconButtonVariants, iconSizes } from "./IconButton.variants";
import type { IconButtonProps } from "./IconButton.types";

// ============================================================================
// Loading Spinner Component
// ============================================================================

const LoadingSpinner = ({ className }: { className?: string }) => (
  <Loader2 className={cn("animate-spin", className)} aria-hidden="true" />
);

// ============================================================================
// IconButton Component
// ============================================================================

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size = "md",
      icon: Icon,
      label,
      asChild = false,
      loading = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isDisabled}
        aria-label={label}
        aria-busy={loading}
        aria-live="polite"
        {...props}
      >
        {loading ? (
          <LoadingSpinner className={iconSizes[size || "md"]} />
        ) : (
          <Icon className={iconSizes[size || "md"]} aria-hidden="true" />
        )}
        <span className="sr-only">{loading ? `Loading: ${label}` : label}</span>
      </Comp>
    );
  },
);

IconButton.displayName = "IconButton";

// ============================================================================
// Exports
// ============================================================================

export { IconButton };
export { iconButtonVariants, iconSizes } from "./IconButton.variants";
export type {
  IconButtonProps,
  IconButtonVariant,
  IconButtonSize,
} from "./IconButton.types";

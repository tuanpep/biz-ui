/**
 * Button Component
 *
 * Biz UI aligned button with:
 * - Clear visual feedback on hover/active states
 * - Accessible focus states (WCAG 2.1 AA)
 * - Consistent spacing and sizing (8px baseline)
 * - Loading state with spinner
 * - Icon support (leftIcon, rightIcon, hasIconOnly)
 * - Biz UI-aligned variant aliases (primary, secondary, tertiary)
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cn } from "../../../utils/cn";
import { buttonVariants } from "./Button.variants";
import type { ButtonProps } from "./Button.types";

// ============================================================================
// Loading Spinner Component
// ============================================================================

const LoadingSpinner = React.memo(function LoadingSpinner({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <Loader2
      className={cn("animate-spin", sizeClasses[size])}
      aria-hidden="true"
    />
  );
});

// ============================================================================
// Button Component
// ============================================================================

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = "md",
      asChild = false,
      loading = false,
      loadingText,
      disabled,
      leftIcon,
      rightIcon,
      hasIconOnly = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    // Determine spinner size based on button size
    const spinnerSize =
      size === "sm" ? "sm" : size === "lg" || size === "xl" ? "lg" : "md";

    // When asChild is true, Radix Slot requires exactly one child element.
    // We cannot pass loading spinner or loadingText as siblings.
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size }), className)}
          ref={ref}
          disabled={isDisabled}
          aria-busy={loading}
          aria-live="polite"
          {...props}
        >
          {children}
        </Comp>
      );
    }

    // Determine if this is effectively an icon-only button
    const isIconOnly =
      hasIconOnly || (size === "icon" && !leftIcon && !rightIcon && !loading);

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          isIconOnly && "aspect-square p-0",
          className,
        )}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        aria-live="polite"
        aria-label={loading ? loadingText || "Loading" : props["aria-label"]}
        {...props}
      >
        {loading ? (
          <>
            <LoadingSpinner size={spinnerSize} />
            {!isIconOnly && children}
            {loadingText && <span className="sr-only">{loadingText}</span>}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2 flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && (
              <span className="ml-2 flex-shrink-0">{rightIcon}</span>
            )}
          </>
        )}
      </Comp>
    );
  },
);

ButtonBase.displayName = "Button";

// Memoize Button to prevent unnecessary re-renders
const Button = React.memo(ButtonBase);

// ============================================================================
// Exports
// ============================================================================

export { Button };
export { buttonVariants } from "./Button.variants";
export type {
  ButtonProps,
  ButtonSkeletonProps,
  ButtonVariant,
  ButtonSize,
} from "./Button.types";

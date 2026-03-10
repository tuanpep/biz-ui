/**
 * Loading Component
 *
 * Biz UI aligned loading indicators with:
 * - Spinner component for full-page loading
 * - InlineLoading for inline loading states with text
 * - Multiple sizes
 * - Overlay mode
 * - Progress percentage support
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import { Loader2, Check, X } from "lucide-react";
import {
  spinnerVariants,
  loadingOverlayVariants,
  inlineLoadingVariants,
} from "./Loading.variants";
import type {
  SpinnerProps,
  LoadingOverlayProps,
  InlineLoadingProps,
} from "./Loading.types";

// ============================================================================
// Spinner Component
// ============================================================================

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, label = "Loading", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        role="status"
        aria-label={label}
        {...props}
      >
        <Loader2 className={cn(spinnerVariants({ size }))} aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </span>
    );
  },
);

Spinner.displayName = "Spinner";

// ============================================================================
// LoadingOverlay Component
// ============================================================================

const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ className, variant, size = "xl", text, show = true, ...props }, ref) => {
    if (!show) return null;

    return (
      <div
        ref={ref}
        className={cn(loadingOverlayVariants({ variant }), className)}
        aria-live="polite"
        aria-busy="true"
        {...props}
      >
        <Spinner size={size} />
        {text && (
          <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
        )}
      </div>
    );
  },
);

LoadingOverlay.displayName = "LoadingOverlay";

// ============================================================================
// InlineLoading Component
// ============================================================================

const InlineLoading = React.forwardRef<HTMLDivElement, InlineLoadingProps>(
  (
    {
      className,
      status = "active",
      text,
      showSpinner = true,
      progress,
      successIcon,
      errorIcon,
      ...props
    },
    ref,
  ) => {
    const defaultSuccessIcon = <Check className="h-4 w-4" aria-hidden="true" />;

    const defaultErrorIcon = <X className="h-4 w-4" aria-hidden="true" />;

    const renderIcon = () => {
      switch (status) {
        case "finished":
          return successIcon || defaultSuccessIcon;
        case "error":
          return errorIcon || defaultErrorIcon;
        case "active":
        case "inactive":
        default:
          if (showSpinner) {
            return <Spinner size="sm" />;
          }
          return null;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(inlineLoadingVariants({ status }), className)}
        role="status"
        aria-live="polite"
        aria-busy={status === "active"}
        {...props}
      >
        {renderIcon()}
        {text && <span>{text}</span>}
        {progress !== undefined && status === "active" && (
          <span className="text-xs text-muted-foreground">({progress}%)</span>
        )}
      </div>
    );
  },
);

InlineLoading.displayName = "InlineLoading";

// ============================================================================
// Exports
// ============================================================================

export { Spinner, LoadingOverlay, InlineLoading };
export {
  spinnerVariants,
  loadingOverlayVariants,
  inlineLoadingVariants,
} from "./Loading.variants";
export type {
  SpinnerProps,
  LoadingOverlayProps,
  InlineLoadingProps,
  SpinnerSize,
  LoadingOverlayVariant,
  InlineLoadingStatus,
} from "./Loading.types";

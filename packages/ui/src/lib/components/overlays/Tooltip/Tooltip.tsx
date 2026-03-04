/**
 * Tooltip Component
 *
 * Design Principles:
 * - Accessible keyboard navigation
 * - Configurable delay
 * - Support for multiline content
 * - Multiple side positions
 *
 * Note: Wrap your app (or the section using tooltips) with TooltipProvider
 * for optimal performance and shared delay context.
 *
 * @example
 * ```tsx
 * // In your app root or layout
 * <TooltipProvider>
 *   <App />
 * </TooltipProvider>
 *
 * // Then use tooltips anywhere
 * <Tooltip>
 *   <TooltipTrigger>Hover me</TooltipTrigger>
 *   <TooltipContent>Tooltip content</TooltipContent>
 * </Tooltip>
 * ```
 */

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../../utils/cn";
import type { TooltipContentProps, SimpleTooltipProps } from "./Tooltip.types";

// ============================================================================
// Tooltip Provider
// ============================================================================

const TooltipProvider = TooltipPrimitive.Provider;

// ============================================================================
// Tooltip Root
// ============================================================================

const Tooltip = TooltipPrimitive.Root;

// ============================================================================
// Tooltip Trigger
// ============================================================================

const TooltipTrigger = TooltipPrimitive.Trigger;

// ============================================================================
// Tooltip Content
// ============================================================================

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <div className="biz-ui">
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 overflow-hidden bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </div>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// ============================================================================
// SimpleTooltip Component
// ============================================================================

/**
 * A simplified tooltip component for quick use cases.
 * Note: For better performance with multiple tooltips, use TooltipProvider
 * at a higher level and use the Tooltip/TooltipTrigger/TooltipContent
 * components directly.
 *
 * @example
 * ```tsx
 * <SimpleTooltip content="Helpful tip">
 *   <Button>Hover me</Button>
 * </SimpleTooltip>
 * ```
 */

// Default provider context for standalone SimpleTooltip usage
const defaultContext = {
  delayDuration: 200,
  skipDelayDuration: 300,
};

const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
  content,
  children,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  delayDuration = defaultContext.delayDuration,
  skipDelayDuration = defaultContext.skipDelayDuration,
  disabled = false,
  className,
}) => {
  if (disabled || !content) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          className={className}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// ============================================================================
// Exports
// ============================================================================

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  SimpleTooltip,
};
export type { TooltipContentProps, SimpleTooltipProps } from "./Tooltip.types";

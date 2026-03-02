import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../utils/cn';

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

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <div className="biz-ui">
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 overflow-hidden bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </div>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

/**
 * SimpleTooltip Component
 *
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
export interface SimpleTooltipProps {
  /** Content to show in the tooltip */
  content: React.ReactNode;
  /** The element that triggers the tooltip */
  children: React.ReactNode;
  /** Which side to show the tooltip on */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Distance from trigger in pixels */
  sideOffset?: number;
  /** Alignment of the tooltip */
  align?: 'start' | 'center' | 'end';
  /** Distance from alignment edge in pixels */
  alignOffset?: number;
  /** Time in ms before tooltip opens */
  delayDuration?: number;
  /** Whether to skip the delay when switching between tooltips */
  skipDelayDuration?: number;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
  /** Additional className for the tooltip content */
  className?: string;
}

// Default provider context for standalone SimpleTooltip usage
const defaultContext = {
  delayDuration: 200,
  skipDelayDuration: 300,
};

const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
  content,
  children,
  side = 'top',
  sideOffset = 4,
  align = 'center',
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
    <TooltipProvider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
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

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  SimpleTooltip,
};

/**
 * ComposedModal Component
 *
 * A compound modal component following Carbon's pattern.
 * Provides ModalHeader, ModalBody, and ModalFooter for flexible composition.
 *
 * @example
 * ```tsx
 * <ComposedModal open={isOpen} onOpenChange={setIsOpen}>
 *   <ModalHeader title="Confirm Action" description="Are you sure you want to proceed?" />
 *   <ModalBody>
 *     <p>This action cannot be undone.</p>
 *   </ModalBody>
 *   <ModalFooter>
 *     <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
 *     <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
 *   </ModalFooter>
 * </ComposedModal>
 * ```
 */

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../../utils/cn";
import { modalVariants } from "./ComposedModal.variants";
import type {
  ModalOverlayProps,
  ComposedModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalSkeletonProps,
  ModalSize,
} from "./ComposedModal.types";

// ============================================================================
// Context
// ============================================================================

interface ModalContextValue {
  size: ModalSize;
  closeButtonLabel: string;
}

const ModalContext = React.createContext<ModalContextValue>({
  size: "md",
  closeButtonLabel: "Close",
});

function useModalContext() {
  return React.useContext(ModalContext);
}

// ============================================================================
// Root Components
// ============================================================================

const ComposedModal = DialogPrimitive.Root;
const ComposedModalTrigger = DialogPrimitive.Trigger;
const ComposedModalClose = DialogPrimitive.Close;

// ============================================================================
// Modal Overlay
// ============================================================================

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  ModalOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
ModalOverlay.displayName = "ModalOverlay";

// ============================================================================
// ComposedModal Content
// ============================================================================

const ComposedModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ComposedModalContentProps
>(
  (
    {
      className,
      children,
      size = "md",
      closeButtonLabel = "Close",
      hideCloseButton = false,
      ...props
    },
    ref,
  ) => {
    const contextValue = React.useMemo(
      () => ({
        size: size as ModalSize,
        closeButtonLabel,
      }),
      [size, closeButtonLabel],
    );

    return (
      <DialogPrimitive.Portal>
        <div className="biz-ui fixed inset-0 z-50 pointer-events-none [&>*]:pointer-events-auto">
          <ModalOverlay />
          <DialogPrimitive.Content
            ref={ref}
            className={cn(modalVariants({ size }), className)}
            {...props}
          >
            <ModalContext.Provider value={contextValue}>
              {children}
            </ModalContext.Provider>
            {!hideCloseButton && (
              <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">{closeButtonLabel}</span>
              </DialogPrimitive.Close>
            )}
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    );
  },
);
ComposedModalContent.displayName = "ComposedModalContent";

// ============================================================================
// Modal Header
// ============================================================================

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (
    {
      className,
      title,
      description,
      showCloseButton = false,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const { closeButtonLabel } = useModalContext();

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col space-y-1.5 border-b border-border px-6 py-4 text-left",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex-shrink-0 text-muted-foreground">{icon}</div>
            )}
            <div className="flex-1">
              {title && (
                <DialogPrimitive.Title className="text-lg font-semibold tracking-tight">
                  {title}
                </DialogPrimitive.Title>
              )}
            </div>
          </div>
          {showCloseButton && (
            <DialogPrimitive.Close className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none">
              <X className="h-4 w-4" />
              <span className="sr-only">{closeButtonLabel}</span>
            </DialogPrimitive.Close>
          )}
        </div>
        {description && (
          <DialogPrimitive.Description className="text-sm text-muted-foreground">
            {description}
          </DialogPrimitive.Description>
        )}
        {children}
      </div>
    );
  },
);
ModalHeader.displayName = "ModalHeader";

// ============================================================================
// Modal Body
// ============================================================================

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, scrollable = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-6 py-4",
          scrollable && "max-h-[60vh] overflow-y-auto",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
ModalBody.displayName = "ModalBody";

// ============================================================================
// Modal Footer
// ============================================================================

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, align = "right", children, ...props }, ref) => {
    const alignClasses = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
      between: "justify-between",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col-reverse sm:flex-row sm:gap-2 border-t border-border px-6 py-4",
          alignClasses[align as keyof typeof alignClasses],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
ModalFooter.displayName = "ModalFooter";

// ============================================================================
// Modal Skeleton
// ============================================================================

const ModalSkeleton = React.forwardRef<HTMLDivElement, ModalSkeletonProps>(
  (
    {
      className,
      size = "md",
      hasHeader = true,
      hasFooter = true,
      bodyLines = 3,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          modalVariants({ size }),
          "animate-pulse pointer-events-none",
          className,
        )}
        {...props}
      >
        {hasHeader && (
          <div className="border-b border-border px-6 py-4 space-y-3">
            <div className="h-5 w-40 bg-muted rounded" />
            <div className="h-4 w-60 bg-muted rounded" />
          </div>
        )}
        <div className="px-6 py-4 space-y-2">
          {Array.from({ length: bodyLines }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-muted rounded"
              style={{ width: `${100 - i * 15}%` }}
            />
          ))}
        </div>
        {hasFooter && (
          <div className="border-t border-border px-6 py-4 flex justify-end gap-2">
            <div className="h-9 w-20 bg-muted rounded-md" />
            <div className="h-9 w-24 bg-muted rounded-md" />
          </div>
        )}
      </div>
    );
  },
);
ModalSkeleton.displayName = "ModalSkeleton";

// ============================================================================
// Exports
// ============================================================================

export {
  // Root components
  ComposedModal,
  ComposedModalTrigger,
  ComposedModalClose,
  ComposedModalContent,
  // Sub-components
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Skeleton
  ModalSkeleton,
};

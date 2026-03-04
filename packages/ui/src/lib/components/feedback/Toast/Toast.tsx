/**
 * Toast Component
 *
 * Biz UI aligned toast notifications with:
 * - Multiple variants (default, success, error, warning, info)
 * - Action button support
 * - Auto-dismiss with progress
 * - Stacked toasts
 * - Multiple positions
 */

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "../../../utils/cn";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import { toastVariants } from "./Toast.variants";
import type {
  ToastProps,
  ToastActionProps,
  ToastCloseProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastViewportProps,
  ToastProviderProps,
  ToastMessage,
  ToastContextValue,
  ToastVariant,
} from "./Toast.types";

// ============================================================================
// Toast Provider
// ============================================================================

const ToastProvider = ToastPrimitives.Provider;

// ============================================================================
// Toast Viewport
// ============================================================================

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

// ============================================================================
// Toast Component
// ============================================================================

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

// ============================================================================
// ToastAction Component
// ============================================================================

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

// ============================================================================
// ToastClose Component
// ============================================================================

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  ToastCloseProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

// ============================================================================
// ToastTitle Component
// ============================================================================

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

// ============================================================================
// ToastDescription Component
// ============================================================================

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// ============================================================================
// Toast Icon
// ============================================================================

const ToastIcon = ({ variant }: { variant?: ToastVariant }) => {
  const iconClass = "h-5 w-5 flex-shrink-0";

  switch (variant) {
    case "success":
      return <CheckCircle className={cn(iconClass, "text-success")} />;
    case "error":
      return <AlertCircle className={cn(iconClass, "text-destructive")} />;
    case "warning":
      return <AlertTriangle className={cn(iconClass, "text-warning")} />;
    case "info":
      return <Info className={cn(iconClass, "text-info")} />;
    default:
      return null;
  }
};

// ============================================================================
// Toast Context & Hook
// ============================================================================

const ToastContext = React.createContext<ToastContextValue | undefined>(
  undefined,
);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastContextProvider");
  }
  return context;
}

// ============================================================================
// Toast Context Provider
// ============================================================================

const ToastContextProvider = ({
  children,
  duration = 5000,
  maxToasts = 5,
}: ToastProviderProps) => {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const toast = React.useCallback(
    (message: Omit<ToastMessage, "id">) => {
      const id = `toast-${Math.random().toString(36).substring(2, 9)}`;
      const newToast: ToastMessage = {
        ...message,
        id,
        duration: message.duration ?? duration,
      };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        return updated.slice(-maxToasts);
      });

      return id;
    },
    [duration, maxToasts],
  );

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const dismissAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss, dismissAll }}>
      <ToastProvider>
        {children}
        {toasts.map((t) => (
          <Toast key={t.id} variant={t.variant} duration={t.duration}>
            <div className="flex items-start gap-3">
              {t.variant && <ToastIcon variant={t.variant} />}
              <div className="grid gap-1">
                {t.title && <ToastTitle>{t.title}</ToastTitle>}
                {t.description && (
                  <ToastDescription>{t.description}</ToastDescription>
                )}
              </div>
            </div>
            {t.action && (
              <ToastAction altText={t.action.label} onClick={t.action.onClick}>
                {t.action.label}
              </ToastAction>
            )}
            <ToastClose onClick={() => dismiss(t.id)} />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
};

// ============================================================================
// Exports
// ============================================================================

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastTitle,
  ToastDescription,
  ToastProvider,
  ToastViewport,
  ToastContextProvider,
  toastVariants,
};
export type {
  ToastProps,
  ToastActionProps,
  ToastCloseProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastViewportProps,
  ToastProviderProps,
  ToastMessage,
  ToastContextValue,
  ToastVariant,
} from "./Toast.types";

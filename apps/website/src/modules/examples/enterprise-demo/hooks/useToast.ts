"use client";

import { useToast as useBizToast } from "biz-ui";

// Re-export with additional helpers
export function useAppToast() {
  const { toast, dismiss, dismissAll, toasts } = useBizToast();

  const success = (title: string, description?: string) => {
    toast({ title, description, variant: "success" });
  };

  const error = (title: string, description?: string) => {
    toast({ title, description, variant: "error" });
  };

  const warning = (title: string, description?: string) => {
    toast({ title, description, variant: "warning" });
  };

  const info = (title: string, description?: string) => {
    toast({ title, description, variant: "info" });
  };

  return {
    toast,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
    toasts,
  };
}

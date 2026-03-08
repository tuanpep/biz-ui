"use client";

import { ToastContextProvider } from "biz-ui";

export function AppToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastContextProvider duration={5000} maxToasts={5}>
      {children}
    </ToastContextProvider>
  );
}

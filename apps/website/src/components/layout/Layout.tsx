import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  /** Hide footer (useful for docs pages with their own footer) */
  hideFooter?: boolean;
}

/**
 * Main layout wrapper with header and footer
 */
export function Layout({ children, hideFooter = false }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-50 dark:opacity-30 pointer-events-none" />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
}

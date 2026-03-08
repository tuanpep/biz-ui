import { Box } from "lucide-react";

/**
 * Site footer
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[var(--site-border)]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Box className="h-6 w-6 text-blue-500" />
            <span className="gradient-text font-bold">Biz UI</span>
          </a>
          <p className="text-sm text-[var(--site-muted)]">
            © {currentYear} Biz UI. Released under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}

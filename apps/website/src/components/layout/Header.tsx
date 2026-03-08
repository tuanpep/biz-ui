import { ArrowRight, Box, Github } from "lucide-react";
import { Button } from "biz-ui";
import { ThemeToggle } from "../ui/ThemeToggle";

const navLinks = [
  { href: "/docs", label: "Documentation" },
  { href: "/components", label: "Components" },
  { href: "/examples", label: "Examples" },
];

/**
 * Site header with navigation
 */
export function Header() {
  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--site-border)] bg-[var(--site-bg)]/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Box className="h-6 w-6 text-blue-500" />
          <span className="gradient-text font-bold">Biz UI</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--site-muted)] hover:text-[var(--site-fg)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://github.com/biz-ui/biz-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-[var(--site-border)] transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <Button className="hidden sm:inline-flex items-center gap-2" asChild>
            <a href="/docs/getting-started">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

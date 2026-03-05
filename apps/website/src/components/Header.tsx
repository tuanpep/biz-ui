import { Link } from "@tanstack/react-router";
import { Button } from "biz-ui";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/theme-context";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-[var(--border)] py-4 px-6 flex justify-between items-center bg-[var(--background)]">
      <Link
        to="/"
        className="flex items-center gap-3 no-underline text-inherit"
      >
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-lg font-bold text-white">
          B
        </div>
        <span className="text-xl font-bold text-[var(--foreground)]">
          Biz UI
        </span>
      </Link>
      <nav className="flex gap-6 items-center">
        <Link
          to="/guide/getting-started"
          className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors text-sm"
          activeProps={{ className: "text-[var(--foreground)] font-medium" }}
        >
          Get Started
        </Link>
        <Link
          to="/components"
          className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors text-sm"
          activeProps={{ className: "text-[var(--foreground)] font-medium" }}
        >
          Components
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded-md text-[var(--muted-text)] hover:text-[var(--foreground)] hover:bg-[var(--muted-bg)] transition-colors"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
        <Button variant="primary" size="md" asChild>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
      </nav>
    </header>
  );
}

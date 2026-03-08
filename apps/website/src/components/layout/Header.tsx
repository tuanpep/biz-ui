"use client";

import { useState, useEffect } from "react";
import { Button, IconButton, Kbd } from "biz-ui";
import { Search, Moon, Sun, Menu, X, ExternalLink } from "lucide-react";

interface HeaderProps {
  currentPath?: string;
}

const navigation = [
  { name: "Docs", href: "/docs/getting-started/introduction" },
  { name: "Components", href: "/docs/components" },
  { name: "Examples", href: "/examples/enterprise-demo" },
  {
    name: "GitHub",
    href: "https://github.com/username/biz-ui",
    external: true,
  },
];

export default function Header({ currentPath = "" }: HeaderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Get initial theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme as "light" | "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const openSearch = () => {
    document.dispatchEvent(new CustomEvent("open-search"));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground no-underline"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
          </div>
          <span className="text-lg">Biz UI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground no-underline transition-colors hover:text-foreground"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.name}
              {item.external && <ExternalLink className="h-3 w-3" />}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search button */}
          <Button
            variant="secondary"
            size="sm"
            onClick={openSearch}
            leftIcon={<Search className="h-4 w-4" />}
            className="gap-2"
          >
            <span className="hidden sm:inline">Search</span>
            <span className="hidden sm:flex items-center gap-1">
              <Kbd className="text-[10px]">⌘</Kbd>
              <Kbd className="text-[10px]">K</Kbd>
            </span>
          </Button>

          {/* Theme toggle */}
          <IconButton
            variant="ghost"
            icon={theme === "light" ? Moon : Sun}
            label="Toggle theme"
            onClick={toggleTheme}
          />

          {/* Mobile menu button */}
          <IconButton
            variant="ghost"
            className="md:hidden"
            icon={mobileMenuOpen ? X : Menu}
            label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col p-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between py-2 text-sm font-medium text-muted-foreground no-underline hover:text-foreground"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                {item.external && <ExternalLink className="h-3 w-3" />}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

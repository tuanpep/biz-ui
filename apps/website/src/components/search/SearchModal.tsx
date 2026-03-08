"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Dialog, DialogContent, Input, Kbd, Spinner } from "biz-ui";
import { Search } from "lucide-react";

interface SearchResult {
  title: string;
  description?: string;
  url: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            window.location.href = results[selectedIndex].url;
            onClose();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    const selectedElement = resultsRef.current?.querySelector(
      `[data-index="${selectedIndex}"]`,
    );
    selectedElement?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // Search function
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    try {
      // In a real implementation, this would use Pagefind or another search solution
      // For now, we'll simulate search with static data
      const staticResults: SearchResult[] = [
        {
          title: "Introduction",
          description: "Get started with Biz UI",
          url: "/docs/getting-started/introduction",
        },
        {
          title: "Installation",
          description: "Install and configure Biz UI",
          url: "/docs/getting-started/installation",
        },
        {
          title: "Theming",
          description: "Customize the look and feel",
          url: "/docs/getting-started/theming",
        },
        {
          title: "Button",
          description: "Button component",
          url: "/docs/components/forms/button",
        },
        {
          title: "Input",
          description: "Input component",
          url: "/docs/components/forms/input",
        },
        {
          title: "Dialog",
          description: "Dialog component",
          url: "/docs/components/overlays/dialog",
        },
        {
          title: "Table",
          description: "Table component",
          url: "/docs/components/data-display/table",
        },
        {
          title: "Toast",
          description: "Toast notifications",
          url: "/docs/components/feedback/toast",
        },
      ];

      const filtered = staticResults.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      setResults(filtered);
      setSelectedIndex(0);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, performSearch]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="relative mx-auto mt-[15vh] max-w-xl border border-border bg-card shadow-2xl p-0 gap-0 overflow-hidden">
        {/* Search input */}
        <div className="flex items-center border-b border-border px-4">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 rounded-none"
            aria-label="Search documentation"
          />
          {isLoading && (
            <Spinner size="sm" className="shrink-0 text-muted-foreground" />
          )}
          <span className="ml-2 hidden sm:block">
            <Kbd size="sm">ESC</Kbd>
          </span>
        </div>

        {/* Results */}
        <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              Start typing to search...
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No results found for &quot;{query}&quot;
            </div>
          ) : (
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li key={result.url}>
                  <a
                    href={result.url}
                    onClick={() => onClose()}
                    data-index={index}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 no-underline transition-colors ${
                      index === selectedIndex
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex-1">
                      <div
                        className={`font-medium ${index === selectedIndex ? "text-primary-foreground" : "text-foreground"}`}
                      >
                        {result.title}
                      </div>
                      {result.description && (
                        <div
                          className={`text-sm ${index === selectedIndex ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                        >
                          {result.description}
                        </div>
                      )}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-4 w-4 shrink-0 ${index === selectedIndex ? "text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Kbd size="sm">↑</Kbd>
              <Kbd size="sm">↓</Kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <Kbd size="sm">↵</Kbd>
              to select
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

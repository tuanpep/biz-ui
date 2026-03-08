"use client";

import { useState, useCallback, useEffect } from "react";
import * as React from "react";
import {
  Button,
  IconButton,
  Textarea,
  Alert,
  AlertTitle,
  AlertDescription,
} from "biz-ui";
import { RotateCcw, Copy, Check } from "lucide-react";

interface PlaygroundProps {
  code: string;
  showEditor?: boolean;
  showPreview?: boolean;
  title?: string;
}

// Simple transpile function using Babel standalone
async function transpileCode(code: string): Promise<string> {
  // Dynamic import for Babel
  const Babel = await import("@babel/standalone");

  return Babel.transform(code, {
    presets: ["react", "typescript"],
    plugins: [],
  }).code;
}

export default function Playground({
  code: initialCode,
  showEditor = true,
  showPreview = true,
  title = "Example",
}: PlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [transpiledCode, setTranspiledCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"split" | "editor" | "preview">(
    "split",
  );

  // Transpile code whenever it changes
  useEffect(() => {
    let mounted = true;

    async function compile() {
      try {
        const result = await transpileCode(code);
        if (mounted) {
          setTranspiledCode(result);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error ? err.message : "Failed to transpile code",
          );
          setTranspiledCode(null);
        }
      }
    }

    compile();

    return () => {
      mounted = false;
    };
  }, [code]);

  // Copy code to clipboard
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [code]);

  // Reset to initial code
  const handleReset = useCallback(() => {
    setCode(initialCode);
  }, [initialCode]);

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
        <span className="text-sm font-medium text-foreground">{title}</span>
        <div className="flex items-center gap-2">
          {/* View mode toggles */}
          <div className="flex rounded-lg border border-border p-0.5">
            <Button
              variant={viewMode === "split" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("split")}
              className="rounded-md px-2 py-1 text-xs h-auto"
            >
              Split
            </Button>
            <Button
              variant={viewMode === "editor" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("editor")}
              className="rounded-md px-2 py-1 text-xs h-auto"
            >
              Code
            </Button>
            <Button
              variant={viewMode === "preview" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("preview")}
              className="rounded-md px-2 py-1 text-xs h-auto"
            >
              Preview
            </Button>
          </div>

          <div className="h-4 w-px bg-border" />

          {/* Actions */}
          <IconButton
            variant="ghost"
            size="sm"
            icon={RotateCcw}
            label="Reset code"
            onClick={handleReset}
            title="Reset code"
          />
          <IconButton
            variant="ghost"
            size="sm"
            icon={copied ? Check : Copy}
            label={copied ? "Copied!" : "Copy code"}
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy code"}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="grid min-h-[200px]"
        style={{
          gridTemplateColumns: viewMode === "split" ? "1fr 1fr" : "1fr",
        }}
      >
        {/* Editor */}
        {(viewMode === "split" || viewMode === "editor") && showEditor && (
          <div className="relative border-r border-border">
            <div className="absolute left-0 top-0 px-3 py-4 text-xs text-muted-foreground select-none">
              <div className="space-y-0.5 font-mono">
                {code.split("\n").map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
            </div>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="h-full min-h-[200px] w-full resize-none rounded-none border-0 bg-transparent p-4 pl-12 font-mono text-sm focus-visible:ring-0"
              spellCheck={false}
            />
          </div>
        )}

        {/* Preview */}
        {(viewMode === "split" || viewMode === "preview") && showPreview && (
          <div className="bg-background p-4">
            {error ? (
              <Alert variant="destructive" className="rounded-lg">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  <pre className="whitespace-pre-wrap mt-1">{error}</pre>
                </AlertDescription>
              </Alert>
            ) : transpiledCode ? (
              <PreviewRenderer code={transpiledCode} />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Loading...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Component to render the transpiled code
function PreviewRenderer({ code }: { code: string }) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Create a function that returns the component
      // In a real implementation, you would need to provide all Biz UI components as scope
      const createComponent = new Function(
        "React",
        `
        ${code}
        return typeof Component !== 'undefined' ? Component : typeof App !== 'undefined' ? App : null;
      `,
      );

      const comp = createComponent(React);
      setComponent(() => comp);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to render component",
      );
      setComponent(null);
    }
  }, [code]);

  if (error) {
    return (
      <Alert variant="destructive" className="rounded-lg">
        <AlertTitle>Render Error</AlertTitle>
        <AlertDescription>
          <pre className="whitespace-pre-wrap mt-1">{error}</pre>
        </AlertDescription>
      </Alert>
    );
  }

  if (!Component) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        No component to render
      </div>
    );
  }

  return (
    <div className="preview-container">
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </div>
  );
}

// Error boundary for catching render errors
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert variant="destructive" className="rounded-lg">
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            <pre className="whitespace-pre-wrap mt-1">
              {this.state.error?.message}
            </pre>
          </AlertDescription>
        </Alert>
      );
    }

    return this.props.children;
  }
}

import { Copy, Check, FileCode } from "lucide-react";
import { useCopyToClipboard } from "../../hooks";
import { cn } from "../../lib/utils";

export interface CodeBlockProps {
  /** The code content to display */
  code: string;
  /** Programming language for syntax badge */
  language?: string;
  /** Filename to display in header */
  filename?: string;
  /** Show copy to clipboard button */
  showCopyButton?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CodeBlock component for displaying code with copy functionality
 */
export function CodeBlock({
  code,
  language,
  filename,
  showCopyButton = true,
  className,
}: CodeBlockProps) {
  const { copiedText, copy, reset } = useCopyToClipboard();
  const isCopied = copiedText === code;

  const handleCopy = async () => {
    await copy(code);
    // Reset after 2 seconds
    setTimeout(() => {
      reset();
    }, 2000);
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--site-border)] bg-[var(--site-card)] overflow-hidden",
        className,
      )}
    >
      {/* Header */}
      {(filename || language || showCopyButton) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--site-border)] bg-[var(--site-bg)]">
          <div className="flex items-center gap-2">
            {filename && (
              <div className="flex items-center gap-2 text-sm text-[var(--site-muted)]">
                <FileCode className="h-4 w-4" />
                <span>{filename}</span>
              </div>
            )}
            {language && !filename && (
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-[var(--site-border)] text-[var(--site-muted)]">
                {language}
              </span>
            )}
          </div>
          {showCopyButton && (
            <button
              onClick={handleCopy}
              className={cn(
                "p-1.5 rounded-md transition-colors",
                "hover:bg-[var(--site-border)]",
                "focus:outline-none focus:ring-2 focus:ring-[var(--site-accent)]",
              )}
              aria-label={isCopied ? "Copied!" : "Copy code"}
            >
              {isCopied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-[var(--site-muted)]" />
              )}
            </button>
          )}
        </div>
      )}

      {/* Code content */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-[var(--site-fg)]">{code}</code>
      </pre>
    </div>
  );
}

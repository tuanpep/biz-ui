import { useState, useCallback } from "react";

interface UseCopyToClipboardReturn {
  copiedText: string | null;
  error: Error | null;
  copy: (text: string) => Promise<boolean>;
  reset: () => void;
}

/**
 * Hook for copying text to clipboard
 * @returns Object with copiedText, error, copy function, and reset function
 */
export function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setError(null);
      return true;
    } catch (err) {
      setCopiedText(null);
      setError(err instanceof Error ? err : new Error("Failed to copy"));
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setCopiedText(null);
    setError(null);
  }, []);

  return { copiedText, error, copy, reset };
}

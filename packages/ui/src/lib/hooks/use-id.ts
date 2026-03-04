import * as React from "react";
import { useState, useEffect } from "react";

// Server-side rendering check
const canUseDOM = typeof window !== "undefined";

// Global ID counter for SSR consistency
let serverGeneratedId = 0;

/**
 * Generate a unique ID with optional prefix.
 * Compatible with React 18+ useId when available, with SSR fallback.
 *
 * @example
 * ```tsx
 * const id = useId(); // "biz-1"
 * const id = useId('input'); // "input-1"
 * const id = useId(undefined, 'custom-id'); // "custom-id" (uses provided ID)
 * ```
 */
export function useId(prefix: string = "biz", providedId?: string): string {
  // 1. Get native React ID if available
  // We call it unconditionally to follow Hook rules
  const reactId = React.useId();

  // 2. State-based fallback for older React Versions or custom needs
  // We use prefix as key to reset if it changes
  const [fallbackId, setFallbackId] = useState(() => {
    if (providedId) return "";
    if (!canUseDOM) {
      serverGeneratedId += 1;
      return `${prefix}-${serverGeneratedId}`;
    }
    return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
  });

  // Client-side hydration safety
  useEffect(() => {
    if (providedId || !canUseDOM) return;
    // Ensure unique ID on client after hydration
    setFallbackId(`${prefix}-${Math.random().toString(36).slice(2, 9)}`);
  }, [prefix, providedId]);

  // Priority: Provided ID > React.useId > Fallback
  if (providedId) return providedId;
  return reactId ? `${prefix}-${reactId}` : fallbackId;
}

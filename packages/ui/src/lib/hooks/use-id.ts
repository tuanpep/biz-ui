import * as React from 'react';

// Server-side rendering check
const canUseDOM = typeof window !== 'undefined';

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
export function useId(prefix: string = 'biz', providedId?: string): string {
  // If an ID is provided, use it directly
  if (providedId) {
    return providedId;
  }

  // React 18+ has built-in useId hook
  if ('useId' in React) {
    const id = (React as typeof React & { useId: () => string }).useId();
    return `${prefix}-${id}`;
  }

  // Fallback for React < 18 or SSR
  const [id, setId] = React.useState(() => {
    // On server, use a counter
    if (!canUseDOM) {
      serverGeneratedId += 1;
      return `${prefix}-${serverGeneratedId}`;
    }
    // On client, generate random ID
    return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
  });

  // On client hydration, ensure uniqueness
  React.useEffect(() => {
    if (!canUseDOM) return;
    setId(`${prefix}-${Math.random().toString(36).slice(2, 9)}`);
  }, [prefix]);

  return id;
}

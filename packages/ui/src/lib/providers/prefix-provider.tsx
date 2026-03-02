/**
 * Prefix Provider for Biz UI components.
 * Allows customization of CSS class prefixes.
 * Following Carbon's usePrefix pattern.
 *
 * @example
 * ```tsx
 * import { PrefixProvider, usePrefix } from '@repo/ui';
 *
 * function App() {
 *   return (
 *     <PrefixProvider prefix="my-app">
 *       <MyComponent />
 *     </PrefixProvider>
 *   );
 * }
 *
 * function MyComponent() {
 *   const prefix = usePrefix(); // 'my-app'
 *   return <div className={`${prefix}-container`}>...</div>;
 * }
 * ```
 */

import * as React from 'react';
import { createContext } from '../utils/create-context';

// ============================================================================
// Context
// ============================================================================

const [PrefixContextProvider, usePrefixContext, PrefixContext] = createContext<{
  prefix: string;
}>({
  name: 'Prefix',
  defaultValue: { prefix: 'biz' },
});

// ============================================================================
// Provider Props
// ============================================================================

export interface PrefixProviderProps {
  /** CSS class prefix (default: 'biz') */
  prefix?: string;
  /** Child components */
  children: React.ReactNode;
}

// ============================================================================
// Provider Component
// ============================================================================

export function PrefixProvider({
  prefix = 'biz',
  children,
}: PrefixProviderProps): JSX.Element {
  const value = React.useMemo(() => ({ prefix }), [prefix]);

  return (
    <PrefixContextProvider value={value}>{children}</PrefixContextProvider>
  );
}

// ============================================================================
// Hook
// ============================================================================

/**
 * Get the current CSS class prefix.
 * Returns 'biz' by default.
 *
 * @example
 * ```tsx
 * const prefix = usePrefix(); // 'biz'
 * const className = `${prefix}-button`; // 'biz-button'
 * ```
 */
export function usePrefix(): string {
  const { prefix } = usePrefixContext();
  return prefix;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Add prefix to a class name.
 *
 * @example
 * ```tsx
 * const className = addPrefix('button', 'biz'); // 'biz-button'
 * const className = addPrefix(['button', 'primary'], 'biz'); // 'biz-button biz-primary'
 * ```
 */
export function addPrefix(
  className: string | string[],
  prefix: string
): string {
  if (Array.isArray(className)) {
    return className.map((c) => `${prefix}-${c}`).join(' ');
  }
  return `${prefix}-${className}`;
}

/**
 * Create a prefixed class name generator.
 *
 * @example
 * ```tsx
 * const cx = createPrefixedClass('biz');
 * cx('button'); // 'biz-button'
 * cx('button', 'primary'); // 'biz-button biz-primary'
 * ```
 */
export function createPrefixedClass(prefix: string) {
  return (...classNames: (string | undefined | null | false)[]) => {
    return classNames
      .filter(Boolean)
      .map((c) => `${prefix}-${c}`)
      .join(' ');
  };
}

// ============================================================================
// Exports
// ============================================================================

export { PrefixContext };

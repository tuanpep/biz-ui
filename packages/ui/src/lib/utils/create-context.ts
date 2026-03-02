import * as React from 'react';

/**
 * Create a type-safe React context with proper defaults.
 * This utility ensures that context values are always defined,
 * eliminating the need for null checks in consumer components.
 *
 * When `strict` is true (default), using the context outside of its
 * Provider will throw an error. When false, the `defaultValue` is returned.
 *
 * @example
 * ```tsx
 * const [MyContextProvider, useMyContext, MyContext] = createContext<MyContextValue>({
 *   name: 'MyContext',
 *   defaultValue: { theme: 'light' },
 * });
 * ```
 */

interface CreateContextOptions<T> {
  /** The display name for the context (used in React DevTools) */
  name: string;
  /** Default value for the context (used when strict is false) */
  defaultValue: T;
  /** Whether to throw if context is used outside provider (default: true) */
  strict?: boolean;
}

type CreateContextReturn<T> = [
  /** The provider component */
  React.Provider<T>,
  /** Hook to access context value */
  () => T,
  /** The raw context object (for advanced use) */
  React.Context<T | null>,
];

export function createContext<T>(options: CreateContextOptions<T>): CreateContextReturn<T> {
  const { name, defaultValue, strict = true } = options;

  // Use null as internal default to detect missing provider
  const Context = React.createContext<T | null>(null);
  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (context === null) {
      if (strict) {
        throw new Error(
          `use${name} must be used within a ${name}Provider. ` +
          `Make sure to wrap your component tree with <${name}Provider>.`
        );
      }
      return defaultValue;
    }

    return context;
  }

  // Cast Provider to accept T (not T | null) since we control the internal null
  return [Context.Provider as React.Provider<T>, useContext, Context];
}


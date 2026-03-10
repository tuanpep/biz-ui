import * as React from "react";

/**
 * SSR-safe useLayoutEffect.
 * Falls back to useEffect on the server to avoid warnings.
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   useIsomorphicLayoutEffect(() => {
 *     // DOM measurements here
 *   }, []);
 * };
 * ```
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

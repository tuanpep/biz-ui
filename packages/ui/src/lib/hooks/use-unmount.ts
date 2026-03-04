import * as React from "react";

/**
 * Run a cleanup function when the component unmounts.
 * Useful for cleaning up subscriptions, timers, etc.
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   useUnmount(() => {
 *     console.log('Component unmounted');
 *   });
 * };
 * ```
 */
export function useUnmount(cleanup: () => void): void {
  const cleanupRef = React.useRef(cleanup);
  cleanupRef.current = cleanup;

  React.useEffect(
    () => () => {
      cleanupRef.current();
    },
    [],
  );
}

/**
 * Run a callback when the component mounts.
 * Prefer React.useEffect directly when possible.
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   useMount(() => {
 *     console.log('Component mounted');
 *   });
 * };
 * ```
 */
export function useMount(callback: () => void | (() => void)): void {
  React.useEffect(() => {
    return callback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

import * as React from 'react';

/**
 * A hook that returns the latest callback without causing re-renders.
 * Useful for event handlers that need access to the latest props/state.
 *
 * @example
 * ```tsx
 * const MyComponent = ({ onClick }) => {
 *   const handleClick = useCallbackRef(onClick);
 *
 *   React.useEffect(() => {
 *     window.addEventListener('click', handleClick);
 *     return () => window.removeEventListener('click', handleClick);
 *   }, [handleClick]);
 * };
 * ```
 */
export function useCallbackRef<T extends (...args: unknown[]) => unknown>(
  callback: T | undefined
): T {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  return React.useCallback(((...args) => callbackRef.current?.(...args)) as T, []);
}

/**
 * A hook that creates a stable callback that can be updated.
 * Returns a tuple of [callback, setCallback].
 */
export function useStableCallback<T extends (...args: unknown[]) => unknown>(
  initialCallback: T
): [T, (callback: T) => void] {
  const callbackRef = React.useRef<T>(initialCallback);
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const setCallback = React.useCallback((callback: T) => {
    callbackRef.current = callback;
    forceUpdate();
  }, []);

  const callback = React.useCallback(((...args) => callbackRef.current(...args)) as T, []);

  return [callback, setCallback];
}

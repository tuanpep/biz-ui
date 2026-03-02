import * as React from 'react';

/**
 * Store the previous value of a variable.
 * Useful for comparing current and previous values.
 *
 * @example
 * ```tsx
 * const MyComponent = ({ count }) => {
 *   const prevCount = usePrevious(count);
 *
 *   React.useEffect(() => {
 *     if (count !== prevCount) {
 *       console.log(`Count changed from ${prevCount} to ${count}`);
 *     }
 *   }, [count, prevCount]);
 * };
 * ```
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/**
 * Store a value and return it even after it becomes undefined.
 * Useful for holding onto values during animations or transitions.
 *
 * @example
 * ```tsx
 * const MyComponent = ({ isOpen }) => {
 *   // Keep the content visible during exit animation
 *   const wasOpen = usePreviousOrCurrent(isOpen);
 *   return wasOpen ? <div>Content</div> : null;
 * };
 * ```
 */
export function usePreviousOrCurrent<T>(value: T): T {
  const ref = React.useRef<T>(value);

  if (value !== undefined) {
    ref.current = value;
  }

  return ref.current;
}

import * as React from "react";

/**
 * Copyright (c) 2024 Biz UI Contributors
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on Carbon's useDelayedState hook.
 */

/**
 * Dispatch function with optional delay parameter.
 */
export type DispatchWithDelay<A> = (value: A, delayMs?: number) => void;

/**
 * `useDelayedState` mirrors `useState` but also allows you to add a delay to
 * when your state updates. You can provide a second argument to `setState`,
 * `delayMs`, which will be the time in milliseconds after which the state is
 * updated.
 *
 * This hook will clean up pending timers in `useEffect` and will cancel any
 * pending timers when a `setState` is called before the state is updated from
 * a previous call.
 *
 * @param initialState - The initial state value
 * @returns Tuple of [state, setStateWithDelay]
 *
 * @example
 * ```tsx
 * const Toast = () => {
 *   const [visible, setVisible] = useDelayedState(false);
 *
 *   const showToast = () => {
 *     setVisible(true);
 *     // Hide after 3 seconds
 *     setVisible(false, 3000);
 *   };
 *
 *   return visible ? <div>Toast message</div> : null;
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Debounced search
 * const [query, setQuery] = useDelayedState('');
 *
 * const handleChange = (e) => {
 *   // Update after 300ms of no typing
 *   setQuery(e.target.value, 300);
 * };
 * ```
 */
export function useDelayedState<S>(
  initialState: S | (() => S),
): [S, DispatchWithDelay<React.SetStateAction<S>>] {
  const [state, setState] = React.useState<S>(initialState);
  const timeoutId = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // We use `useCallback` to match the signature of React's `useState` which will
  // always return the same reference for the `setState` updater
  const setStateWithDelay = React.useCallback(
    (stateToSet: React.SetStateAction<S>, delayMs: number = 0) => {
      // Clear any pending timer
      if (timeoutId.current !== null) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }

      if (delayMs === 0) {
        setState(stateToSet);
        return;
      }

      timeoutId.current = setTimeout(() => {
        setState(stateToSet);
        timeoutId.current = null;
      }, delayMs);
    },
    [],
  );

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutId.current !== null) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return [state, setStateWithDelay];
}

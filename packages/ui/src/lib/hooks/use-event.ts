import * as React from "react";

/**
 * Copyright (c) 2024 Biz UI Contributors
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on Carbon's useEvent hook.
 */

/**
 * Hook for subscribing to DOM events on an element.
 * Automatically handles cleanup and callback updates.
 *
 * @param elementOrRef - HTMLElement or React ref to attach listener to
 * @param eventName - Name of the event to listen for
 * @param callback - Callback function to execute on event
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *
 *   useEvent(ref, 'click', (e) => {
 *     console.log('Clicked!', e);
 *   });
 *
 *   return <div ref={ref}>Click me</div>;
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Using with direct element
 * useEvent(document.body, 'scroll', handleScroll);
 * ```
 */
export function useEvent<E extends keyof HTMLElementEventMap>(
  elementOrRef: HTMLElement | React.RefObject<Element | null>,
  eventName: E,
  callback: (event: HTMLElementEventMap[E]) => void,
): void {
  const savedCallback = React.useRef<
    ((event: HTMLElementEventMap[E]) => void) | null
  >(null);

  // Keep callback ref updated
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const element =
      "current" in elementOrRef ? elementOrRef.current : elementOrRef;
    if (!element) return;

    const handler = (event: HTMLElementEventMap[E]) => {
      if (savedCallback.current) {
        savedCallback.current(event);
      }
    };

    element.addEventListener(eventName, handler as EventListener);

    return () => {
      element.removeEventListener(eventName, handler as EventListener);
    };
  }, [elementOrRef, eventName]);
}

/**
 * Hook for subscribing to window events.
 * Automatically handles cleanup and callback updates.
 *
 * @param eventName - Name of the window event to listen for
 * @param callback - Callback function to execute on event
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const [size, setSize] = React.useState({ width: 0, height: 0 });
 *
 *   useWindowEvent('resize', () => {
 *     setSize({
 *       width: window.innerWidth,
 *       height: window.innerHeight
 *     });
 *   });
 *
 *   return <div>Window: {size.width}x{size.height}</div>;
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Keyboard shortcuts
 * useWindowEvent('keydown', (e) => {
 *   if (e.key === 'Escape') {
 *     closeModal();
 *   }
 * });
 * ```
 */
export function useWindowEvent<E extends keyof WindowEventMap>(
  eventName: E,
  callback: (event: WindowEventMap[E]) => void,
): void {
  const savedCallback = React.useRef<
    ((event: WindowEventMap[E]) => void) | null
  >(null);

  // Keep callback ref updated
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const handler = (event: WindowEventMap[E]) => {
      if (savedCallback.current) {
        savedCallback.current(event);
      }
    };

    window.addEventListener(eventName, handler);

    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, [eventName]);
}

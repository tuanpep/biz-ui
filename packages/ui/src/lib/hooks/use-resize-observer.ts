import * as React from "react";

/**
 * Copyright (c) 2024 Biz UI Contributors
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on Carbon's useResizeObserver hook.
 */

/**
 * Hook for observing element resize changes.
 * Uses ResizeObserver API to detect when an element's size changes.
 *
 * @param ref - React ref to the element to observe
 * @param onResize - Optional callback fired when resize occurs
 * @returns Object with current width and height
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *   const { width, height } = useResizeObserver({
 *     ref,
 *     onResize: (rect) => console.log('Resized:', rect.width, rect.height)
 *   });
 *
 *   return <div ref={ref}>Width: {width}, Height: {height}</div>;
 * };
 * ```
 */
export function useResizeObserver({
  ref,
  onResize,
}: {
  /** React ref to the element to observe */
  ref: React.RefObject<HTMLElement | null>;
  /** Optional callback fired when resize occurs */
  onResize?: (rect: DOMRectReadOnly) => void;
}): {
  /** Current width of the element (excluding padding) */
  width: number;
  /** Current height of the element (excluding padding) */
  height: number;
} {
  const [width, setWidth] = React.useState(-1);
  const [height, setHeight] = React.useState(-1);
  const entriesToHandle = React.useRef<ResizeObserverEntry[] | null>(null);
  const callbackRef = React.useRef(onResize);

  // Keep callback ref updated to avoid dependency issues
  React.useEffect(() => {
    callbackRef.current = onResize;
  }, [onResize]);

  // Get initial size on mount
  React.useEffect(() => {
    const getInitialSize = () => {
      if (ref.current) {
        const computedStyle = window.getComputedStyle(ref.current);

        const initialWidth =
          (ref.current.offsetWidth ?? 0) -
          parseFloat(computedStyle.paddingLeft || "0") -
          parseFloat(computedStyle.paddingRight || "0");

        const initialHeight =
          (ref.current.offsetHeight ?? 0) -
          parseFloat(computedStyle.paddingTop || "0") -
          parseFloat(computedStyle.paddingBottom || "0");

        setWidth(initialWidth);
        setHeight(initialHeight);
      }
    };

    if (!ref?.current || (width >= 0 && height >= 0)) {
      return;
    }

    getInitialSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  // Set up ResizeObserver
  React.useLayoutEffect(() => {
    if (!ref?.current) {
      return;
    }

    const doCallbacks = () => {
      if (!ref?.current || !Array.isArray(entriesToHandle?.current)) {
        return;
      }

      const entry = entriesToHandle.current[0];

      if (entry) {
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);

        callbackRef.current?.(entry.contentRect);
      }
    };

    const observer = new ResizeObserver((entries) => {
      entriesToHandle.current = entries;

      window.requestAnimationFrame(() => {
        doCallbacks();
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { width, height };
}

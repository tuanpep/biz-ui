import * as React from 'react';

type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * Merge multiple refs into a single callback ref.
 * Useful when a component needs to forward refs while also using its own ref.
 *
 * @example
 * ```tsx
 * const MyComponent = React.forwardRef<HTMLInputElement, Props>(
 *   (props, forwardedRef) => {
 *     const internalRef = React.useRef<HTMLInputElement>(null);
 *     const mergedRef = useMergedRefs(forwardedRef, internalRef);
 *
 *     return <input ref={mergedRef} {...props} />;
 *   }
 * );
 * ```
 */
export function useMergedRefs<T>(...refs: PossibleRef<T>[]): React.RefCallback<T> {
  return React.useCallback((element: T | null) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref !== null && ref !== undefined) {
        (ref as React.MutableRefObject<T | null>).current = element;
      }
    }
  }, refs);
}

/**
 * Assign a value to a ref.
 * Utility function used internally by useMergedRefs.
 */
export function assignRef<T>(ref: PossibleRef<T>, value: T | null): void {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T | null>).current = value;
  }
}

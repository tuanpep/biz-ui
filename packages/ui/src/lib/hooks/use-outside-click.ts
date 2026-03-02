import * as React from 'react';

/**
 * Handle clicks outside of a referenced element.
 * Useful for closing dropdowns, modals, etc.
 *
 * @example
 * ```tsx
 * const Dropdown = () => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *   const [isOpen, setIsOpen] = React.useState(false);
 *
 *   useOutsideClick(ref, () => setIsOpen(false));
 *
 *   return isOpen ? <div ref={ref}>...</div> : null;
 * };
 * ```
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
): void {
  React.useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (!element) return;

      // Do nothing if clicking inside the element
      if (element.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    // Use mousedown for immediate response
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, enabled]);
}

/**
 * Handle clicks outside of multiple elements.
 * Useful when you have multiple refs that should all prevent the handler.
 *
 * @example
 * ```tsx
 * const MultiRefDropdown = () => {
 *   const triggerRef = React.useRef<HTMLButtonElement>(null);
 *   const contentRef = React.useRef<HTMLDivElement>(null);
 *
 *   useOutsideClickMultiple([triggerRef, contentRef], () => setIsOpen(false));
 * };
 * ```
 */
export function useOutsideClickMultiple<T extends HTMLElement>(
  refs: React.RefObject<T | null>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
): void {
  React.useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if click is inside any of the refs
      const isInside = refs.some((ref) => {
        const element = ref.current;
        return element && element.contains(event.target as Node);
      });

      if (isInside) return;

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler, enabled]);
}

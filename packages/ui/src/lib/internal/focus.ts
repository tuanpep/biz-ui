import * as React from "react";

/**
 * Focus management utilities for Biz UI components.
 * Following Carbon's focus handling patterns.
 */

// Focusable element selectors
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
]
  .map((selector) => `${selector}:not([hidden])`)
  .join(", ");

/**
 * Get all focusable elements within a container.
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  );
}

/**
 * Get the first focusable element within a container.
 */
export function getFirstFocusableElement(
  container: HTMLElement,
): HTMLElement | null {
  const elements = getFocusableElements(container);
  return elements.length > 0 ? (elements[0] ?? null) : null;
}

/**
 * Get the last focusable element within a container.
 */
export function getLastFocusableElement(
  container: HTMLElement,
): HTMLElement | null {
  const elements = getFocusableElements(container);
  return elements.length > 0 ? (elements[elements.length - 1] ?? null) : null;
}

/**
 * Focus the first focusable element within a container.
 */
export function focusFirstElement(container: HTMLElement): boolean {
  const element = getFirstFocusableElement(container);
  if (element) {
    element.focus();
    return true;
  }
  return false;
}

/**
 * Focus the last focusable element within a container.
 */
export function focusLastElement(container: HTMLElement): boolean {
  const element = getLastFocusableElement(container);
  if (element) {
    element.focus();
    return true;
  }
  return false;
}

/**
 * Trap focus within a container (for modals, dialogs, etc.)
 * Returns cleanup function.
 *
 * @example
 * ```tsx
 * const Modal = () => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *
 *   React.useEffect(() => {
 *     if (ref.current) {
 *       return trapFocus(ref.current);
 *     }
 *   }, []);
 *
 *   return <div ref={ref}>...</div>;
 * };
 * ```
 */
export function trapFocus(container: HTMLElement): () => void {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Tab") return;

    const focusableElements = getFocusableElements(container);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0]!;
    const lastElement = focusableElements[focusableElements.length - 1]!;

    if (event.shiftKey) {
      // Shift+Tab: if on first element, move to last
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: if on last element, move to first
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  container.addEventListener("keydown", handleKeyDown);

  // Focus first element
  focusFirstElement(container);

  return () => {
    container.removeEventListener("keydown", handleKeyDown);
  };
}

/**
 * A hook for trapping focus within a container.
 *
 * @example
 * ```tsx
 * const Modal = ({ isOpen }) => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *   useFocusTrap(ref, isOpen);
 *
 *   return isOpen ? <div ref={ref}>...</div> : null;
 * };
 * ```
 */
export function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  enabled: boolean = true,
): void {
  React.useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const cleanup = trapFocus(containerRef.current);
    return cleanup;
  }, [enabled, containerRef]);
}

/**
 * Save and restore focus (useful for modals).
 *
 * @example
 * ```tsx
 * const Modal = ({ isOpen }) => {
 *   const savedFocus = useSavedFocus(isOpen);
 *
 *   // When modal closes, focus is restored
 * };
 * ```
 */
export function useSavedFocus(shouldSave: boolean): void {
  const savedFocus = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (shouldSave) {
      savedFocus.current = document.activeElement as HTMLElement;
    } else if (savedFocus.current) {
      savedFocus.current.focus();
      savedFocus.current = null;
    }
  }, [shouldSave]);
}

/**
 * A hook that returns focus to the trigger element when the component unmounts.
 *
 * @example
 * ```tsx
 * const Popover = ({ triggerRef }) => {
 *   useReturnFocus(triggerRef);
 * };
 * ```
 */
export function useReturnFocus(
  triggerRef: React.RefObject<HTMLElement | null>,
  enabled: boolean = true,
): void {
  React.useEffect(() => {
    if (!enabled) return;
    const node = triggerRef.current;

    return () => {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        node?.focus();
      }, 0);
    };
  }, [enabled, triggerRef]);
}

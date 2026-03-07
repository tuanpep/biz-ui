import * as React from "react";

/**
 * Focus management utilities for Biz UI components.
 * Following Carbon's focus handling patterns.
 */

// ============================================================================
// Constants
// ============================================================================

/**
 * CSS selector that selects major nodes that are sequentially focusable.
 * Matches Carbon's selectorTabbable for compatibility.
 */
export const selectorTabbable = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;

/**
 * CSS selector that selects major nodes that are click focusable.
 */
export const selectorFocusable = `
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`;

// Focusable element selectors (legacy support)
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
 * A flag `node.compareDocumentPosition(target)` returns that indicates
 * `target` is located earlier than `node` in the document or `target` contains `node`.
 */
const DOCUMENT_POSITION_BROAD_PRECEDING =
  typeof Node !== "undefined"
    ? Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS
    : 0;

/**
 * A flag `node.compareDocumentPosition(target)` returns that indicates
 * `target` is located later than `node` in the document or `node` contains `target`.
 */
const DOCUMENT_POSITION_BROAD_FOLLOWING =
  typeof Node !== "undefined"
    ? Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY
    : 0;

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

// ============================================================================
// Focus Wrapping Utilities (Carbon Pattern)
// ============================================================================

/**
 * Checks whether the given node or one of its ancestors matches any of the
 * specified floating menu selectors.
 *
 * @param node - A DOM node.
 * @param selectorsFloatingMenus - Additional CSS selectors that match floating menus.
 * @param prefix - Classname prefix for Biz UI selectors.
 * @returns Whether the node or one of its ancestors is in a floating menu.
 */
export function elementOrParentIsFloatingMenu(
  node: Node,
  selectorsFloatingMenus: string[] = [],
  prefix = "biz",
): boolean {
  if (node instanceof Element && typeof node.closest === "function") {
    const allSelectorsFloatingMenus = [
      `.${prefix}--overflow-menu-options`,
      `.${prefix}--tooltip`,
      ".flatpickr-calendar",
      ...selectorsFloatingMenus,
    ];

    return allSelectorsFloatingMenus.some(
      (selector) => !!node.closest(selector),
    );
  }

  return false;
}

/**
 * Ensures the focus is kept within the given container by implementing
 * "focus-wrap" behavior using sentinel nodes.
 *
 * This is used in modal dialogs and similar components where focus should
 * wrap from the last focusable element to the first when Tab is pressed,
 * and from first to last when Shift+Tab is pressed.
 *
 * @example
 * ```tsx
 * // In a modal component, call this in a focusout handler
 * const handleFocusOut = (event) => {
 *   wrapFocus({
 *     bodyNode: modalRef.current,
 *     startTrapNode: startSentinelRef.current,
 *     endTrapNode: endSentinelRef.current,
 *     currentActiveNode: event.relatedTarget as HTMLElement,
 *     oldActiveNode: document.activeElement as HTMLElement,
 *   });
 * };
 * ```
 */
export function wrapFocus({
  bodyNode,
  startTrapNode,
  endTrapNode,
  currentActiveNode,
  oldActiveNode,
  selectorsFloatingMenus,
  prefix = "biz",
}: {
  /** The DOM node of the container. */
  bodyNode: HTMLElement | null;
  /** The start sentinel node for focus trapping. */
  startTrapNode: HTMLElement | null;
  /** The end sentinel node for focus trapping. */
  endTrapNode: HTMLElement | null;
  /** The current active node (i.e., the one with focus). */
  currentActiveNode: HTMLElement;
  /** The previous active node (i.e., the one that had focus before). */
  oldActiveNode: HTMLElement;
  /** CSS selectors for floating menus. */
  selectorsFloatingMenus?: string[];
  /** Classname prefix for Biz UI selectors. */
  prefix?: string;
}): void {
  if (
    bodyNode &&
    currentActiveNode &&
    oldActiveNode &&
    !bodyNode.contains(currentActiveNode) &&
    !elementOrParentIsFloatingMenu(
      currentActiveNode,
      selectorsFloatingMenus,
      prefix,
    )
  ) {
    const comparisonResult =
      oldActiveNode.compareDocumentPosition(currentActiveNode);

    if (
      currentActiveNode === startTrapNode ||
      comparisonResult & DOCUMENT_POSITION_BROAD_PRECEDING
    ) {
      // Focus moved to an element before the container - wrap to last element
      const tabbableElement = Array.from(
        bodyNode.querySelectorAll<HTMLElement>(selectorTabbable),
      )
        .reverse()
        .find(({ offsetParent }) => Boolean(offsetParent));

      if (tabbableElement) {
        tabbableElement.focus();
      } else if (bodyNode !== oldActiveNode) {
        bodyNode.focus();
      }
    } else if (
      currentActiveNode === endTrapNode ||
      comparisonResult & DOCUMENT_POSITION_BROAD_FOLLOWING
    ) {
      // Focus moved to an element after the container - wrap to first element
      const tabbableElement = Array.from(
        bodyNode.querySelectorAll<HTMLElement>(selectorTabbable),
      ).find(({ offsetParent }) => Boolean(offsetParent));

      if (tabbableElement) {
        tabbableElement.focus();
      } else if (bodyNode !== oldActiveNode) {
        bodyNode.focus();
      }
    }
  }
}

/**
 * Ensures the focus is kept in the given container, implementing "focus-wrap"
 * behavior without using sentinel nodes.
 *
 * Note: This must be called *before* focus moves using `onKeyDown` or similar.
 * This works with Tab key events, not focus/focusout events.
 *
 * @example
 * ```tsx
 * const handleKeyDown = (event) => {
 *   if (event.key === 'Tab') {
 *     wrapFocusWithoutSentinels({
 *       containerNode: containerRef.current,
 *       currentActiveNode: document.activeElement as HTMLElement,
 *       event,
 *     });
 *   }
 * };
 * ```
 */
export function wrapFocusWithoutSentinels({
  containerNode,
  currentActiveNode,
  event,
}: {
  /** The container node within which to keep focus. */
  containerNode: HTMLElement;
  /** The current active node (i.e., the one with focus). */
  currentActiveNode: HTMLElement;
  /** The keyboard event that triggered this function. */
  event: React.KeyboardEvent | KeyboardEvent;
}): void {
  if (!containerNode) return;

  if (
    ["blur", "focusout", "focusin", "focus"].includes(event.type) &&
    process.env.NODE_ENV !== "production"
  ) {
    throw new Error(
      `Error: wrapFocusWithoutSentinels(...) called in unsupported ${event.type} event.\n\nCall wrapFocusWithoutSentinels(...) from onKeyDown instead.`,
    );
  }

  // Get all focusable elements in DOM order
  const tabbables = Array.from(
    containerNode.querySelectorAll<HTMLElement>(selectorTabbable),
  ).filter(({ offsetParent }) => Boolean(offsetParent));

  if (tabbables.length === 0) return;

  const firstTabbable = tabbables[0];
  const lastTabbable = tabbables[tabbables.length - 1];

  // The shift key indicates if focus is moving forwards or backwards
  if (currentActiveNode === lastTabbable && !event.shiftKey) {
    // At last element, moving forward - wrap to first
    event.preventDefault();
    firstTabbable?.focus();
  }

  if (currentActiveNode === firstTabbable && event.shiftKey) {
    // At first element, moving backward - wrap to last
    event.preventDefault();
    lastTabbable?.focus();
  }
}

/**
 * A hook for focus wrapping without sentinel nodes.
 * Useful for components like menus, dropdowns, etc.
 *
 * @example
 * ```tsx
 * const Menu = () => {
 *   const ref = React.useRef<HTMLDivElement>(null);
 *   const { onKeyDown } = useWrapFocus(ref);
 *
 *   return <div ref={ref} onKeyDown={onKeyDown}>...</div>;
 * };
 * ```
 */
export function useWrapFocus(
  containerRef: React.RefObject<HTMLElement | null>,
  enabled: boolean = true,
): {
  onKeyDown: (event: React.KeyboardEvent) => void;
} {
  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (!enabled || !containerRef.current) return;

      if (event.key === "Tab") {
        wrapFocusWithoutSentinels({
          containerNode: containerRef.current,
          currentActiveNode: document.activeElement as HTMLElement,
          event,
        });
      }
    },
    [enabled, containerRef],
  );

  return { onKeyDown };
}

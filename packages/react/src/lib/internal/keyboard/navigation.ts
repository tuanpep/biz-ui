import * as React from "react";
import { keys } from "./keys";

/**
 * Get the next index for arrow key navigation.
 *
 * @param currentIndex - Current focused index
 * @param totalItems - Total number of items
 * @param direction - 'up' or 'down'
 * @param loop - Whether to loop around at boundaries
 */
export function getNextIndex(
  currentIndex: number,
  totalItems: number,
  direction: "up" | "down",
  loop: boolean = true,
): number {
  if (totalItems === 0) return -1;

  if (direction === "down") {
    if (currentIndex === totalItems - 1) {
      return loop ? 0 : currentIndex;
    }
    return currentIndex + 1;
  }

  if (direction === "up") {
    if (currentIndex === 0) {
      return loop ? totalItems - 1 : currentIndex;
    }
    return currentIndex - 1;
  }

  return currentIndex;
}

/**
 * Get the next index for horizontal navigation.
 */
export function getNextIndexHorizontal(
  currentIndex: number,
  totalItems: number,
  direction: "left" | "right",
  loop: boolean = true,
): number {
  return getNextIndex(
    currentIndex,
    totalItems,
    direction === "right" ? "down" : "up",
    loop,
  );
}

/**
 * Get the first or last index.
 */
export function getBoundaryIndex(
  totalItems: number,
  boundary: "first" | "last",
): number {
  if (totalItems === 0) return -1;
  return boundary === "first" ? 0 : totalItems - 1;
}

/**
 * Handle arrow key navigation for a list of items.
 * Returns the new index to focus.
 *
 * @example
 * ```tsx
 * const [focusedIndex, setFocusedIndex] = React.useState(0);
 *
 * const handleKeyDown = (event) => {
 *   const nextIndex = handleArrowNavigation(event, focusedIndex, items.length);
 *   if (nextIndex !== null) {
 *     setFocusedIndex(nextIndex);
 *   }
 * };
 * ```
 */
export function handleArrowNavigation(
  event: KeyboardEvent,
  currentIndex: number,
  totalItems: number,
  options: {
    /** Enable horizontal navigation with arrow keys */
    horizontal?: boolean;
    /** Enable vertical navigation with arrow keys */
    vertical?: boolean;
    /** Loop around at boundaries */
    loop?: boolean;
    /** Also handle Home/End keys */
    handleHomeEnd?: boolean;
  } = {},
): number | null {
  const {
    horizontal = true,
    vertical = true,
    loop = true,
    handleHomeEnd = true,
  } = options;

  switch (event.key) {
    case keys.ArrowDown:
      if (vertical) {
        return getNextIndex(currentIndex, totalItems, "down", loop);
      }
      break;

    case keys.ArrowUp:
      if (vertical) {
        return getNextIndex(currentIndex, totalItems, "up", loop);
      }
      break;

    case keys.ArrowRight:
      if (horizontal) {
        return getNextIndexHorizontal(currentIndex, totalItems, "right", loop);
      }
      break;

    case keys.ArrowLeft:
      if (horizontal) {
        return getNextIndexHorizontal(currentIndex, totalItems, "left", loop);
      }
      break;

    case keys.Home:
      if (handleHomeEnd) {
        return getBoundaryIndex(totalItems, "first");
      }
      break;

    case keys.End:
      if (handleHomeEnd) {
        return getBoundaryIndex(totalItems, "last");
      }
      break;
  }

  return null;
}

/**
 * A hook for managing arrow key navigation.
 *
 * @example
 * ```tsx
 * const List = ({ items }) => {
 *   const [focusedIndex, handlers] = useArrowNavigation(items.length);
 *
 *   return (
 *     <ul onKeyDown={handlers.onKeyDown} role="listbox">
 *       {items.map((item, i) => (
 *         <li key={i} role="option" aria-selected={focusedIndex === i}>
 *           {item}
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * };
 * ```
 */
export function useArrowNavigation(
  totalItems: number,
  options: {
    /** Initial focused index */
    initialIndex?: number;
    /** Called when index changes */
    onChange?: (index: number) => void;
    /** Enable horizontal navigation */
    horizontal?: boolean;
    /** Enable vertical navigation */
    vertical?: boolean;
    /** Loop around at boundaries */
    loop?: boolean;
    /** Handle Home/End keys */
    handleHomeEnd?: boolean;
  } = {},
): [
  number,
  {
    onKeyDown: (event: React.KeyboardEvent) => void;
    setFocusedIndex: (index: number) => void;
    reset: () => void;
  },
] {
  const {
    initialIndex = 0,
    onChange,
    horizontal = true,
    vertical = true,
    loop = true,
    handleHomeEnd = true,
  } = options;

  const [focusedIndex, setFocusedIndex] = React.useState(initialIndex);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const nextIndex = handleArrowNavigation(
        event.nativeEvent,
        focusedIndex,
        totalItems,
        { horizontal, vertical, loop, handleHomeEnd },
      );

      if (nextIndex !== null) {
        event.preventDefault();
        setFocusedIndex(nextIndex);
        onChange?.(nextIndex);
      }
    },
    [
      focusedIndex,
      totalItems,
      horizontal,
      vertical,
      loop,
      handleHomeEnd,
      onChange,
    ],
  );

  const reset = React.useCallback(() => {
    setFocusedIndex(initialIndex);
  }, [initialIndex]);

  return [
    focusedIndex,
    {
      onKeyDown: handleKeyDown,
      setFocusedIndex,
      reset,
    },
  ];
}

export { keys, type Key } from "./keys";

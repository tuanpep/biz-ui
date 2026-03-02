import { keys, type Key } from './keys';

/**
 * Check if a keyboard event matches a specific key.
 *
 * @example
 * ```tsx
 * import { match, keys } from '../internal/keyboard';
 *
 * if (match(event, keys.Enter)) {
 *   // Handle enter key
 * }
 * ```
 */
export function match(event: KeyboardEvent, key: Key): boolean {
  return event.key === key;
}

/**
 * Check if a keyboard event matches any of the specified keys.
 *
 * @example
 * ```tsx
 * import { matches, keys } from '../internal/keyboard';
 *
 * if (matches(event, [keys.Enter, keys.Space])) {
 *   // Handle activation
 * }
 * ```
 */
export function matches(event: KeyboardEvent, keyList: Key[]): boolean {
  return keyList.includes(event.key as Key);
}

/**
 * Check if a keyboard event represents a printable character.
 * Useful for determining if input should be processed.
 */
export function isPrintableCharacter(event: KeyboardEvent): boolean {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}

/**
 * Check if the event is a keyboard activation (Enter or Space).
 */
export function isActivation(event: KeyboardEvent): boolean {
  return matches(event, [keys.Enter, keys.Space]);
}

/**
 * Check if the event is a navigation key.
 */
export function isNavigation(event: KeyboardEvent): boolean {
  return matches(event, [
    keys.ArrowUp,
    keys.ArrowDown,
    keys.ArrowLeft,
    keys.ArrowRight,
    keys.Home,
    keys.End,
    keys.PageUp,
    keys.PageDown,
  ]);
}

/**
 * Check if the event should close a popup (Escape or Tab).
 */
export function isClosePopup(event: KeyboardEvent): boolean {
  return matches(event, [keys.Escape, keys.Tab]);
}

export { keys, type Key } from './keys';

/**
 * Keyboard key constants.
 * Standardized key values for keyboard event handling.
 *
 * @example
 * ```tsx
 * import { keys } from '../internal/keyboard';
 *
 * if (event.key === keys.Enter) {
 *   // Handle enter key
 * }
 * ```
 */
export const keys = {
  Backspace: 'Backspace',
  Delete: 'Delete',
  Enter: 'Enter',
  Escape: 'Escape',
  Space: ' ',
  Tab: 'Tab',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  Home: 'Home',
  End: 'End',
  PageUp: 'PageUp',
  PageDown: 'PageDown',
  F1: 'F1',
  F2: 'F2',
  F3: 'F3',
  F4: 'F4',
  F5: 'F5',
  F6: 'F6',
  F7: 'F7',
  F8: 'F8',
  F9: 'F9',
  F10: 'F10',
  F11: 'F11',
  F12: 'F12',
} as const;

export type Key = (typeof keys)[keyof typeof keys];

/**
 * Modifier keys for keyboard shortcuts.
 */
export const modifiers = {
  Control: 'Control',
  Alt: 'Alt',
  Meta: 'Meta',
  Shift: 'Shift',
} as const;

export type Modifier = (typeof modifiers)[keyof typeof modifiers];

/**
 * Common keyboard shortcuts.
 */
export const shortcuts = {
  Copy: `${modifiers.Control}+c`,
  Paste: `${modifiers.Control}+v`,
  Cut: `${modifiers.Control}+x`,
  SelectAll: `${modifiers.Control}+a`,
  Undo: `${modifiers.Control}+z`,
  Redo: `${modifiers.Control}+${modifiers.Shift}+z`,
} as const;

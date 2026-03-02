/**
 * ID generation utilities.
 * Non-hook versions for use outside of React components.
 */

let globalIdCounter = 0;

/**
 * Generate a unique ID with a prefix.
 * Uses a simple counter for uniqueness.
 *
 * @example
 * ```tsx
 * const id = generateId('input'); // 'input-1'
 * const id2 = generateId('input'); // 'input-2'
 * ```
 */
export function generateId(prefix: string = 'biz'): string {
  globalIdCounter += 1;
  return `${prefix}-${globalIdCounter}`;
}

/**
 * Generate a random unique ID.
 * Uses crypto.randomUUID if available, falls back to random string.
 *
 * @example
 * ```tsx
 * const id = generateRandomId(); // 'biz-a1b2c3d4'
 * ```
 */
export function generateRandomId(prefix: string = 'biz'): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID().slice(0, 8)}`;
  }
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Reset the global ID counter (useful for testing).
 */
export function resetIdCounter(): void {
  globalIdCounter = 0;
}

/**
 * Get the current ID counter value.
 */
export function getIdCounter(): number {
  return globalIdCounter;
}

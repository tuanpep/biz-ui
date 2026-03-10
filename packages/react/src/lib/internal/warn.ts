/**
 * Warning utilities for deprecation and development warnings.
 * Following Carbon's warning patterns.
 */

const warnedMessages = new Set<string>();

/**
 * Log a warning message (once per message).
 * Only logs in development mode.
 *
 * @example
 * ```tsx
 * warning('This component is deprecated. Use NewComponent instead.');
 * ```
 */
export function warning(message: string): void {
  if (process.env.NODE_ENV === "production") return;
  if (warnedMessages.has(message)) return;

  warnedMessages.add(message);
  console.warn(`[Biz UI] ${message}`);
}

/**
 * Log a deprecation warning for a prop.
 *
 * @example
 * ```tsx
 * deprecateProp('oldProp', 'newProp');
 * // [Biz UI] The `oldProp` prop is deprecated. Use `newProp` instead.
 * ```
 */
export function deprecateProp(
  oldProp: string,
  newProp?: string,
  componentName?: string,
): void {
  const prefix = componentName ? `${componentName}: ` : "";
  const suffix = newProp ? ` Use \`${newProp}\` instead.` : "";
  warning(`${prefix}The \`${oldProp}\` prop is deprecated.${suffix}`);
}

/**
 * Log a deprecation warning for a component.
 *
 * @example
 * ```tsx
 * deprecateComponent('OldButton', 'Button');
 * // [Biz UI] The `OldButton` component is deprecated. Use `Button` instead.
 * ```
 */
export function deprecateComponent(
  oldComponent: string,
  newComponent?: string,
): void {
  const suffix = newComponent ? ` Use \`${newComponent}\` instead.` : "";
  warning(`The \`${oldComponent}\` component is deprecated.${suffix}`);
}

/**
 * Log a deprecation warning for a function.
 *
 * @example
 * ```tsx
 * deprecateFunction('oldUtil', 'newUtil');
 * ```
 */
export function deprecateFunction(
  oldFn: string,
  newFn?: string,
  componentName?: string,
): void {
  const prefix = componentName ? `${componentName}: ` : "";
  const suffix = newFn ? ` Use \`${newFn}\` instead.` : "";
  warning(`${prefix}The \`${oldFn}\` function is deprecated.${suffix}`);
}

/**
 * Log a warning for missing required props.
 *
 * @example
 * ```tsx
 * warnRequiredProp('Button', 'onClick');
 * // [Biz UI] Button: The `onClick` prop is required.
 * ```
 */
export function warnRequiredProp(
  componentName: string,
  propName: string,
): void {
  warning(`${componentName}: The \`${propName}\` prop is required.`);
}

/**
 * Log a warning for invalid prop combinations.
 *
 * @example
 * ```tsx
 * warnInvalidPropCombination('Button', ['primary', 'secondary']);
 * // [Biz UI] Button: Only one of 'primary' or 'secondary' should be used.
 * ```
 */
export function warnInvalidPropCombination(
  componentName: string,
  propNames: string[],
): void {
  warning(
    `${componentName}: Only one of ${propNames.map((p) => `'${p}'`).join(" or ")} should be used.`,
  );
}

/**
 * Reset the warning cache (useful for testing).
 */
export function resetWarningCache(): void {
  warnedMessages.clear();
}

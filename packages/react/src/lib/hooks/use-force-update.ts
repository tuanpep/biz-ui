import * as React from "react";

/**
 * Force a component to re-render.
 * Use sparingly - prefer state updates when possible.
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const forceUpdate = useForceUpdate();
 *
 *   // Force re-render when needed
 *   return <button onClick={forceUpdate}>Refresh</button>;
 * };
 * ```
 */
export function useForceUpdate(): () => void {
  return React.useReducer((x) => x + 1, 0)[1];
}

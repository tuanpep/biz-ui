import * as React from 'react';

/**
 * Manage state that can be either controlled or uncontrolled.
 * This follows the React pattern of "controlled vs uncontrolled" components.
 *
 * @param controlledValue - The controlled value (from props)
 * @param defaultValue - The default value for uncontrolled mode
 * @param onChange - Callback when value changes (called in both modes)
 *
 * @example
 * ```tsx
 * interface InputProps {
 *   value?: string;
 *   defaultValue?: string;
 *   onChange?: (value: string) => void;
 * }
 *
 * const Input = ({ value, defaultValue = '', onChange }: InputProps) => {
 *   const [currentValue, setValue] = useControllableState(value, defaultValue, onChange);
 *
 *   return (
 *     <input
 *       value={currentValue}
 *       onChange={(e) => setValue(e.target.value)}
 *     />
 *   );
 * };
 * ```
 */
export function useControllableState<T>(
  controlledValue: T | undefined,
  defaultValue: T | (() => T),
  onChange?: (value: T) => void
): [T, (value: T | ((prev: T) => T)) => void] {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = React.useState<T>(defaultValue);

  // Use controlled value if provided, otherwise use internal state
  const value = isControlled ? controlledValue : internalValue;

  // Track the previous controlled value to detect changes
  const previousValue = React.useRef(value);

  // Update internal state when controlled value changes
  React.useEffect(() => {
    if (isControlled && previousValue.current !== controlledValue) {
      previousValue.current = controlledValue;
      setInternalValue(controlledValue);
    }
  }, [isControlled, controlledValue]);

  const setValue = React.useCallback(
    (newValue: T | ((prev: T) => T)) => {
      const resolvedValue =
        typeof newValue === 'function'
          ? (newValue as (prev: T) => T)(value)
          : newValue;

      // Update internal state
      setInternalValue(resolvedValue);

      // Call onChange callback
      onChange?.(resolvedValue);
    },
    [value, onChange]
  );

  return [value, setValue];
}

/**
 * Type helper for controllable state props.
 */
export type ControllableStateProps<T> = {
  /** Controlled value */
  value?: T;
  /** Default value for uncontrolled mode */
  defaultValue?: T;
  /** Callback when value changes */
  onChange?: (value: T) => void;
};

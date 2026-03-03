/**
 * Polymorphic Component Types
 *
 * These types enable components to render as different HTML elements
 * while maintaining full TypeScript type safety.
 *
 * Following Carbon's polymorphic component patterns.
 *
 * @example
 * ```tsx
 * type ButtonProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<
 *   T,
 *   {
 *     variant?: 'primary' | 'secondary';
 *     size?: 'sm' | 'md' | 'lg';
 *   }
 * >;
 *
 * const Button = <T extends React.ElementType = 'button'>(
 *   props: ButtonProps<T>,
 *   ref: PolymorphicRef<T>
 * ) => {
 *   const { as: Component = 'button', variant, ...rest } = props;
 *   return <Component {...rest} ref={ref} />;
 * };
 *
 * // Usage:
 * <Button>Click me</Button>                    // renders as <button>
 * <Button as="a" href="/link">Link</Button>   // renders as <a> with href typed
 * ```
 */

// The `as` prop for specifying the element type
type AsProp<C extends React.ElementType> = {
  as?: C;
};

// Props to omit to avoid conflicts between custom props and element props
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

/**
 * Props for a polymorphic component without ref.
 * Use this when the component doesn't need to forward a ref.
 *
 * @template C - The element type the component renders as
 * @template Props - Custom props specific to the component
 */
export type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = Record<string, never>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

/**
 * Extract the ref type from a polymorphic component's element type.
 *
 * @template C - The element type to extract ref from
 */
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

/**
 * Props for a polymorphic component with ref support.
 * This is the most common type for polymorphic components.
 *
 * @template C - The element type the component renders as
 * @template Props - Custom props specific to the component
 *
 * @example
 * ```tsx
 * type ButtonProps<T extends React.ElementType> = PolymorphicComponentPropWithRef<
 *   T,
 *   { variant?: 'primary' | 'secondary' }
 * >;
 * ```
 */
export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = Record<string, never>,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

/**
 * Type for the polymorphic component itself with forwardRef.
 * Use this as the return type for forwardRef components.
 *
 * @template T - The default element type
 * @template Props - Custom props specific to the component
 *
 * @example
 * ```tsx
 * type ButtonComponent = PolymorphicForwardRefComponent<'button', ButtonBaseProps>;
 *
 * const Button: ButtonComponent = React.forwardRef(
 *   <T extends React.ElementType = 'button'>(
 *     props: ButtonProps<T>,
 *     ref: PolymorphicRef<T>
 *   ) => {
 *     // Implementation
 *   }
 * );
 * ```
 */
export type PolymorphicForwardRefComponent<
  T extends React.ElementType,
  Props = Record<string, never>,
> = <E extends React.ElementType = T>(
  props: PolymorphicComponentPropWithRef<E, Props>
) => React.ReactNode;

/**
 * Extract the element type from a component's props.
 * Useful for extracting the inferred element type in component implementations.
 *
 * @template P - The props type that includes the `as` prop
 */
export type ElementTypeFromProps<P> = P extends { as?: infer E }
  ? E extends React.ElementType
    ? E
    : never
  : never;

/**
 * Merge custom props with element props, properly handling conflicts.
 * This is useful when you want to extend element props with custom defaults.
 *
 * @template E - The element type
 * @template P - Custom props to merge
 */
export type MergeElementProps<
  E extends React.ElementType,
  P extends Record<string, unknown>,
> = Omit<React.ComponentPropsWithoutRef<E>, keyof P> & P;

/**
 * Helper type to extract the ref type from props.
 * Useful in component implementations to get the correct ref type.
 *
 * @template P - The component props type
 */
export type RefFromProps<P> = P extends { ref?: infer R } ? R : never;

/**
 * Type guard to check if a value is a valid React element type.
 * Useful for validating the `as` prop at runtime.
 */
export function isValidElementType(value: unknown): value is React.ElementType {
  return (
    typeof value === 'string' ||
    typeof value === 'function' ||
    (typeof value === 'object' && value !== null && '$$typeof' in value)
  );
}

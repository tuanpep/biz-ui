import { isValidElement, Children, cloneElement } from "react";
import type { ReactNode, ReactElement, ComponentType } from "react";

/**
 * Check if a React element is of a specific component type.
 * Useful for identifying children in compound components.
 *
 * @example
 * ```tsx
 * const childrenWithProps = React.Children.toArray(children).map((child) => {
 *   if (isComponentElement(child, ModalHeader)) {
 *     return cloneElement(child, { closeModal });
 *   }
 *   return child;
 * });
 * ```
 */
export function isComponentElement<P>(
  element: ReactNode,
  component: ComponentType<P>,
): element is ReactElement<P> {
  return isValidElement<P>(element) && element.type === component;
}

/**
 * Check if a React element is of any of the specified component types.
 *
 * @example
 * ```tsx
 * if (isComponentElementOf(child, [ModalHeader, ModalFooter])) {
 *   // Handle both header and footer
 * }
 * ```
 */
export function isComponentElementOf<P>(
  element: ReactNode,
  components: ComponentType<P>[],
): boolean {
  return (
    isValidElement<P>(element) &&
    components.some((component) => element.type === component)
  );
}

/**
 * Find all children of a specific component type.
 *
 * @example
 * ```tsx
 * const headerElements = findChildrenByType(children, ModalHeader);
 * ```
 */
export function findChildrenByType<P>(
  children: ReactNode,
  component: ComponentType<P>,
): ReactElement<P>[] {
  const result: ReactElement<P>[] = [];

  Children.forEach(children, (child) => {
    if (isComponentElement(child, component)) {
      result.push(child);
    }
  });

  return result;
}

/**
 * Get the first child of a specific component type.
 *
 * @example
 * ```tsx
 * const header = findChildByType(children, ModalHeader);
 * ```
 */
export function findChildByType<P>(
  children: ReactNode,
  component: ComponentType<P>,
): ReactElement<P> | null {
  let result: ReactElement<P> | null = null;

  Children.forEach(children, (child: ReactNode) => {
    if (result === null && isComponentElement(child, component)) {
      result = child;
    }
  });

  return result;
}

/**
 * Check if children contain a specific component type.
 *
 * @example
 * ```tsx
 * if (hasChildOfType(children, AILabel)) {
 *   // Apply special styling
 * }
 * ```
 */
export function hasChildOfType<P>(
  children: ReactNode,
  component: ComponentType<P>,
): boolean {
  let found = false;

  Children.forEach(children, (child: ReactNode) => {
    if (found) return;
    if (isComponentElement(child, component)) {
      found = true;
    }
  });

  return found;
}

/**
 * Clone element with additional props if it matches the component type.
 *
 * @example
 * ```tsx
 * const enhancedChildren = cloneElementIfType(children, ModalHeader, {
 *   closeModal: handleClose,
 * });
 * ```
 */
export function cloneElementIfType<P>(
  element: ReactNode,
  component: ComponentType<P>,
  additionalProps: Partial<P>,
): ReactNode {
  if (isComponentElement(element, component)) {
    return cloneElement(element, additionalProps);
  }
  return element;
}

/**
 * Portal Component
 *
 * Renders children into a DOM node outside the parent component tree.
 * Useful for modals, tooltips, and popups that need to escape
 * overflow:hidden or z-index stacking contexts.
 */

import * as React from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  /** Content to render in the portal */
  children: React.ReactNode;
  /**
   * Target container element. Defaults to `document.body`.
   */
  container?: Element | DocumentFragment | null;
}

function Portal({
  children,
  container,
}: PortalProps): React.ReactPortal | null {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const target = container ?? document.body;
  return createPortal(children, target);
}

Portal.displayName = "Portal";

export { Portal };

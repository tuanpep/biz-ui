/**
 * Portal Component
 *
 * Renders children into a DOM node outside the parent component tree.
 * Useful for modals, tooltips, and popups that need to escape
 * overflow:hidden or z-index stacking contexts.
 *
 * Built on @radix-ui/react-portal for proper SSR handling and accessibility.
 */

import * as React from "react";
import * as PortalPrimitive from "@radix-ui/react-portal";

function Portal(props: PortalPrimitive.PortalProps) {
  return <PortalPrimitive.Portal {...props} />;
}

Portal.displayName = "Portal";

export { Portal };

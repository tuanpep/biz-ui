/**
 * Icon Component
 *
 * Biz UI aligned icon wrapper with:
 * - Consistent sizing (16, 20, 24, 32)
 * - Color variants using semantic tokens
 * - Support for all Lucide icons
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { iconVariants } from './Icon.variants';
import type { IconProps, IconSize, IconColor } from './Icon.types';

// ============================================================================
// Icon Component
// ============================================================================

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, icon: IconComponent, size, color, label, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size, color }), className)}
        aria-hidden={!label}
        aria-label={label}
        role={label ? 'img' : undefined}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

// ============================================================================
// Exports
// ============================================================================

export { Icon };
export { iconVariants } from './Icon.variants';
export type { IconProps, IconSize, IconColor } from './Icon.types';

// Note: Import icons directly from 'lucide-react' in your application
// Example: import { Home, Settings, User } from 'lucide-react'

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type { LucideIcon, LucideProps } from 'lucide-react';

/**
 * Icon Component
 *
 * Biz UI aligned icon wrapper with:
 * - Consistent sizing (16, 20, 24, 32)
 * - Color variants using semantic tokens
 * - Support for all Lucide icons
 */

const iconVariants = cva('inline-flex items-center justify-center', {
  variants: {
    size: {
      xs: 'h-3 w-3',      // 12px
      sm: 'h-4 w-4',      // 16px - Biz UI default
      md: 'h-5 w-5',      // 20px
      lg: 'h-6 w-6',      // 24px
      xl: 'h-8 w-8',      // 32px
      '2xl': 'h-10 w-10', // 40px
    },
    color: {
      default: 'text-current',
      primary: 'text-interactive-01',
      secondary: 'text-text-secondary',
      muted: 'text-muted-foreground',
      destructive: 'text-destructive',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
      inverse: 'text-primary-foreground',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'default',
  },
});

export interface IconProps
  extends Omit<LucideProps, 'size' | 'color'>,
    VariantProps<typeof iconVariants> {
  /** The Lucide icon component to render */
  icon: LucideIcon;
  /** Accessible label for the icon */
  label?: string;
}

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

// Re-export icon variants for use in other components
export { iconVariants, Icon };

// Note: Import icons directly from 'lucide-react' in your application
// Example: import { Home, Settings, User } from 'lucide-react'

/**
 * Breadcrumb Component
 *
 * Design Principles:
 * - Flexible link rendering (supports react-router, Next.js, or plain anchors)
 * - Accessible navigation with aria attributes
 * - Consistent styling with design system
 * - Customizable separator
 */

import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { BreadcrumbProps, BreadcrumbLinkProps } from './breadcrumb.types';

// ============================================================================
// Default Link Component
// ============================================================================

const DefaultLink: React.ComponentType<BreadcrumbLinkProps> =
  ({ to, href, className, children }) => (
    <a href={to || href} className={className}>
      {children}
    </a>
  );

// ============================================================================
// Breadcrumb Component
// ============================================================================

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items, linkComponent: LinkComponent = DefaultLink, separator, ...props }, ref) => {
    const defaultSeparator = <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />;

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn('flex items-center gap-1.5 text-sm text-muted-foreground', className)}
        {...props}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.key ?? index}>
              {index > 0 && (separator || defaultSeparator)}
              {item.href && !isLast ? (
                <LinkComponent
                  to={item.href}
                  href={item.href}
                  className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {item.label}
                </LinkComponent>
              ) : (
                <span
                  className={cn(isLast && 'font-medium text-foreground')}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    );
  }
);
Breadcrumb.displayName = 'Breadcrumb';

// ============================================================================
// Exports
// ============================================================================

export { Breadcrumb };

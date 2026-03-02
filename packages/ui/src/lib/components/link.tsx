import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { ExternalLink } from 'lucide-react';

/**
 * Link Component
 *
 * Biz UI aligned link with:
 * - Multiple variants for different contexts
 * - External link indicator
 * - Disabled state
 * - Underline control
 */

const linkVariants = cva(
  'inline-flex items-center gap-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'text-primary underline-offset-4 hover:underline',
        primary: 'text-interactive-01 underline-offset-4 hover:underline',
        secondary: 'text-text-secondary underline-offset-4 hover:underline',
        visited: 'text-purple-600 underline-offset-4 hover:underline',
        muted: 'text-muted-foreground underline-offset-4 hover:underline hover:text-foreground',
      },
      underline: {
        none: 'no-underline hover:no-underline',
        hover: 'underline-offset-4 hover:underline',
        always: 'underline',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      underline: 'hover',
      size: 'md',
    },
  }
);

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'size'>,
    VariantProps<typeof linkVariants> {
  /** Show external link icon */
  external?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Render as a span instead of anchor (for non-interactive links) */
  asSpan?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      underline,
      size,
      external = false,
      disabled = false,
      asSpan = false,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const isExternal = external || target === '_blank';

    const externalProps = isExternal
      ? {
          target: target || '_blank',
          rel: rel || 'noopener noreferrer',
        }
      : {};

    const linkClasses = cn(
      linkVariants({ variant, underline, size }),
      disabled && 'pointer-events-none opacity-50 cursor-not-allowed'
    );

    // Render as span for non-interactive links
    if (asSpan || disabled) {
      return (
        <span
          className={cn(linkClasses, disabled && 'pointer-events-none')}
          aria-disabled={disabled}
          ref={ref as React.Ref<HTMLSpanElement>}
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {children}
          {isExternal && (
            <ExternalLink className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
          )}
        </span>
      );
    }

    return (
      <a
        className={cn(linkClasses, className)}
        ref={ref}
        href={href}
        {...externalProps}
        {...props}
      >
        {children}
        {isExternal && (
          <ExternalLink className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';

export { Link, linkVariants };

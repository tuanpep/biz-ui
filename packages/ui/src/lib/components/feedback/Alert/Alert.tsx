/**
 * Alert Component
 *
 * Design Principles:
 * - Semantic colors for different alert types
 * - Clear iconography
 * - Optional closable functionality
 * - Support for title and description
 */

import * as React from 'react';
import { AlertCircle, CheckCircle2, Info, XCircle, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { alertVariants } from './Alert.variants';
import type { AlertProps, AlertTitleProps, AlertDescriptionProps, AlertVariant } from './Alert.types';

// ============================================================================
// Icon Map
// ============================================================================

const alertIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertCircle,
  destructive: XCircle,
};

// ============================================================================
// Alert Component
// ============================================================================

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      title,
      description,
      icon,
      showIcon = true,
      closable,
      onClose,
      actions,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleClose = () => {
      setIsVisible(false);
      onClose?.();
    };

    if (!isVisible) {
      return null;
    }

    const IconComponent = alertIconMap[variant || 'default'];
    const displayIcon = icon || (showIcon && <IconComponent className="h-5 w-5" />);

    return (
      <div
        ref={ref}
        role={variant === 'destructive' ? 'alert' : 'status'}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {displayIcon}
        <div className="flex-1 pr-8">
          {title && (
            <AlertTitle>{title}</AlertTitle>
          )}
          {description && (
            <AlertDescription>{description}</AlertDescription>
          )}
          {children}
          {actions && (
            <div className="mt-3 flex gap-2">{actions}</div>
          )}
        </div>
        {closable && (
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-2 top-2 p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = 'Alert';

// ============================================================================
// AlertTitle Component
// ============================================================================

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

// ============================================================================
// AlertDescription Component
// ============================================================================

const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
);
AlertDescription.displayName = 'AlertDescription';

// ============================================================================
// Exports
// ============================================================================

export { Alert, AlertTitle, AlertDescription };
export { alertVariants } from './Alert.variants';
export type { AlertProps, AlertTitleProps, AlertDescriptionProps, AlertVariant } from './Alert.types';

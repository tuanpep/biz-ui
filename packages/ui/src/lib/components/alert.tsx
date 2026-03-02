import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info, XCircle, X } from 'lucide-react';
import { cn } from '../utils/cn';

/**
 * Alert Component
 *
 * Design Principles:
 * - Semantic colors for different alert types
 * - Clear iconography
 * - Optional closable functionality
 * - Support for title and description
 */

const alertVariants = cva(
  'relative w-full border p-4 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border',
        info: 'bg-info-muted text-info border-info/30 [&>svg]:text-info',
        success: 'bg-success-muted text-success border-success/30 [&>svg]:text-success',
        warning: 'bg-warning-muted text-warning border-warning/30 [&>svg]:text-warning',
        destructive: 'bg-destructive-muted text-destructive border-destructive/30 [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const alertIconMap = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertCircle,
  destructive: XCircle,
} as const;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof alertVariants> {
  /** Title of the alert */
  title?: string;
  /** Description text */
  description?: string;
  /** Icon to display (defaults to variant-specific icon) */
  icon?: React.ReactNode;
  /** Whether to show the icon */
  showIcon?: boolean;
  /** Whether the alert can be closed */
  closable?: boolean;
  /** Callback when alert is closed */
  onClose?: () => void;
  /** Actions to display in the alert */
  actions?: React.ReactNode;
}

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

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, alertVariants };

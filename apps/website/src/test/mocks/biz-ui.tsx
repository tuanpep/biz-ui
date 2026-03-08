// Mock biz-ui components for testing
import { forwardRef } from "react";

// Simple mock components
export const Button = forwardRef<HTMLButtonElement, any>(
  ({ children, className, variant, size, asChild, ...props }, ref) => {
    if (asChild) {
      return children;
    }
    return (
      <button
        ref={ref}
        className={className}
        data-variant={variant}
        data-size={size}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export const Input = forwardRef<HTMLInputElement, any>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={className} {...props} />
  ),
);
Input.displayName = "Input";

export const Badge = forwardRef<HTMLDivElement, any>(
  ({ children, className, variant, ...props }, ref) => (
    <div ref={ref} className={className} data-variant={variant} {...props}>
      {children}
    </div>
  ),
);
Badge.displayName = "Badge";

export const Card = forwardRef<HTMLDivElement, any>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  ),
);
Card.displayName = "Card";

export const Avatar = forwardRef<HTMLSpanElement, any>(
  ({ children, className, ...props }, ref) => (
    <span ref={ref} className={className} {...props}>
      {children}
    </span>
  ),
);
Avatar.displayName = "Avatar";

export const AvatarImage = ({ src, alt }: { src?: string; alt?: string }) => (
  <img src={src} alt={alt} />
);

export const AvatarFallback = ({ children }: { children: React.ReactNode }) => (
  <span>{children}</span>
);

export const Alert = forwardRef<HTMLDivElement, any>(
  ({ children, className, icon, title, description, ...props }, ref) => (
    <div ref={ref} className={className} role="alert" {...props}>
      {icon}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  ),
);
Alert.displayName = "Alert";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children?: ReactNode;
  className?: string;
  variant?: string;
  size?: string;
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, asChild, ...props }, ref) => {
    if (asChild) {
      return children as React.ReactElement;
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

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input ref={ref} className={className} {...props} />
));
Input.displayName = "Input";

type BadgeProps = ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
  className?: string;
  variant?: string;
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, className, variant, ...props }, ref) => (
    <div ref={ref} className={className} data-variant={variant} {...props}>
      {children}
    </div>
  ),
);
Badge.displayName = "Badge";

export const Card = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  ),
);
Card.displayName = "Card";

export const Avatar = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>(({ children, className, ...props }, ref) => (
  <span ref={ref} className={className} {...props}>
    {children}
  </span>
));
Avatar.displayName = "Avatar";

export const AvatarImage = ({ src, alt }: { src?: string; alt?: string }) => (
  <img src={src} alt={alt} />
);

export const AvatarFallback = ({ children }: { children: ReactNode }) => (
  <span>{children}</span>
);

type AlertProps = ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
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

/**
 * InputGroup Component
 *
 * Wraps an Input with optional left/right add-ons (icons, text, buttons).
 * Provides a consistent pattern for search bars, URL inputs, etc.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size variant matching Input sizes */
  size?: "sm" | "md" | "lg";
}

export interface InputAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Placement of the addon */
  placement?: "left" | "right";
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center w-full [&>input]:flex-1 [&>input]:min-w-0",
        className,
      )}
      {...props}
    />
  ),
);
InputGroup.displayName = "InputGroup";

const InputAddon = React.forwardRef<HTMLDivElement, InputAddonProps>(
  ({ className, placement = "left", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center px-3 border border-border bg-muted text-muted-foreground text-sm whitespace-nowrap h-10",
        placement === "left" ? "border-r-0" : "border-l-0",
        className,
      )}
      {...props}
    />
  ),
);
InputAddon.displayName = "InputAddon";

const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute left-0 top-0 flex items-center justify-center h-full w-10 text-muted-foreground pointer-events-none",
      className,
    )}
    {...props}
  />
));
InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute right-0 top-0 flex items-center justify-center h-full w-10 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
InputRightElement.displayName = "InputRightElement";

export { InputGroup, InputAddon, InputLeftElement, InputRightElement };

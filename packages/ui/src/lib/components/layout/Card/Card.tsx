/**
 * Card Component
 *
 * Design Principles:
 * - Clean white backgrounds with subtle shadows
 * - Clear visual hierarchy with header/content separation
 * - Interactive states for clickable cards
 * - Consistent spacing and border radius
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../utils/cn";
import { cardVariants } from "./Card.variants";
import type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
} from "./Card.types";

// ============================================================================
// Card Component
// ============================================================================

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

// ============================================================================
// CardHeader Component
// ============================================================================

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
        {...props}
      />
    );
  },
);
CardHeader.displayName = "CardHeader";

// ============================================================================
// CardTitle Component
// ============================================================================

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3";
    return (
      <Comp
        ref={ref}
        className={cn(
          "text-lg font-semibold tracking-tight text-text-01 leading-tight",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
CardTitle.displayName = "CardTitle";

// ============================================================================
// CardDescription Component
// ============================================================================

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp
      ref={ref}
      className={cn("text-sm text-text-02 leading-normal", className)}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

// ============================================================================
// CardContent Component
// ============================================================================

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return <Comp ref={ref} className={cn("p-6 pt-2", className)} {...props} />;
  },
);
CardContent.displayName = "CardContent";

// ============================================================================
// CardFooter Component
// ============================================================================

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("flex items-center p-6 pt-2", className)}
        {...props}
      />
    );
  },
);
CardFooter.displayName = "CardFooter";

// ============================================================================
// Exports
// ============================================================================

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
export { cardVariants } from "./Card.variants";
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
  CardVariant,
  CardSize,
} from "./Card.types";

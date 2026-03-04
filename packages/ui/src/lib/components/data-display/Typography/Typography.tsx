/**
 * Typography Components
 *
 * Biz UI aligned typography components.
 * Based on Biz UI's type scale.
 *
 * Design Principles:
 * - Clear visual hierarchy
 * - Consistent spacing and sizing
 * - Accessible contrast ratios
 * - Support for productive and expressive typography
 *
 * @example
 * ```tsx
 * import { Heading, Body, TypographyLabel, Code } from '@cmc-dx/biz-ui';
 *
 * <Heading variant="heading-03">Section Title</Heading>
 * <Body variant="body-01">Body text content here.</Body>
 * <TypographyLabel variant="label-01">Form Label</TypographyLabel>
 * <Code variant="code-01">const x = 1;</Code>
 * ```
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../utils/cn";
import {
  headingVariants,
  bodyVariants,
  typographyLabelVariants,
  helperTextVariants,
  codeVariants,
} from "./Typography.variants";
import type {
  HeadingProps,
  BodyProps,
  TypographyLabelProps,
  HelperTextProps,
  CodeProps,
  HeadingVariant,
} from "./Typography.types";

// ============================================================================
// Default Heading Elements Map
// ============================================================================

const defaultHeadingElements: Record<
  HeadingVariant,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> = {
  "heading-01": "h6",
  "heading-02": "h5",
  "heading-03": "h4",
  "heading-04": "h3",
  "heading-05": "h2",
  "heading-06": "h1",
  "heading-07": "h1",
};

// ============================================================================
// Heading Component
// ============================================================================

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant = "heading-03", as, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : (as ?? defaultHeadingElements[variant]);
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
Heading.displayName = "Heading";

// ============================================================================
// Body Component
// ============================================================================

const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  ({ className, variant = "body-01", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        ref={ref}
        className={cn(bodyVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
Body.displayName = "Body";

// ============================================================================
// TypographyLabel Component
// ============================================================================

const TypographyLabel = React.forwardRef<HTMLSpanElement, TypographyLabelProps>(
  ({ className, variant = "label-01", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        ref={ref}
        className={cn(typographyLabelVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
TypographyLabel.displayName = "TypographyLabel";

// ============================================================================
// HelperText Component
// ============================================================================

const HelperText = React.forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, variant = "helper-text-01", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        ref={ref}
        className={cn(helperTextVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
HelperText.displayName = "HelperText";

// ============================================================================
// Code Component
// ============================================================================

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, variant = "code-01", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "code";
    return (
      <Comp
        ref={ref}
        className={cn(codeVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
Code.displayName = "Code";

// ============================================================================
// Compound Export
// ============================================================================

const Typography = {
  Heading,
  Body,
  Label: TypographyLabel,
  HelperText,
  Code,
};

// ============================================================================
// Exports
// ============================================================================

export { Heading, Body, TypographyLabel, HelperText, Code, Typography };

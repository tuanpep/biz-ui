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

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../utils/cn';

// ============================================================================
// TYPOGRAPHY VARIANTS (Biz UI Type Scale)
// ============================================================================

const headingVariants = cva('', {
  variants: {
    variant: {
      // Productive headings (for UI)
      'heading-01': 'text-xs font-semibold tracking-wide text-text-01',     // 12px/700
      'heading-02': 'text-sm font-semibold tracking-wide text-text-01',     // 14px/700
      'heading-03': 'text-base font-semibold text-text-01',                 // 16px/700
      'heading-04': 'text-lg font-semibold text-text-01',                   // 18px/700
      'heading-05': 'text-xl font-semibold text-text-01',                   // 20px/700
      'heading-06': 'text-2xl font-semibold text-text-01',                  // 24px/700
      'heading-07': 'text-3xl font-semibold text-text-01',                  // 28px/700
    },
  },
  defaultVariants: {
    variant: 'heading-03',
  },
});

const bodyVariants = cva('', {
  variants: {
    variant: {
      // Body text
      'body-01': 'text-sm font-normal leading-5 text-text-01',              // 14px/400, 20px line-height
      'body-02': 'text-base font-normal leading-6 text-text-01',            // 16px/400, 24px line-height
      'body-compact-01': 'text-sm font-normal leading-4 text-text-01',      // 14px/400, 16px line-height
      'body-compact-02': 'text-base font-normal leading-5 text-text-01',    // 16px/400, 20px line-height
    },
  },
  defaultVariants: {
    variant: 'body-01',
  },
});

const typographyLabelVariants = cva('', {
  variants: {
    variant: {
      // Labels
      'label-01': 'text-xs font-normal tracking-wide text-text-02',         // 12px/400
      'label-02': 'text-sm font-normal tracking-wide text-text-02',         // 14px/400
    },
  },
  defaultVariants: {
    variant: 'label-01',
  },
});

const helperTextVariants = cva('', {
  variants: {
    variant: {
      // Helper text
      'helper-text-01': 'text-xs font-normal text-text-02',                 // 12px/400
    },
  },
  defaultVariants: {
    variant: 'helper-text-01',
  },
});

const codeVariants = cva('font-mono bg-ui-02 px-1 py-0.5 rounded-none text-text-01', {
  variants: {
    variant: {
      // Code
      'code-01': 'text-xs',                                                  // 12px mono
      'code-02': 'text-sm',                                                  // 14px mono
    },
  },
  defaultVariants: {
    variant: 'code-01',
  },
});

// ============================================================================
// TYPES
// ============================================================================

type HeadingVariant = NonNullable<VariantProps<typeof headingVariants>['variant']>;
type BodyVariant = VariantProps<typeof bodyVariants>['variant'];
type TypographyLabelVariant = VariantProps<typeof typographyLabelVariants>['variant'];
type HelperTextVariant = VariantProps<typeof helperTextVariants>['variant'];
type CodeVariant = VariantProps<typeof codeVariants>['variant'];

// ============================================================================
// HEADING COMPONENT
// ============================================================================

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Typography variant */
  variant?: HeadingVariant;
  /** HTML element to render (defaults based on variant) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Map to a child element */
  asChild?: boolean;
}

const defaultHeadingElements: Record<HeadingVariant, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
  'heading-01': 'h6',
  'heading-02': 'h5',
  'heading-03': 'h4',
  'heading-04': 'h3',
  'heading-05': 'h2',
  'heading-06': 'h1',
  'heading-07': 'h1',
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant = 'heading-03', as, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : (as ?? defaultHeadingElements[variant]);
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';

// ============================================================================
// BODY COMPONENT
// ============================================================================

export interface BodyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Typography variant */
  variant?: BodyVariant;
  /** Map to a child element */
  asChild?: boolean;
}

const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  ({ className, variant = 'body-01', asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        ref={ref}
        className={cn(bodyVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Body.displayName = 'Body';

// ============================================================================
// TYPOGRAPHY LABEL COMPONENT (renamed to avoid conflict with form Label)
// ============================================================================

export interface TypographyLabelProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** Typography variant */
  variant?: TypographyLabelVariant;
  /** Map to a child element */
  asChild?: boolean;
}

const TypographyLabel = React.forwardRef<HTMLSpanElement, TypographyLabelProps>(
  ({ className, variant = 'label-01', asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        ref={ref}
        className={cn(typographyLabelVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
TypographyLabel.displayName = 'TypographyLabel';

// ============================================================================
// HELPER TEXT COMPONENT
// ============================================================================

export interface HelperTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Typography variant */
  variant?: HelperTextVariant;
  /** Map to a child element */
  asChild?: boolean;
}

const HelperText = React.forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, variant = 'helper-text-01', asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        ref={ref}
        className={cn(helperTextVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
HelperText.displayName = 'HelperText';

// ============================================================================
// CODE COMPONENT
// ============================================================================

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Typography variant */
  variant?: CodeVariant;
  /** Map to a child element */
  asChild?: boolean;
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, variant = 'code-01', asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'code';
    return (
      <Comp
        ref={ref}
        className={cn(codeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Code.displayName = 'Code';

// ============================================================================
// COMPOUND EXPORT
// ============================================================================

const Typography = {
  Heading,
  Body,
  Label: TypographyLabel,
  HelperText,
  Code,
};

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Heading,
  Body,
  TypographyLabel,
  HelperText,
  Code,
  Typography,
  headingVariants,
  bodyVariants,
  typographyLabelVariants,
  helperTextVariants,
  codeVariants,
};

export type {
  HeadingVariant,
  BodyVariant,
  TypographyLabelVariant,
  HelperTextVariant,
  CodeVariant,
};

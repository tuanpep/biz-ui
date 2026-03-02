import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

/**
 * Textarea Component
 *
 * Design Principles:
 * - Consistent styling with Input component
 * - Support for auto-resize
 * - Clear focus and error states
 * - Character count support
 */

const textareaVariants = cva(
  'flex w-full border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'border-input',
        filled: 'border-transparent bg-muted',
        unstyled: 'border-none bg-transparent shadow-none focus-visible:ring-0',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
      size: {
        sm: 'min-h-[60px] text-xs',
        md: 'min-h-[80px] text-sm',
        lg: 'min-h-[100px] text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      resize: 'vertical',
      size: 'md',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textareaVariants> {
  /** Label text for the textarea */
  label?: string;
  /** Description text shown below the textarea */
  description?: string;
  /** Error message to display */
  error?: string;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
  /** Enable auto-resize based on content */
  autoResize?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      resize,
      size,
      label,
      description,
      error,
      showCount,
      maxLength,
      autoResize,
      value,
      defaultValue,
      onChange,
      id: propId,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const id = propId || generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const textareaValue = value !== undefined ? value : internalValue;
    const hasError = !!error;
    const characterCount = String(textareaValue).length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    // Auto-resize logic
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    React.useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    React.useEffect(() => {
      if (autoResize && textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [textareaValue, autoResize]);

    // Build aria-describedby
    const ariaDescribedBy = [
      description && !error ? descriptionId : null,
      error ? errorId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    const textarea = (
      <textarea
        ref={textareaRef}
        id={id}
        value={textareaValue}
        onChange={handleChange}
        maxLength={maxLength}
        aria-invalid={hasError ? 'true' : undefined}
        aria-describedby={ariaDescribedBy}
        className={cn(
          textareaVariants({ variant, resize, size }),
          hasError && 'border-destructive focus-visible:ring-destructive',
          className
        )}
        {...props}
      />
    );

    if (!label && !description && !error && !showCount) {
      return textarea;
    }

    return (
      <div className="grid w-full gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium">
            {label}
          </label>
        )}
        {textarea}
        <div className="flex items-center justify-between">
          <div>
            {description && !error && (
              <p id={descriptionId} className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
            {error && (
              <p id={errorId} role="alert" className="text-xs text-destructive">
                {error}
              </p>
            )}
          </div>
          {showCount && (
            <p className="text-xs text-muted-foreground ml-auto">
              {characterCount}
              {maxLength && ` / ${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };

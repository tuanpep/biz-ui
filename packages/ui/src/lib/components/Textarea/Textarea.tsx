/**
 * Textarea Component
 *
 * Design Principles:
 * - Consistent styling with Input component
 * - Support for auto-resize
 * - Clear focus and error states
 * - Character count support
 */

import * as React from 'react';
import { cn } from '../../utils/cn';
import { textareaVariants } from './Textarea.variants';
import type { TextareaProps } from './Textarea.types';

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

export { Textarea };
export type { TextareaProps } from './Textarea.types';

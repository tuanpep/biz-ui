/**
 * PinInput Component
 *
 * A set of individual inputs for OTP, PIN, or verification codes.
 * Supports auto-advance, paste handling, and customizable length.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  pinInputVariants,
  pinInputFieldSizeClasses,
  pinInputFieldBaseClasses,
  pinInputFieldErrorClasses,
  pinInputFieldDisabledClasses,
} from "./PinInput.variants";
import type { PinInputProps } from "./PinInput.types";

const PinInput = React.forwardRef<HTMLDivElement, PinInputProps>(
  (
    {
      className,
      length = 4,
      mask = false,
      onComplete,
      onChange,
      placeholder = "○",
      autoFocus = false,
      disabled = false,
      error = false,
      size = "md",
      type = "text",
      ...props
    },
    ref,
  ) => {
    const [values, setValues] = React.useState<string[]>(
      Array(length).fill(""),
    );
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const focusInput = (index: number) => {
      if (index >= 0 && index < length) {
        inputRefs.current[index]?.focus();
      }
    };

    const handleChange = (index: number, char: string) => {
      if (type === "number" && char && !/^\d$/.test(char)) return;

      const newValues = [...values];
      newValues[index] = char;
      setValues(newValues);

      const joined = newValues.join("");
      onChange?.(joined);

      if (char && index < length - 1) {
        focusInput(index + 1);
      }

      if (newValues.every((v) => v !== "")) {
        onComplete?.(joined);
      }
    };

    const handleKeyDown = (
      index: number,
      e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
      if (e.key === "Backspace") {
        if (values[index] === "") {
          focusInput(index - 1);
        } else {
          handleChange(index, "");
        }
      } else if (e.key === "ArrowLeft") {
        focusInput(index - 1);
      } else if (e.key === "ArrowRight") {
        focusInput(index + 1);
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text").slice(0, length);
      const chars = pasted.split("");
      const newValues = [...values];
      chars.forEach((char, i) => {
        if (type === "number" && !/^\d$/.test(char)) return;
        newValues[i] = char;
      });
      setValues(newValues);
      onChange?.(newValues.join(""));
      focusInput(Math.min(chars.length, length - 1));
      if (newValues.every((v) => v !== "")) {
        onComplete?.(newValues.join(""));
      }
    };

    return (
      <div
        ref={ref}
        className={cn(pinInputVariants({ size }), className)}
        {...props}
      >
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type={mask ? "password" : type === "number" ? "tel" : "text"}
            inputMode={type === "number" ? "numeric" : "text"}
            pattern={type === "number" ? "[0-9]*" : undefined}
            maxLength={1}
            value={values[index]}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus && index === 0}
            className={cn(
              pinInputFieldBaseClasses,
              error && pinInputFieldErrorClasses,
              disabled && pinInputFieldDisabledClasses,
              pinInputFieldSizeClasses[size ?? "md"],
            )}
            onChange={(e) => handleChange(index, e.target.value.slice(-1))}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            aria-label={`Pin input ${index + 1} of ${length}`}
          />
        ))}
      </div>
    );
  },
);
PinInput.displayName = "PinInput";

export { PinInput };
export type {
  PinInputProps,
  PinInputSize,
  PinInputType,
} from "./PinInput.types";

/**
 * PinInput component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * PinInput size type.
 */
export type PinInputSize = VariantProps<
  typeof import("./PinInput.variants").pinInputVariants
>["size"];

/**
 * PinInput type for input content.
 */
export type PinInputType = "text" | "number";

/**
 * PinInput component props.
 */
export interface PinInputProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /** Number of input fields */
  length?: number;
  /** Mask input values (for passwords/PINs) */
  mask?: boolean;
  /** Called when all inputs are filled */
  onComplete?: (value: string) => void;
  /** Called on each value change */
  onChange?: (value: string) => void;
  /** Placeholder character for each input */
  placeholder?: string;
  /** Auto-focus first input on mount */
  autoFocus?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Size variant */
  size?: PinInputSize;
  /** Input type */
  type?: PinInputType;
}

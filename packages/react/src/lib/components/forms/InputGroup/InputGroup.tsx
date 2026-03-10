/**
 * InputGroup Component
 *
 * Wraps an Input with optional left/right add-ons (icons, text, buttons).
 * Provides a consistent pattern for search bars, URL inputs, etc.
 */

import * as React from "react";
import { cn } from "../../../utils/cn";
import {
  inputGroupVariants,
  inputAddonVariants,
  inputLeftElementVariants,
  inputRightElementVariants,
} from "./InputGroup.variants";
import type {
  InputGroupProps,
  InputAddonProps,
  InputLeftElementProps,
  InputRightElementProps,
} from "./InputGroup.types";

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(inputGroupVariants({ size }), className)}
      {...props}
    />
  ),
);
InputGroup.displayName = "InputGroup";

const InputAddon = React.forwardRef<HTMLDivElement, InputAddonProps>(
  ({ className, placement = "left", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(inputAddonVariants({ placement }), className)}
      {...props}
    />
  ),
);
InputAddon.displayName = "InputAddon";

const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  InputLeftElementProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(inputLeftElementVariants(), className)}
    {...props}
  />
));
InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef<
  HTMLDivElement,
  InputRightElementProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(inputRightElementVariants(), className)}
    {...props}
  />
));
InputRightElement.displayName = "InputRightElement";

export { InputGroup, InputAddon, InputLeftElement, InputRightElement };
export type {
  InputGroupProps,
  InputAddonProps,
  InputLeftElementProps,
  InputRightElementProps,
  InputGroupSize,
  InputAddonPlacement,
} from "./InputGroup.types";

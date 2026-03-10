/**
 * InputGroup component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * InputGroup size type.
 */
export type InputGroupSize = VariantProps<
  typeof import("./InputGroup.variants").inputGroupVariants
>["size"];

/**
 * InputGroup component props.
 */
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size variant matching Input sizes */
  size?: InputGroupSize;
}

/**
 * InputAddon placement type.
 */
export type InputAddonPlacement = VariantProps<
  typeof import("./InputGroup.variants").inputAddonVariants
>["placement"];

/**
 * InputAddon component props.
 */
export interface InputAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Placement of the addon */
  placement?: InputAddonPlacement;
}

/**
 * InputLeftElement component props.
 */
export type InputLeftElementProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * InputRightElement component props.
 */
export type InputRightElementProps = React.HTMLAttributes<HTMLDivElement>;

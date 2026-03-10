/**
 * Sheet component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { VariantProps } from "class-variance-authority";
import type { sheetContentVariants } from "./Sheet.variants";

/**
 * Sheet overlay props.
 */
export type SheetOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

/**
 * Sheet side variant.
 */
export type SheetSide = VariantProps<typeof sheetContentVariants>["side"];

/**
 * Sheet content props.
 */
export interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sheetContentVariants> {}

/**
 * Sheet header props.
 */
export type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Sheet footer props.
 */
export type SheetFooterProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Sheet title props.
 */
export type SheetTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

/**
 * Sheet description props.
 */
export type SheetDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

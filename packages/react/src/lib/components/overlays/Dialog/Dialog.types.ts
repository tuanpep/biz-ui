/**
 * Dialog component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

/**
 * Dialog overlay props.
 */
export type DialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

/**
 * Dialog content props.
 */
export type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

/**
 * Dialog header props.
 */
export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Dialog footer props.
 */
export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Dialog title props.
 */
export type DialogTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

/**
 * Dialog description props.
 */
export type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

/**
 * DropdownMenu component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";
import type * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

/**
 * DropdownMenuSubTrigger component props.
 */
export interface DropdownMenuSubTriggerProps extends React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubTrigger
> {
  inset?: boolean;
}

/**
 * DropdownMenuSubContent component props.
 */
export type DropdownMenuSubContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
>;

/**
 * DropdownMenuContent component props.
 */
export type DropdownMenuContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>;

/**
 * DropdownMenuItem component props.
 */
export interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> {
  inset?: boolean;
}

/**
 * DropdownMenuCheckboxItem component props.
 */
export type DropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

/**
 * DropdownMenuRadioItem component props.
 */
export type DropdownMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

/**
 * DropdownMenuLabel component props.
 */
export interface DropdownMenuLabelProps extends React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Label
> {
  inset?: boolean;
}

/**
 * DropdownMenuSeparator component props.
 */
export type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;

/**
 * DropdownMenuShortcut component props.
 */
export type DropdownMenuShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

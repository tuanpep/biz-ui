/**
 * Alert Dialog component types.
 * Separated for better organization and reusability.
 */

import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

/**
 * Alert dialog overlay props.
 */
export type AlertDialogOverlayProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>;

/**
 * Alert dialog content props.
 */
export type AlertDialogContentProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>;

/**
 * Alert dialog header props.
 */
export type AlertDialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Alert dialog footer props.
 */
export type AlertDialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Alert dialog title props.
 */
export type AlertDialogTitleProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;

/**
 * Alert dialog description props.
 */
export type AlertDialogDescriptionProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;

/**
 * Alert dialog action props.
 */
export type AlertDialogActionProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;

/**
 * Alert dialog cancel props.
 */
export type AlertDialogCancelProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;

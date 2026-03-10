/**
 * List Component
 *
 * Ordered and unordered lists with optional icons and descriptions.
 * Provides consistent spacing and styling for list content.
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const listVariants = cva("", {
  variants: {
    variant: {
      unordered: "list-none",
      ordered: "list-decimal list-inside",
      unstyled: "list-none p-0 m-0",
    },
    spacing: {
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-3",
    },
  },
  defaultVariants: {
    variant: "unordered",
    spacing: "md",
  },
});

export interface ListProps
  extends
    React.HTMLAttributes<HTMLUListElement | HTMLOListElement>,
    VariantProps<typeof listVariants> {
  /** Render as ordered list */
  ordered?: boolean;
}

const List = React.forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  ({ className, variant, spacing, ordered = false, ...props }, ref) => {
    const Comp = ordered ? "ol" : "ul";
    return (
      <Comp
        ref={ref as React.Ref<HTMLUListElement> & React.Ref<HTMLOListElement>}
        className={cn(
          listVariants({ variant: ordered ? "ordered" : variant, spacing }),
          className,
        )}
        {...props}
      />
    );
  },
);
List.displayName = "List";

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Icon to display before the content */
  icon?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, icon, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("flex items-start text-sm", className)}
      {...props}
    >
      {icon && (
        <span className="mr-2 mt-0.5 flex-shrink-0 text-muted-foreground">
          {icon}
        </span>
      )}
      <span className="flex-1">{children}</span>
    </li>
  ),
);
ListItem.displayName = "ListItem";

export { List, ListItem, listVariants };

/**
 * Breadcrumb component types.
 * Separated for better organization and reusability.
 */

import * as React from "react";

/**
 * Breadcrumb item data.
 */
export interface BreadcrumbItem {
  /** Display label for the breadcrumb */
  label: string;
  /** URL/path for the breadcrumb link */
  href?: string;
  /** Unique key for React list rendering. If not provided, index will be used. */
  key?: string;
}

/**
 * Link component props.
 */
export interface BreadcrumbLinkProps {
  to?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Breadcrumb component props.
 */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom link component (e.g., Link from react-router-dom, Next.js Link) */
  linkComponent?: React.ComponentType<BreadcrumbLinkProps>;
  /** Custom separator component */
  separator?: React.ReactNode;
}

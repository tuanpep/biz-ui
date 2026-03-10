import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { bannerVariants } from "./Banner.variants";

export interface BannerProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerVariants> {
  /** Whether the banner can be dismissed */
  dismissible?: boolean;
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Icon to display before the content */
  icon?: ReactNode;
}

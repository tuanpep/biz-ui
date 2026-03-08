export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/docs",
    children: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Theming", href: "/docs/theming" },
      { title: "Changelog", href: "/docs/changelog" },
    ],
  },
  {
    title: "Components",
    href: "/components",
    children: [
      { title: "Forms", href: "/components/forms", badge: "16" },
      { title: "Layout", href: "/components/layout", badge: "13" },
      { title: "Navigation", href: "/components/navigation", badge: "7" },
      { title: "Data Display", href: "/components/data-display", badge: "11" },
      { title: "Feedback", href: "/components/feedback", badge: "8" },
      { title: "Overlays", href: "/components/overlays", badge: "8" },
    ],
  },
];

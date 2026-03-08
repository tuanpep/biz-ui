"use client";

import { ScrollArea } from "biz-ui";
import { ChevronRight } from "lucide-react";

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/getting-started/introduction" },
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Theming", href: "/docs/getting-started/theming" },
      { title: "Accessibility", href: "/docs/getting-started/accessibility" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/docs/components" },
      {
        title: "Layout",
        items: [
          { title: "Card", href: "/docs/components/layout/card" },
          { title: "Flex", href: "/docs/components/layout/flex" },
          { title: "Grid", href: "/docs/components/layout/grid" },
          { title: "Stack", href: "/docs/components/layout/stack" },
          { title: "Container", href: "/docs/components/layout/container" },
          { title: "Divider", href: "/docs/components/layout/divider" },
          { title: "ScrollArea", href: "/docs/components/layout/scroll-area" },
        ],
      },
      {
        title: "Forms",
        items: [
          { title: "Button", href: "/docs/components/forms/button" },
          { title: "Input", href: "/docs/components/forms/input" },
          { title: "Checkbox", href: "/docs/components/forms/checkbox" },
          { title: "Select", href: "/docs/components/forms/select" },
          { title: "Switch", href: "/docs/components/forms/switch" },
          { title: "Textarea", href: "/docs/components/forms/textarea" },
          { title: "DatePicker", href: "/docs/components/forms/date-picker" },
        ],
      },
      {
        title: "Navigation",
        items: [
          { title: "Tabs", href: "/docs/components/navigation/tabs" },
          {
            title: "Breadcrumb",
            href: "/docs/components/navigation/breadcrumb",
          },
          {
            title: "DropdownMenu",
            href: "/docs/components/navigation/dropdown-menu",
          },
          {
            title: "Pagination",
            href: "/docs/components/navigation/pagination",
          },
        ],
      },
      {
        title: "Data Display",
        items: [
          { title: "Table", href: "/docs/components/data-display/table" },
          { title: "Badge", href: "/docs/components/data-display/badge" },
          { title: "Avatar", href: "/docs/components/data-display/avatar" },
          {
            title: "Accordion",
            href: "/docs/components/data-display/accordion",
          },
          { title: "Calendar", href: "/docs/components/data-display/calendar" },
        ],
      },
      {
        title: "Feedback",
        items: [
          { title: "Alert", href: "/docs/components/feedback/alert" },
          { title: "Toast", href: "/docs/components/feedback/toast" },
          { title: "Progress", href: "/docs/components/feedback/progress" },
          { title: "Spinner", href: "/docs/components/feedback/spinner" },
          { title: "Skeleton", href: "/docs/components/feedback/skeleton" },
        ],
      },
      {
        title: "Overlays",
        items: [
          { title: "Dialog", href: "/docs/components/overlays/dialog" },
          { title: "Popover", href: "/docs/components/overlays/popover" },
          { title: "Tooltip", href: "/docs/components/overlays/tooltip" },
          { title: "Sheet", href: "/docs/components/overlays/sheet" },
          {
            title: "AlertDialog",
            href: "/docs/components/overlays/alert-dialog",
          },
        ],
      },
    ],
  },
  {
    title: "Hooks",
    items: [
      { title: "Overview", href: "/docs/hooks" },
      { title: "useToast", href: "/docs/hooks/use-toast" },
      { title: "useFormField", href: "/docs/hooks/use-form-field" },
      { title: "useBreakpoint", href: "/docs/hooks/use-breakpoint" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Forms", href: "/docs/guides/forms" },
      { title: "Theming", href: "/docs/guides/theming" },
      { title: "i18n", href: "/docs/guides/i18n" },
      { title: "Testing", href: "/docs/guides/testing" },
    ],
  },
];

interface SidebarProps {
  currentPath?: string;
}

function isActive(href: string, currentPath: string) {
  return currentPath === href;
}

function NavGroup({
  item,
  currentPath,
  level = 0,
}: {
  item: NavItem;
  currentPath: string;
  level?: number;
}) {
  if (!item.items) {
    return (
      <a
        href={item.href}
        className={`block rounded-md px-2 py-1.5 text-sm no-underline transition-colors ${
          isActive(item.href || "", currentPath)
            ? "bg-primary/10 font-medium text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        {item.title}
      </a>
    );
  }

  return (
    <div
      className={
        level > 0 ? "ml-2 mt-2 border-l border-border pl-3" : "space-y-1"
      }
    >
      {level > 0 && (
        <h5 className="mb-1 text-xs font-medium text-muted-foreground">
          {item.title}
        </h5>
      )}
      {level === 0 && (
        <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {item.title}
        </h4>
      )}
      <div className="space-y-1">
        {item.items.map((subItem, index) => (
          <NavGroup
            key={index}
            item={subItem}
            currentPath={currentPath}
            level={level + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function Sidebar({ currentPath = "" }: SidebarProps) {
  return (
    <aside className="fixed top-16 z-40 -ml-2 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-border md:sticky md:block">
      <ScrollArea className="h-full py-6 pr-4">
        <nav className="space-y-6">
          {navigation.map((section, index) => (
            <NavGroup key={index} item={section} currentPath={currentPath} />
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}

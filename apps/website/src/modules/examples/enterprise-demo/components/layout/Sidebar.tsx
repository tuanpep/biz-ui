"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Contact,
  Calendar,
  FileText,
  ChevronDown,
  FolderKanban,
  DollarSign,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@examples/lib/utils";
import { Button } from "biz-ui";
import { Sheet, SheetContent, SheetTrigger } from "biz-ui";
import { BASE } from "@examples/constants";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "CRM",
    href: "/crm",
    icon: <Contact className="h-4 w-4" />,
    children: [
      {
        title: "All Contacts",
        href: "/crm",
        icon: <Users className="h-4 w-4" />,
      },
      {
        title: "Add Contact",
        href: "/crm/new",
        icon: <Users className="h-4 w-4" />,
      },
      {
        title: "Deal Pipeline",
        href: "/crm/pipeline",
        icon: <DollarSign className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "HR",
    href: "/hr",
    icon: <UserCog className="h-4 w-4" />,
    children: [
      { title: "Employees", href: "/hr", icon: <Users className="h-4 w-4" /> },
      {
        title: "Attendance",
        href: "/hr/attendance",
        icon: <Calendar className="h-4 w-4" />,
      },
      {
        title: "Leave Management",
        href: "/hr/leave",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <FolderKanban className="h-4 w-4" />,
    children: [
      {
        title: "All Projects",
        href: "/projects",
        icon: <FolderKanban className="h-4 w-4" />,
      },
      {
        title: "Kanban Board",
        href: "/projects/kanban",
        icon: <FolderKanban className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Finance",
    href: "/finance",
    icon: <DollarSign className="h-4 w-4" />,
    children: [
      {
        title: "Overview",
        href: "/finance",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        title: "Invoices",
        href: "/finance/invoices",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        title: "Expenses",
        href: "/finance/expenses",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

interface SidebarContentProps {
  currentPath: string;
}

function SidebarContent({ currentPath }: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-border px-6">
        <a href={BASE} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground font-bold rounded">
            B
          </div>
          <span className="text-lg font-semibold">Biz UI Demo</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.children ? (
                <div className="space-y-1">
                  <a
                    href={BASE + item.href}
                    className={cn(
                      "flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition-colors",
                      currentPath.startsWith(BASE + item.href)
                        ? "bg-primary-muted text-primary"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    {item.icon}
                    <span className="flex-1">{item.title}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        currentPath.startsWith(BASE + item.href) &&
                          "rotate-180",
                      )}
                    />
                  </a>
                  {currentPath.startsWith(BASE + item.href) && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={BASE + child.href}
                            className={cn(
                              "flex items-center gap-3 rounded px-3 py-2 text-sm transition-colors",
                              currentPath === BASE + child.href
                                ? "bg-primary-muted text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted",
                            )}
                          >
                            {child.icon}
                            <span>{child.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={BASE + item.href}
                  className={cn(
                    "flex items-center gap-3 rounded px-3 py-2 text-sm font-medium transition-colors",
                    currentPath === BASE + item.href
                      ? "bg-primary-muted text-primary"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <p className="text-xs text-muted-foreground">Biz UI Enterprise Demo</p>
        <p className="text-xs text-muted-foreground">
          Built with Astro & Biz UI
        </p>
      </div>
    </div>
  );
}

interface SidebarProps {
  currentPath: string;
}

export function Sidebar({ currentPath }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-border bg-card px-4">
        <a href={BASE} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground font-bold rounded">
            B
          </div>
          <span className="text-lg font-semibold">Biz UI Demo</span>
        </a>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent currentPath={currentPath} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
        <SidebarContent currentPath={currentPath} />
      </aside>
    </>
  );
}

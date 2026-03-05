import { Link } from "@tanstack/react-router";
import { COMPONENT_CATEGORIES } from "../lib/components";

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-[var(--border)] p-4 overflow-y-auto bg-[var(--background)]">
      <nav className="space-y-6">
        <div>
          <Link
            to="/"
            className="block text-sm font-medium text-[var(--muted-text)] hover:text-[var(--foreground)] mb-2"
            activeProps={{
              className:
                "block text-sm font-medium text-[var(--foreground)] mb-2",
            }}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/guide/getting-started"
            className="block text-sm font-medium text-[var(--muted-text)] hover:text-[var(--foreground)] mb-2"
            activeProps={{
              className:
                "block text-sm font-medium text-[var(--foreground)] mb-2",
            }}
          >
            Getting Started
          </Link>
        </div>
        <div>
          <Link
            to="/components"
            className="block text-sm font-medium text-[var(--muted-text)] hover:text-[var(--foreground)] mb-3"
            activeProps={{
              className:
                "block text-sm font-medium text-[var(--foreground)] mb-3",
            }}
          >
            Components
          </Link>
          <ul className="space-y-1 pl-2">
            {COMPONENT_CATEGORIES.map((cat) => (
              <li key={cat.name}>
                <span className="text-xs font-medium text-[var(--muted-text)] opacity-80 uppercase tracking-wider block mt-3 mb-1 first:mt-0">
                  {cat.name}
                </span>
                <ul className="space-y-0.5">
                  {cat.components.map((c) => (
                    <li key={c.id}>
                      <Link
                        to="/components/$component"
                        params={{ component: c.id }}
                        className="block text-sm text-[var(--muted-text)] hover:text-[var(--foreground)] py-1"
                        activeProps={{
                          className:
                            "block text-sm text-[var(--foreground)] py-1",
                        }}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

import { Layout } from "../components/layout";
import { ArrowRight } from "lucide-react";
import { Badge, Card } from "@biz-ui/react";

const componentCategories = [
  {
    name: "Forms",
    description: "Input components for user interactions",
    count: 16,
    components: ["Button", "Input", "Select", "Checkbox", "Switch", "Slider"],
    href: "/components/forms",
  },
  {
    name: "Layout",
    description: "Components for page structure and organization",
    count: 13,
    components: ["Flex", "Stack", "Grid", "Container", "Card", "ScrollArea"],
    href: "/components/layout",
  },
  {
    name: "Navigation",
    description: "Components for navigating between pages and sections",
    count: 7,
    components: [
      "Tabs",
      "Breadcrumb",
      "Pagination",
      "DropdownMenu",
      "TreeView",
    ],
    href: "/components/navigation",
  },
  {
    name: "Data Display",
    description: "Components for presenting data to users",
    count: 11,
    components: [
      "Table",
      "Badge",
      "Avatar",
      "Calendar",
      "Accordion",
      "Typography",
    ],
    href: "/components/data-display",
  },
  {
    name: "Feedback",
    description: "Components for showing status and feedback",
    count: 8,
    components: ["Alert", "Toast", "Progress", "Loading", "Skeleton", "Banner"],
    href: "/components/feedback",
  },
  {
    name: "Overlays",
    description: "Modal and overlay components",
    count: 8,
    components: [
      "Dialog",
      "Popover",
      "Tooltip",
      "Sheet",
      "AlertDialog",
      "Collapsible",
    ],
    href: "/components/overlays",
  },
];

/**
 * Components overview page
 */
export function Components() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
          <p className="text-[var(--site-muted)] text-lg max-w-2xl mx-auto">
            Explore our comprehensive collection of 60+ production-ready
            components for building modern React applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentCategories.map((category) => (
            <Card
              key={category.name}
              className="p-6 hover:border-[var(--site-accent)] transition-colors cursor-pointer group"
            >
              <a href={category.href} className="block">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="font-semibold text-lg">{category.name}</h2>
                  <Badge variant="secondary">{category.count}</Badge>
                </div>
                <p className="text-sm text-[var(--site-muted)] mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.components.slice(0, 4).map((comp) => (
                    <Badge key={comp} variant="outline" className="text-xs">
                      {comp}
                    </Badge>
                  ))}
                  {category.components.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{category.components.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-sm text-blue-500">
                  View all
                  <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

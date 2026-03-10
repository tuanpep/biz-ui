import { ArrowRight } from "lucide-react";
import { Button, Badge, Card } from "@biz-ui/react";

const components = [
  { name: "Button", category: "Forms" },
  { name: "Input", category: "Forms" },
  { name: "Select", category: "Forms" },
  { name: "Dialog", category: "Overlays" },
  { name: "Table", category: "Data Display" },
  { name: "Tabs", category: "Navigation" },
  { name: "DatePicker", category: "Forms" },
  { name: "Toast", category: "Feedback" },
  { name: "DropdownMenu", category: "Navigation" },
  { name: "Accordion", category: "Data Display" },
  { name: "Avatar", category: "Data Display" },
  { name: "Badge", category: "Data Display" },
];

/**
 * Component showcase section with grid of component cards
 */
export function ComponentShowcase() {
  return (
    <section
      id="components"
      className="py-20 px-6 border-t border-[var(--site-border)]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              60+ Components
            </h2>
            <p className="text-[var(--site-muted)]">
              A comprehensive collection for every use case.
            </p>
          </div>
          <Button variant="ghost" className="gap-2 text-blue-500" asChild>
            <a href="/components">
              View all components
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {components.map((component) => (
            <Card
              key={component.name}
              className="p-4 flex items-center justify-between cursor-pointer group hover:border-[var(--site-accent)] transition-colors"
            >
              <div>
                <span className="font-medium">{component.name}</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {component.category}
                </Badge>
              </div>
              <ArrowRight className="h-4 w-4 text-[var(--site-muted)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

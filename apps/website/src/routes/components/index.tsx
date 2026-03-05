import { Link } from "@tanstack/react-router";
import { Heading, Body } from "biz-ui";
import { COMPONENT_CATEGORIES } from "../../lib/components";

export function ComponentsIndexPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Heading variant="heading-05" className="text-white mb-2">
        Components
      </Heading>
      <Body variant="body-02" className="text-zinc-400 mb-8">
        Browse all 70+ Biz UI components by category.
      </Body>
      <div className="space-y-8">
        {COMPONENT_CATEGORIES.map((cat) => (
          <section key={cat.name}>
            <h2 className="text-xl font-semibold text-white mb-4">
              {cat.name}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {cat.components.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/components/$component"
                    params={{ component: c.id }}
                    className="text-zinc-300 hover:text-white px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

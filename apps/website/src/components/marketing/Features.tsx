import { Layers, Palette, Code2, Zap } from "lucide-react";
import { Card } from "@biz-ui/react";

const features = [
  {
    icon: Layers,
    title: "60+ Components",
    description:
      "A comprehensive collection of production-ready components for any business application.",
  },
  {
    icon: Palette,
    title: "Fully Themeable",
    description:
      "Customize every aspect with CSS variables. Light and dark mode support out of the box.",
  },
  {
    icon: Code2,
    title: "TypeScript First",
    description:
      "Full TypeScript support with comprehensive types for an excellent developer experience.",
  },
  {
    icon: Zap,
    title: "Zero Conflicts",
    description:
      "CSS Layer isolation ensures Biz UI works seamlessly with your existing Tailwind setup.",
  },
];

/**
 * Features section showcasing key benefits
 */
export function Features() {
  return (
    <section className="py-20 px-6 border-t border-[var(--site-border)]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to build
          </h2>
          <p className="text-[var(--site-muted)] text-lg max-w-2xl mx-auto">
            A complete component library designed for modern React applications
            with accessibility and customization in mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 hover:border-[var(--site-accent)] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--site-muted)]">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

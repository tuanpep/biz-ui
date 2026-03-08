"use client";

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  IconButton,
} from "biz-ui";
import {
  ArrowRight,
  Layers,
  Accessibility,
  FileType,
  Palette,
  TreeDeciduous,
  ExternalLink,
  Copy,
} from "lucide-react";

const features = [
  {
    title: "60+ Components",
    description:
      "A comprehensive collection of production-ready components for any use case.",
    icon: Layers,
  },
  {
    title: "Accessibility First",
    description:
      "Built on Radix UI primitives for WCAG 2.1 AA compliance out of the box.",
    icon: Accessibility,
  },
  {
    title: "TypeScript Support",
    description:
      "Full TypeScript support with comprehensive type definitions for all components.",
    icon: FileType,
  },
  {
    title: "Tailwind CSS",
    description:
      "Seamlessly integrates with Tailwind CSS for easy customization.",
    icon: "tailwind",
  },
  {
    title: "Themeable",
    description:
      "Powerful theming system with CSS variables for light and dark modes.",
    icon: Palette,
  },
  {
    title: "Tree-shakeable",
    description:
      "Import only what you need. Optimized for minimal bundle size.",
    icon: TreeDeciduous,
  },
];

const componentCategories = [
  {
    name: "Layout",
    count: 13,
    color: "bg-blue-500",
    href: "/docs/components/layout",
  },
  {
    name: "Forms",
    count: 19,
    color: "bg-green-500",
    href: "/docs/components/forms",
  },
  {
    name: "Navigation",
    count: 7,
    color: "bg-purple-500",
    href: "/docs/components/navigation",
  },
  {
    name: "Data Display",
    count: 11,
    color: "bg-orange-500",
    href: "/docs/components/data-display",
  },
  {
    name: "Feedback",
    count: 8,
    color: "bg-yellow-500",
    href: "/docs/components/feedback",
  },
  {
    name: "Overlays",
    count: 7,
    color: "bg-pink-500",
    href: "/docs/components/overlays",
  },
];

export default function LandingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                v0.1.0 Released
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Build Beautiful{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  React Apps
                </span>{" "}
                Faster
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A comprehensive React component library built with Radix UI and
                Tailwind CSS. Accessible, themeable, and production-ready.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  <a href="/docs/getting-started/introduction">Get Started</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<ExternalLink className="h-4 w-4" />}
                >
                  <a
                    href="https://github.com/username/biz-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>

              {/* Quick install */}
              <div className="mt-8">
                <p className="mb-2 text-sm text-muted-foreground">
                  Quick install:
                </p>
                <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2">
                  <code className="text-sm font-mono text-foreground">
                    npm install biz-ui
                  </code>
                  <IconButton
                    variant="ghost"
                    size="sm"
                    icon={Copy}
                    label="Copy install command"
                    onClick={() =>
                      navigator.clipboard.writeText("npm install biz-ui")
                    }
                  />
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl" />
              <Card className="relative shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-1/2 rounded bg-muted" />
                  <Button className="w-full">Get Started</Button>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 rounded-lg border border-border bg-muted/50" />
                    <div className="h-20 rounded-lg border border-border bg-muted/50" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Everything you need to build modern apps
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Biz UI provides all the components you need to build beautiful,
              accessible React applications.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="transition-colors hover:border-primary/50"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {typeof feature.icon === "string" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                    ) : (
                      <feature.icon className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Component Categories Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Explore Components
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse our comprehensive collection of components organized by
              category.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {componentCategories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 no-underline transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-lg ${category.color} flex items-center justify-center text-white font-bold`}
                  >
                    {category.count}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} components
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start building your next project with Biz UI today.
            </p>
            <div className="mt-8">
              <Button size="lg">
                <a href="/docs/getting-started/introduction">
                  Read the Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

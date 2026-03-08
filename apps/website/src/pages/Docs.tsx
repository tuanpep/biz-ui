import { Layout } from "../components/layout";

/**
 * Documentation page
 */
export function Docs() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        <p className="text-[var(--site-muted)] text-lg mb-8">
          Welcome to the Biz UI documentation. Here you'll find everything you
          need to get started and make the most of the component library.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="/docs/installation"
            className="p-6 rounded-xl border border-[var(--site-border)] hover:border-[var(--site-accent)] transition-colors"
          >
            <h2 className="font-semibold text-lg mb-2">Installation</h2>
            <p className="text-sm text-[var(--site-muted)]">
              Learn how to install and configure Biz UI in your project.
            </p>
          </a>
          <a
            href="/docs/quick-start"
            className="p-6 rounded-xl border border-[var(--site-border)] hover:border-[var(--site-accent)] transition-colors"
          >
            <h2 className="font-semibold text-lg mb-2">Quick Start</h2>
            <p className="text-sm text-[var(--site-muted)]">
              Get up and running quickly with our step-by-step guide.
            </p>
          </a>
          <a
            href="/docs/theming"
            className="p-6 rounded-xl border border-[var(--site-border)] hover:border-[var(--site-accent)] transition-colors"
          >
            <h2 className="font-semibold text-lg mb-2">Theming</h2>
            <p className="text-sm text-[var(--site-muted)]">
              Customize the look and feel of your components.
            </p>
          </a>
          <a
            href="/components"
            className="p-6 rounded-xl border border-[var(--site-border)] hover:border-[var(--site-accent)] transition-colors"
          >
            <h2 className="font-semibold text-lg mb-2">Components</h2>
            <p className="text-sm text-[var(--site-muted)]">
              Explore our comprehensive component library.
            </p>
          </a>
        </div>
      </div>
    </Layout>
  );
}

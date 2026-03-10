import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "../components/ui/CodeBlock";

/**
 * Introduction documentation page
 */
export function Introduction() {
  return (
    <DocsLayout>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1>Introduction</h1>
        <p className="lead">
          Biz UI is a collection of beautifully designed, accessible React
          components built on top of Radix UI and Tailwind CSS.
        </p>

        <h2>Features</h2>
        <ul>
          <li>
            <strong>60+ Components</strong> - A comprehensive collection for any
            business application
          </li>
          <li>
            <strong>Accessible</strong> - Built on Radix UI primitives for full
            keyboard and screen reader support
          </li>
          <li>
            <strong>TypeScript</strong> - Full type safety with comprehensive
            TypeScript definitions
          </li>
          <li>
            <strong>Themeable</strong> - Customize every aspect with CSS
            variables
          </li>
          <li>
            <strong>CSS Layers</strong> - Zero conflicts with existing Tailwind
            setup
          </li>
        </ul>

        <h2>Quick Start</h2>
        <p>Get started by installing Biz UI in your project:</p>

        <CodeBlock code="npm install biz-ui" language="bash" />

        <p>Then import the components you need:</p>

        <CodeBlock
          code={`import { Button, Input, Card } from '@biz-ui/react'

function App() {
  return (
    <Card className="p-6">
      <Input placeholder="Enter your name" />
      <Button className="mt-4">Submit</Button>
    </Card>
  )
}`}
          language="tsx"
          filename="App.tsx"
        />

        <h2>Philosophy</h2>
        <p>
          Biz UI is designed to be a foundation for building business
          applications. We prioritize:
        </p>
        <ul>
          <li>
            <strong>Developer Experience</strong> - Simple APIs that are easy to
            understand and use
          </li>
          <li>
            <strong>Accessibility</strong> - Every component follows WAI-ARIA
            guidelines
          </li>
          <li>
            <strong>Customization</strong> - Easy to override styles and
            behavior
          </li>
          <li>
            <strong>Performance</strong> - Tree-shakeable and optimized for
            production
          </li>
        </ul>
      </article>
    </DocsLayout>
  );
}

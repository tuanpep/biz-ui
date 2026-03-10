import { DocsLayout } from "./DocsLayout";
import { CodeBlock } from "../components/ui/CodeBlock";

/**
 * Installation documentation page
 */
export function InstallationPage() {
  return (
    <DocsLayout>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1>Installation</h1>
        <p className="lead">
          Learn how to install and configure Biz UI in your React project.
        </p>

        <h2>Requirements</h2>
        <ul>
          <li>React 18 or higher</li>
          <li>Tailwind CSS 3.0 or higher</li>
          <li>Node.js 18 or higher</li>
        </ul>

        <h2>Install Package</h2>
        <p>Install Biz UI using your preferred package manager:</p>

        <CodeBlock code="npm install biz-ui" language="bash" />

        <CodeBlock code="yarn add biz-ui" language="bash" />

        <CodeBlock code="pnpm add biz-ui" language="bash" />

        <h2>CSS Setup</h2>
        <p>
          Biz UI uses CSS Layers for style isolation. Add the layer import to
          your main CSS file:
        </p>

        <CodeBlock
          code={`/* Import Biz UI styles with CSS Layer */
@import 'biz-ui/styles/layer';

/* Your existing Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
          language="css"
          filename="globals.css"
        />

        <h2>Tailwind Config</h2>
        <p>
          Add the Biz UI content paths to your <code>tailwind.config.js</code>:
        </p>

        <CodeBlock
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/biz-ui/dist/**/*.{js,mjs}',
  ],
  // ... rest of your config
}`}
          language="javascript"
          filename="tailwind.config.js"
        />

        <h2>Usage</h2>
        <p>Now you can import and use any component:</p>

        <CodeBlock
          code={`import { Button, Card, Input } from '@biz-ui/react'

function App() {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <Input placeholder="Enter your email" className="mb-4" />
      <Button>Get Started</Button>
    </Card>
  )
}

export default App`}
          language="tsx"
          filename="App.tsx"
        />

        <h2>Next Steps</h2>
        <ul>
          <li>
            <a href="/docs/theming">Learn about theming</a>
          </li>
          <li>
            <a href="/components">Browse all components</a>
          </li>
        </ul>
      </article>
    </DocsLayout>
  );
}

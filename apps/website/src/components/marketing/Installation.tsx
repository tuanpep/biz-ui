import { Check } from "lucide-react";
import { Badge, Button, Alert } from "@biz-ui/react";
import { CodeBlock } from "../ui/CodeBlock";

const packageManagers = [
  { name: "npm", command: "npm install biz-ui", color: "red" },
  { name: "yarn", command: "yarn add biz-ui", color: "blue" },
  { name: "pnpm", command: "pnpm add biz-ui", color: "orange" },
];

/**
 * Installation section with package manager commands
 */
export function Installation() {
  return (
    <section className="py-20 px-6 border-t border-[var(--site-border)]">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quick Start</h2>
          <p className="text-[var(--site-muted)] text-lg">
            Get up and running in minutes with a single command.
          </p>
        </div>

        <div className="space-y-4">
          {packageManagers.map((pm) => (
            <div
              key={pm.name}
              className="flex items-center gap-4 p-4 rounded-xl border border-[var(--site-border)] bg-[var(--site-card)]"
            >
              <Badge
                variant="outline"
                className={`bg-${pm.color}-500/10 text-${pm.color}-500 border-${pm.color}-500/20`}
              >
                {pm.name}
              </Badge>
              <code className="flex-1 text-left text-sm font-mono">
                {pm.command}
              </code>
              <Button
                variant="ghost"
                size="icon"
                aria-label={`Copy ${pm.name} command`}
              >
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          ))}
        </div>

        <CodeBlock
          code={`import { Button, Input, Card } from '@biz-ui/react'

function App() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  )
}`}
          language="tsx"
          filename="App.tsx"
          className="mt-8"
        />

        <Alert
          className="mt-8 biz-ui"
          icon={<Check className="h-4 w-4" />}
          title="CSS Layer Integration"
          description="Import biz-ui/styles/layer for seamless integration with your existing Tailwind setup."
        />
      </div>
    </section>
  );
}

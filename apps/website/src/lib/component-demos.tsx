import type { ReactNode } from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Flex,
  Checkbox,
  Switch,
  Alert,
  Separator,
} from "biz-ui";

export interface ComponentDemo {
  code: string;
  preview: ReactNode;
}

const DEMOS: Record<string, ComponentDemo> = {
  button: {
    code: `import { Button } from 'biz-ui';

<Flex gap="sm">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
</Flex>`,
    preview: (
      <Flex gap="sm">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </Flex>
    ),
  },
  input: {
    code: `import { Input } from 'biz-ui';

<Input placeholder="Enter your name..." />`,
    preview: <Input placeholder="Enter your name..." />,
  },
  card: {
    code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'biz-ui';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>Card content goes here.</CardContent>
</Card>`,
    preview: (
      <Card className="bg-zinc-900 border-zinc-800 max-w-sm">
        <CardHeader>
          <CardTitle className="text-white">Card Title</CardTitle>
          <CardDescription className="text-zinc-400">
            Optional description
          </CardDescription>
        </CardHeader>
        <CardContent className="text-zinc-300">
          Card content goes here.
        </CardContent>
      </Card>
    ),
  },
  badge: {
    code: `import { Badge } from 'biz-ui';

<Flex gap="sm">
  <Badge variant="default">Default</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="success">Success</Badge>
</Flex>`,
    preview: (
      <Flex gap="sm">
        <Badge variant="default">Default</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
      </Flex>
    ),
  },
  checkbox: {
    code: `import { Checkbox } from 'biz-ui';

<Checkbox label="Accept terms" />`,
    preview: <Checkbox label="Accept terms" />,
  },
  switch: {
    code: `import { Switch } from 'biz-ui';

<Switch label="Enable notifications" />`,
    preview: <Switch label="Enable notifications" />,
  },
  alert: {
    code: `import { Alert } from 'biz-ui';

<Alert variant="info" title="Info">This is an informational message.</Alert>`,
    preview: (
      <Alert variant="info" title="Info">
        This is an informational message.
      </Alert>
    ),
  },
  separator: {
    code: `import { Separator } from 'biz-ui';

<div>
  <p className="text-zinc-400">Above</p>
  <Separator className="my-2" />
  <p className="text-zinc-400">Below</p>
</div>`,
    preview: (
      <div>
        <p className="text-zinc-400 text-sm">Above</p>
        <Separator className="my-2" />
        <p className="text-zinc-400 text-sm">Below</p>
      </div>
    ),
  },
  flex: {
    code: `import { Flex } from 'biz-ui';

<Flex gap="md" justify="center">
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</Flex>`,
    preview: (
      <Flex gap="md" justify="center">
        <span className="text-zinc-400 text-sm">Item 1</span>
        <span className="text-zinc-400 text-sm">Item 2</span>
        <span className="text-zinc-400 text-sm">Item 3</span>
      </Flex>
    ),
  },
  "scroll-area": {
    code: `import { ScrollArea } from 'biz-ui';

<ScrollArea className="h-24 w-48 rounded border border-zinc-700 p-2">
  <p>Scrollable content...</p>
</ScrollArea>`,
    preview: (
      <div className="h-24 w-48 rounded border border-zinc-700 p-2 overflow-auto text-sm text-zinc-400">
        Scrollable content area.
      </div>
    ),
  },
  label: {
    code: `import { Label, Input } from 'biz-ui';

<Label htmlFor="email">Email</Label>
<Input id="email" placeholder="you@example.com" />`,
    preview: (
      <Flex direction="col" gap="xs">
        <label className="text-sm text-zinc-400" htmlFor="email-demo">
          Email
        </label>
        <Input id="email-demo" placeholder="you@example.com" />
      </Flex>
    ),
  },
};

export function getComponentDemo(
  componentId: string,
  componentName: string,
): ComponentDemo {
  const demo = DEMOS[componentId];
  if (demo) return demo;
  return {
    code: `import { ${componentName} } from 'biz-ui';

<${componentName} />`,
    preview: (
      <div className="text-zinc-500 text-sm py-4">
        Demo preview not yet available for this component.
      </div>
    ),
  };
}

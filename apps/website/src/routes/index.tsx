import { Link } from "@tanstack/react-router";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Badge,
  Flex,
  Heading,
  Body,
} from "biz-ui";

export function LandingPage() {
  return (
    <>
      <section className="py-20 px-6 text-center">
        <Badge variant="info" className="mb-4">
          70+ Components
        </Badge>
        <Heading
          variant="heading-07"
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
        >
          Build stunning interfaces
          <br />
          with React
        </Heading>
        <Body variant="body-02" className="text-zinc-400 max-w-lg mx-auto mb-8">
          A comprehensive UI library with 70+ accessible components built on
          Radix UI primitives and styled with Tailwind CSS.
        </Body>
        <Flex gap="sm" justify="center">
          <Button variant="primary" size="lg" asChild>
            <Link to="/guide/getting-started">Get Started</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/components">View Components</Link>
          </Button>
        </Flex>
      </section>

      <section id="features" className="py-16 px-6 bg-zinc-900">
        <Heading
          variant="heading-05"
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Why Biz UI?
        </Heading>
        <Flex
          gap="lg"
          justify="center"
          wrap="wrap"
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-zinc-900 border-zinc-800 flex-1 min-w-[280px] max-w-[360px]">
            <CardHeader>
              <CardTitle className="text-white">Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-400">
                Built on Radix UI primitives with full WAI-ARIA compliance.
                Keyboard navigation and screen reader support out of the box.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 flex-1 min-w-[280px] max-w-[360px]">
            <CardHeader>
              <CardTitle className="text-white">Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-400">
                Powerful theming system with CSS variables. Customize colors,
                spacing, and component variants to match your brand.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 flex-1 min-w-[280px] max-w-[360px]">
            <CardHeader>
              <CardTitle className="text-white">Type Safe</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-400">
                Full TypeScript support with detailed prop types. Enjoy
                autocomplete and type checking while building your UI.
              </CardDescription>
            </CardContent>
          </Card>
        </Flex>
      </section>

      <section id="components" className="py-16 px-6">
        <Heading
          variant="heading-05"
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Components
        </Heading>
        <Flex
          gap="md"
          justify="center"
          wrap="wrap"
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-zinc-900 border-zinc-800 flex-1 min-w-[320px] max-w-[400px]">
            <CardHeader>
              <CardTitle className="text-white">Button</CardTitle>
              <CardDescription className="text-zinc-400">
                Multiple variants and sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Flex gap="xs">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </Flex>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 flex-1 min-w-[320px] max-w-[400px]">
            <CardHeader>
              <CardTitle className="text-white">Input</CardTitle>
              <CardDescription className="text-zinc-400">
                Flexible form inputs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter your name..." />
            </CardContent>
          </Card>
        </Flex>
      </section>

      <section id="get-started" className="py-16 px-6 bg-zinc-900 text-center">
        <Heading
          variant="heading-05"
          className="text-3xl font-bold mb-3 text-white"
        >
          Ready to get started?
        </Heading>
        <Body variant="body-02" className="text-zinc-400 mb-6">
          Install Biz UI in your project today
        </Body>
        <div className="bg-zinc-800 rounded-lg p-4 inline-block text-left">
          <code className="text-zinc-300 text-sm">npm install biz-ui</code>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-zinc-800 text-center text-zinc-500">
        <p>Built with Radix UI + Tailwind CSS</p>
      </footer>
    </>
  );
}

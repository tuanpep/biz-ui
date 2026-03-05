import { Heading, Body } from "biz-ui";

export function GettingStartedPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Heading variant="heading-05" className="text-white mb-4">
        Getting Started
      </Heading>
      <Body variant="body-02" className="text-zinc-400">
        Install Biz UI in your project with npm or yarn.
      </Body>
      <pre className="mt-6 p-4 bg-zinc-800 rounded-lg text-zinc-300 text-sm overflow-x-auto">
        npm install biz-ui
      </pre>
    </div>
  );
}

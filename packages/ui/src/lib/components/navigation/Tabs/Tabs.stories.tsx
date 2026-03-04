import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList variant="line">
        <TabsTrigger value="account" variant="line">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" variant="line">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="p-4 text-sm text-text-02">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="p-4 text-sm text-text-02">
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const Contained: Story = {
  render: () => (
    <Tabs defaultValue="tab-1">
      <TabsList variant="contained">
        <TabsTrigger value="tab-1" variant="contained">
          Details
        </TabsTrigger>
        <TabsTrigger value="tab-2" variant="contained">
          Configuration
        </TabsTrigger>
        <TabsTrigger value="tab-3" variant="contained">
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-text-01">Details</h3>
          <p className="text-sm text-text-02 mt-1">
            This is a contained tab style, often used for secondary navigation
            within pages.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab-2">
        <div className="p-4">Content for configuration</div>
      </TabsContent>
    </Tabs>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-text-03">
          Line Tabs (Standard)
        </h4>
        <Tabs defaultValue="1">
          <TabsList variant="line">
            <TabsTrigger value="1" variant="line">
              Overview
            </TabsTrigger>
            <TabsTrigger value="2" variant="line">
              Resources
            </TabsTrigger>
            <TabsTrigger value="3" variant="line">
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-text-03">
          Contained Tabs
        </h4>
        <Tabs defaultValue="1">
          <TabsList variant="contained">
            <TabsTrigger value="1" variant="contained">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="2" variant="contained">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="3" variant="contained">
              Logs
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-text-03">
          Sizes
        </h4>
        <div className="flex flex-col gap-6">
          <Tabs defaultValue="1">
            <TabsList size="sm">
              <TabsTrigger value="1" size="sm">
                Small Tab
              </TabsTrigger>
              <TabsTrigger value="2" size="sm">
                Active
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs defaultValue="1">
            <TabsList size="md">
              <TabsTrigger value="1" size="md">
                Medium Tab
              </TabsTrigger>
              <TabsTrigger value="2" size="md">
                Default
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs defaultValue="1">
            <TabsList size="lg">
              <TabsTrigger value="1" size="lg">
                Large Tab
              </TabsTrigger>
              <TabsTrigger value="2" size="lg">
                Size
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  ),
};

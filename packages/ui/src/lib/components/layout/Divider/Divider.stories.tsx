import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Enhanced Separator with optional label. Displays text or icons in the center of a dividing line.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <p className="text-sm">Content above the divider</p>
      <Divider />
      <p className="text-sm">Content below the divider</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Divider label="OR" />
    </div>
  ),
};

export const LabelAlignments: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <Divider label="Left" labelAlignment="left" />
      <Divider label="Center" labelAlignment="center" />
      <Divider label="Right" labelAlignment="right" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-8">
      <span className="text-sm">Item 1</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Item 2</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Item 3</span>
    </div>
  ),
};

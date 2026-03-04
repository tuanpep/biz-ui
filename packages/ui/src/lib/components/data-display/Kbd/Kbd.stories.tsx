import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Data Display/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Keyboard shortcut indicator. Displays keys in a visually distinct style.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: "⌘",
  },
};

export const Shortcut: Story = {
  render: () => (
    <p className="text-sm">
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette
    </p>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-sm">
        <Kbd size="sm">Ctrl</Kbd>
      </div>
      <div className="text-sm">
        <Kbd size="md">Ctrl</Kbd>
      </div>
      <div className="text-sm">
        <Kbd size="lg">Ctrl</Kbd>
      </div>
    </div>
  ),
};

export const CommonShortcuts: Story = {
  render: () => (
    <div className="space-y-2 text-sm">
      <div className="flex items-center justify-between w-64">
        <span>Copy</span>
        <span>
          <Kbd>⌘</Kbd> + <Kbd>C</Kbd>
        </span>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Paste</span>
        <span>
          <Kbd>⌘</Kbd> + <Kbd>V</Kbd>
        </span>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Undo</span>
        <span>
          <Kbd>⌘</Kbd> + <Kbd>Z</Kbd>
        </span>
      </div>
      <div className="flex items-center justify-between w-64">
        <span>Save</span>
        <span>
          <Kbd>⌘</Kbd> + <Kbd>S</Kbd>
        </span>
      </div>
    </div>
  ),
};

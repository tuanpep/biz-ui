import type { Meta, StoryObj } from "@storybook/react";
import { Center } from "./Center";

const meta: Meta<typeof Center> = {
  title: "Layout/Center",
  component: Center,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Centers content horizontally and vertically. A convenience layout primitive that reduces flex boilerplate.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Center>;

export const Default: Story = {
  render: () => (
    <Center className="h-40 border border-border">
      <span className="text-sm">Centered content</span>
    </Center>
  ),
};

export const FullHeight: Story = {
  render: () => (
    <div className="h-64 border border-border">
      <Center fullHeight>
        <div className="text-center">
          <p className="font-medium">Full Height Center</p>
          <p className="text-sm text-muted-foreground">
            Takes full height of parent container
          </p>
        </div>
      </Center>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <p className="text-sm">
      Some text with an{" "}
      <Center
        inline
        className="h-6 w-6 bg-[var(--interactive-01)] text-white text-xs"
      >
        3
      </Center>{" "}
      inline centered element.
    </p>
  ),
};

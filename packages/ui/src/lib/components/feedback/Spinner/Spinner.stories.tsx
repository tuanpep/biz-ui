import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Standalone loading spinner with size and color variants.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    color: {
      control: "select",
      options: ["default", "primary", "white", "current"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner color="default" />
      <Spinner color="primary" />
      <div className="bg-primary p-2">
        <Spinner color="white" />
      </div>
    </div>
  ),
};

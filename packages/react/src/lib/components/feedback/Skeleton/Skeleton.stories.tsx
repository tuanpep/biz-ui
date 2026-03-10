import type { Meta, StoryObj } from "@storybook/react";
import {
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  SkeletonGroup,
} from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular", "rounded"],
      description: "Skeleton shape variant",
    },
    animate: {
      control: "boolean",
      description: "Whether to animate the skeleton",
    },
    width: {
      control: "text",
      description: "Width of the skeleton",
    },
    height: {
      control: "text",
      description: "Height of the skeleton",
    },
  },
  args: {
    variant: "text",
    animate: true,
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 40,
    height: 40,
  },
};

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: 200,
    height: 100,
  },
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
    width: 200,
    height: 20,
  },
};

export const Text: Story = {
  render: () => <SkeletonText lines={3} />,
};

export const Avatar: Story = {
  render: () => <SkeletonCircle size={48} />,
};

export const Card: Story = {
  render: () => (
    <div className="p-4 border rounded-lg w-[300px] space-y-3">
      <div className="flex items-center gap-3">
        <SkeletonCircle size={40} />
        <div className="flex-1 space-y-2">
          <Skeleton height={16} width="60%" />
          <Skeleton height={12} width="40%" />
        </div>
      </div>
      <Skeleton height={100} variant="rounded" />
      <SkeletonText lines={2} />
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <SkeletonGroup direction="column" gap={12}>
      <div className="flex items-center gap-3">
        <SkeletonCircle size={36} />
        <Skeleton height={16} width={200} />
      </div>
      <div className="flex items-center gap-3">
        <SkeletonCircle size={36} />
        <Skeleton height={16} width={180} />
      </div>
      <div className="flex items-center gap-3">
        <SkeletonCircle size={36} />
        <Skeleton height={16} width={220} />
      </div>
    </SkeletonGroup>
  ),
};

export const WithoutAnimation: Story = {
  render: () => (
    <div className="space-y-2">
      <Skeleton animate={false} height={20} width={200} />
      <Skeleton animate={false} height={20} width={180} />
      <Skeleton animate={false} height={20} width={150} />
    </div>
  ),
};

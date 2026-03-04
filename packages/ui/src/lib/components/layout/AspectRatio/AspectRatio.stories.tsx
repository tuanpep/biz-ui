import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./AspectRatio";

const meta: Meta<typeof AspectRatio> = {
  title: "Layout/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays content within a desired aspect ratio. Useful for responsive images, videos, and maps.",
      },
    },
  },
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.1, max: 4, step: 0.1 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm">
          16:9 Aspect Ratio
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="w-[200px]">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center bg-[var(--interactive-01-subtle)] text-[var(--interactive-01)] text-sm font-medium">
          1:1 Square
        </div>
      </AspectRatio>
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px] overflow-hidden">
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Abstract gradient"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

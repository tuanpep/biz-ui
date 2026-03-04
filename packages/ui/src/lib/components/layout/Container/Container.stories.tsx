import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A max-width responsive container that centers content horizontally. Provides consistent padding and breakpoint-based max-widths.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    size: "xl",
  },
  render: (args) => (
    <Container {...args} className="bg-muted p-8">
      <p className="text-sm">
        Container with <code>max-w-screen-xl</code> (default)
      </p>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(["sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <Container key={size} size={size} className="bg-muted p-4">
          <p className="text-sm font-medium">size=&quot;{size}&quot;</p>
        </Container>
      ))}
    </div>
  ),
};

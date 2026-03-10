import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Navigation/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "visited", "muted"],
      description: "Link variant style",
    },
    underline: {
      control: "select",
      options: ["none", "hover", "always"],
      description: "Underline behavior",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Link font size",
    },
    external: {
      control: "boolean",
      description: "Whether it is an external link",
    },
    disabled: {
      control: "boolean",
      description: "Whether the link is disabled",
    },
    asSpan: {
      control: "boolean",
      description: "Render as a span instead of an anchor",
    },
  },
  args: {
    children: "Link text",
    href: "#",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
  },
};

export const External: Story = {
  args: {
    external: true,
    children: "External link",
    href: "https://example.com",
  },
};

export const UnderlineAlways: Story = {
  args: {
    underline: "always",
    children: "Always underlined",
  },
};

export const UnderlineNone: Story = {
  args: {
    underline: "none",
    children: "No underline",
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#">Default Link</Link>
      <Link href="#" variant="visited">
        Visited Link
      </Link>
      <Link href="#" disabled>
        Disabled Link
      </Link>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Link href="#" size="sm">
        Small
      </Link>
      <Link href="#" size="md">
        Medium
      </Link>
      <Link href="#" size="lg">
        Large
      </Link>
    </div>
  ),
};

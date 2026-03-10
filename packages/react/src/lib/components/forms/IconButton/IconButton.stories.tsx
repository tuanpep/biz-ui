import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import {
  Mail,
  Search,
  Bell,
  Settings,
  Trash,
  Plus,
  Check,
  AlertCircle,
} from "lucide-react";

const meta: Meta<typeof IconButton> = {
  title: "Components/Forms/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "outline",
        "ghost",
        "success",
        "warning",
      ],
      description: "IconButton variant style",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "IconButton size",
    },
    loading: {
      control: "boolean",
      description: "Whether the button is in a loading state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    label: {
      control: "text",
      description: "Accessible label for the button",
    },
  },
  args: {
    icon: Mail,
    label: "Send email",
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    icon: Search,
    label: "Search",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    icon: Trash,
    label: "Delete item",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    icon: Settings,
    label: "Open settings",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    icon: Check,
    label: "Complete task",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    icon: Bell,
    label: "View notifications",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    icon: Plus,
    label: "Add new item",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton size="xs" icon={Plus} label="Extra small" />
      <IconButton size="sm" icon={Plus} label="Small" />
      <IconButton size="md" icon={Plus} label="Medium" />
      <IconButton size="lg" icon={Plus} label="Large" />
      <IconButton size="xl" icon={Plus} label="Extra large" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <IconButton variant="default" icon={Bell} label="Default" />
      <IconButton variant="primary" icon={Plus} label="Primary" />
      <IconButton variant="secondary" icon={Settings} label="Secondary" />
      <IconButton variant="tertiary" icon={Mail} label="Tertiary" />
      <IconButton variant="destructive" icon={Trash} label="Destructive" />
      <IconButton variant="outline" icon={Search} label="Outline" />
      <IconButton variant="ghost" icon={Settings} label="Ghost" />
      <IconButton variant="success" icon={Check} label="Success" />
      <IconButton variant="warning" icon={AlertCircle} label="Warning" />
    </div>
  ),
};

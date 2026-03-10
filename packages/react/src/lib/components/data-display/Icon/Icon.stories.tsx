import type { Meta, StoryObj } from "@storybook/react";
import {
  Home,
  Settings,
  User,
  Mail,
  Calendar,
  Star,
  Heart,
  Bell,
  Search,
  ChevronRight,
} from "lucide-react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Data Display/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: [
        Home,
        Settings,
        User,
        Mail,
        Calendar,
        Star,
        Heart,
        Bell,
        Search,
        ChevronRight,
      ],
      description: "Lucide icon component to render",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Icon size",
    },
    color: {
      control: "select",
      options: [
        "default",
        "muted",
        "primary",
        "secondary",
        "destructive",
        "warning",
        "success",
        "info",
      ],
      description: "Icon color variant",
    },
    label: {
      control: "text",
      description: "Accessible label for screen readers",
    },
  },
  args: {
    icon: Home,
    size: "md",
    color: "default",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {},
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon icon={Home} size="xs" />
      <Icon icon={Home} size="sm" />
      <Icon icon={Home} size="md" />
      <Icon icon={Home} size="lg" />
      <Icon icon={Home} size="xl" />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Icon icon={Home} color="default" />
        <Icon icon={Home} color="muted" />
        <Icon icon={Home} color="primary" />
        <Icon icon={Home} color="secondary" />
      </div>
      <div className="flex items-center gap-4">
        <Icon icon={Home} color="destructive" />
        <Icon icon={Home} color="warning" />
        <Icon icon={Home} color="success" />
        <Icon icon={Home} color="info" />
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    icon: Mail,
    label: "Email",
  },
};

export const IconGallery: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <Icon icon={Home} label="Home" />
      <Icon icon={Settings} label="Settings" />
      <Icon icon={User} label="User" />
      <Icon icon={Mail} label="Mail" />
      <Icon icon={Calendar} label="Calendar" />
      <Icon icon={Star} label="Star" />
      <Icon icon={Heart} label="Heart" />
      <Icon icon={Bell} label="Bell" />
      <Icon icon={Search} label="Search" />
      <Icon icon={ChevronRight} label="Chevron" />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";
import { Search, Mail, Lock, User } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Components/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "unstyled"],
      description: "Input variant style",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Input size",
    },
    label: {
      control: "text",
      description: "Optional label text",
    },
    description: {
      control: "text",
      description: "Optional description text",
    },
    error: {
      control: "text",
      description: "Optional error text",
    },
    warn: {
      control: "text",
      description: "Optional warning text",
    },
    leftIcon: {
      control: false,
      description: "Icon to show on the left side",
    },
    rightIcon: {
      control: false,
      description: "Icon to show on the right side",
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "email@example.com",
    required: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: "Username",
    description: "This is your public display name.",
    placeholder: "shadcn",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Input",
    placeholder: "Cannot type here",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    label: "Read Only Input",
    value: "This value is read-only",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "email@example.com",
    error: "Please enter a valid email address.",
  },
};

export const WithWarning: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    warn: "Password is weak.",
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Search...",
    leftIcon: <Search className="h-4 w-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Enter email",
    type: "email",
    rightIcon: <Mail className="h-4 w-4" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Password",
    type: "password",
    leftIcon: <Lock className="h-4 w-4" />,
    rightIcon: <User className="h-4 w-4" />,
  },
};

export const InputTypes: Story = {
  render: () => (
    <div className="grid gap-4">
      <Input label="Number" type="number" placeholder="123" />
      <Input label="Date" type="date" />
      <Input label="Time" type="time" />
      <Input label="Datetime" type="datetime-local" />
      <Input label="Color" type="color" className="h-10 w-20" />
    </div>
  ),
};

export const FileInput: Story = {
  args: {
    label: "Upload file",
    type: "file",
  },
};

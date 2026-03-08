import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker } from "./TimePicker";
import { TimePickerSkeleton } from "./TimePicker.skeleton";

const meta: Meta<typeof TimePicker> = {
  title: "Components/Forms/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "TimePicker size",
    },
    label: {
      control: "text",
      description: "Label text",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    warn: {
      control: "text",
      description: "Warning message",
    },
    description: {
      control: "text",
      description: "Helper description",
    },
    disabled: {
      control: "boolean",
      description: "Disable the picker",
    },
    readOnly: {
      control: "boolean",
      description: "Read-only mode",
    },
    required: {
      control: "boolean",
      description: "Required field",
    },
    hideLabel: {
      control: "boolean",
      description: "Visually hide label",
    },
  },
  args: {
    label: "Time",
    placeholder: "00:00",
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: "14:30",
  },
};

export const WithDescription: Story = {
  args: {
    description: "Select your preferred time",
  },
};

export const WithError: Story = {
  args: {
    error: "Invalid time selected",
  },
};

export const WithWarning: Story = {
  args: {
    warn: "Time is in the past",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "12:00",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: "09:00",
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const HiddenLabel: Story = {
  args: {
    hideLabel: true,
    placeholder: "Select time",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <TimePicker label="Small" size="sm" />
      <TimePicker label="Medium" size="md" />
      <TimePicker label="Large" size="lg" />
    </div>
  ),
};

// Skeleton stories
export const Skeleton: StoryObj<typeof TimePickerSkeleton> = {
  render: () => (
    <div className="w-64">
      <TimePickerSkeleton />
    </div>
  ),
};

export const SkeletonWithLabel: StoryObj<typeof TimePickerSkeleton> = {
  render: () => (
    <div className="w-64">
      <TimePickerSkeleton withLabel />
    </div>
  ),
};

export const SkeletonSizes: StoryObj<typeof TimePickerSkeleton> = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <TimePickerSkeleton size="sm" withLabel />
      <TimePickerSkeleton size="md" withLabel />
      <TimePickerSkeleton size="lg" withLabel />
    </div>
  ),
};

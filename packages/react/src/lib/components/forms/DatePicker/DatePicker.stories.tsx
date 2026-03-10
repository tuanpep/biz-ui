import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { DateRangePicker } from "./DatePicker";
import { DateTimePicker } from "./DatePicker";
import { DatePickerSkeleton } from "./DatePicker.skeleton";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Forms/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "DatePicker size",
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
    },
    readOnly: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    hideLabel: {
      control: "boolean",
    },
  },
  args: {
    label: "Select Date",
    placeholder: "Pick a date",
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: new Date("2024-01-15"),
    label: "Birthday",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <DatePicker size="sm" label="Small" placeholder="Select date" />
      <DatePicker size="md" label="Medium" placeholder="Select date" />
      <DatePicker size="lg" label="Large" placeholder="Select date" />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: "Date of Birth",
    error: "Please select a valid date",
  },
};

export const WithWarning: Story = {
  args: {
    label: "Event Date",
    warn: "This date is in the past",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Appointment Date",
    description: "Select your preferred appointment date",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Date",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read Only Date",
    readOnly: true,
    value: new Date("2024-06-15"),
  },
};

export const Required: Story = {
  args: {
    label: "Required Date",
    required: true,
  },
};

export const HideLabel: Story = {
  args: {
    label: "Hidden Label",
    hideLabel: true,
    placeholder: "No visible label",
  },
};

export const WithMinDate: Story = {
  args: {
    label: "Future Date",
    placeholder: "Select a future date",
    minDate: new Date(),
  },
};

export const WithMaxDate: Story = {
  args: {
    label: "Past Date",
    placeholder: "Select a past date",
    maxDate: new Date(),
  },
};

// DateRangePicker stories
export const DateRange: StoryObj<typeof DateRangePicker> = {
  render: () => (
    <DateRangePicker
      label="Select Date Range"
      placeholder="Choose date range"
    />
  ),
};

// DateTimePicker stories
export const DateTime: StoryObj<typeof DateTimePicker> = {
  render: () => (
    <DateTimePicker
      label="Select Date and Time"
      placeholder="Choose date and time"
    />
  ),
};

// Skeleton stories
export const Skeleton: StoryObj<typeof DatePickerSkeleton> = {
  render: () => (
    <div className="w-64">
      <DatePickerSkeleton />
    </div>
  ),
};

export const SkeletonWithLabel: StoryObj<typeof DatePickerSkeleton> = {
  render: () => (
    <div className="w-64">
      <DatePickerSkeleton withLabel />
    </div>
  ),
};

export const SkeletonSizes: StoryObj<typeof DatePickerSkeleton> = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <DatePickerSkeleton size="sm" withLabel />
      <DatePickerSkeleton size="md" withLabel />
      <DatePickerSkeleton size="lg" withLabel />
    </div>
  ),
};

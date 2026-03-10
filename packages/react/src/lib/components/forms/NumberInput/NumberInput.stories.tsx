import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";
import { DollarSign } from "lucide-react";

const meta: Meta<typeof NumberInput> = {
  title: "Components/Forms/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Input size",
    },
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    hideSteppers: {
      control: "boolean",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
  },
  args: {
    label: "Quantity",
    placeholder: "0",
    min: 0,
    max: 100,
    step: 1,
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    defaultValue: 5,
  },
};

export const WithDescription: Story = {
  args: {
    description: "Enter the number of items you wish to order.",
    defaultValue: 1,
  },
};

export const Currency: Story = {
  args: {
    label: "Budget",
    leftIcon: <DollarSign className="h-4 w-4" />,
    formatOptions: {
      style: "currency",
      currency: "USD",
    },
    defaultValue: 1000,
  },
};

export const IntegerOnly: Story = {
  args: {
    label: "Age",
    min: 18,
    max: 120,
    step: 1,
    defaultValue: 25,
  },
};

export const ErrorState: Story = {
  args: {
    error: "Value must be at least 10.",
    defaultValue: 5,
  },
};

export const WarningState: Story = {
  args: {
    warn: "High values may require approval.",
    defaultValue: 95,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Input",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Input",
  },
};

export const NoSteppers: Story = {
  args: {
    hideSteppers: true,
    label: "No Steppers",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 10,
    label: "Disabled Input",
  },
};

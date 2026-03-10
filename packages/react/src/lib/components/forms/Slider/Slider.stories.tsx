import type { Meta, StoryObj } from "@storybook/react";
import { Slider, RangeSlider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Forms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Slider size",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "destructive",
      ],
      description: "Slider track color variant",
    },
    disabled: {
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
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: "Standard Slider",
    description: "Adjust the volume level.",
  },
};

export const Range: StoryObj<typeof RangeSlider> = {
  render: (args) => <RangeSlider {...args} />,
  args: {
    defaultValue: [25, 75],
    label: "Price Range",
    description: "Select a price minimum and maximum.",
    className: "w-[300px]",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label: "Success Variant",
    defaultValue: [80],
  },
};

export const Warning: Story = {
  args: {
    warn: "This setting might affect performance.",
    label: "Warning State",
    defaultValue: [90],
  },
};

export const Error: Story = {
  args: {
    error: "Value is out of acceptable bounds.",
    label: "Error State",
    defaultValue: [10],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Slider",
    defaultValue: [30],
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[300px]">
      <Slider size="sm" label="Small" defaultValue={[20]} />
      <Slider size="md" label="Medium" defaultValue={[40]} />
      <Slider size="lg" label="Large" defaultValue={[60]} />
    </div>
  ),
};

export const Stepped: Story = {
  args: {
    step: 10,
    label: "Stepped Slider (Interval: 10)",
    defaultValue: [50],
  },
};

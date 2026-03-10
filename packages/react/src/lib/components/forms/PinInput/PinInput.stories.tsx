import type { Meta, StoryObj } from "@storybook/react";
import { PinInput } from "./PinInput";

const meta: Meta<typeof PinInput> = {
  title: "Forms/PinInput",
  component: PinInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Individual inputs for OTP, PIN, or verification codes. Supports auto-advance, paste, and masking.",
      },
    },
  },
  argTypes: {
    length: { control: { type: "number", min: 2, max: 8 } },
    size: { control: "select", options: ["sm", "md", "lg"] },
    type: { control: "select", options: ["text", "number"] },
  },
};
export default meta;

type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  args: {
    length: 4,
    autoFocus: true,
  },
};

export const SixDigitOTP: Story = {
  name: "6-Digit OTP",
  args: {
    length: 6,
    type: "number",
    placeholder: "·",
  },
};

export const Masked: Story = {
  args: {
    length: 4,
    mask: true,
    type: "number",
  },
};

export const WithError: Story = {
  args: {
    length: 4,
    error: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Small</p>
        <PinInput size="sm" length={4} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Medium (default)</p>
        <PinInput size="md" length={4} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Large</p>
        <PinInput size="lg" length={4} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    length: 4,
    disabled: true,
  },
};

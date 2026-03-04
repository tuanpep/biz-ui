import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Multi-step wizard / progress indicator. Shows current step in a workflow sequence.",
      },
    },
  },
  argTypes: {
    activeStep: { control: { type: "number", min: 0, max: 4 } },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    size: { control: "select", options: ["sm", "md"] },
  },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: "Account", description: "Create your account" },
  { label: "Profile", description: "Set up your profile" },
  { label: "Review", description: "Review and submit" },
];

export const Horizontal: Story = {
  args: {
    steps,
    activeStep: 1,
  },
};

export const Vertical: Story = {
  args: {
    steps,
    activeStep: 1,
    orientation: "vertical",
  },
};

export const Completed: Story = {
  args: {
    steps,
    activeStep: 3,
  },
};

export const WithOptional: Story = {
  args: {
    steps: [
      { label: "Account" },
      { label: "Profile", optional: true },
      { label: "Payment" },
      { label: "Review" },
    ],
    activeStep: 1,
  },
};

export const Small: Story = {
  args: {
    steps,
    activeStep: 1,
    size: "sm",
  },
};

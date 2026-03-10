import type { Meta, StoryObj } from "@storybook/react";
import { ProgressIndicator } from "./ProgressIndicator";
import { useState } from "react";

const meta: Meta<typeof ProgressIndicator> = {
  title: "Components/Feedback/ProgressIndicator",
  component: ProgressIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Progress indicator orientation",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Indicator size",
    },
    currentStep: {
      control: "number",
    },
    totalSteps: {
      control: "number",
    },
    showLabels: {
      control: "boolean",
    },
  },
  args: {
    totalSteps: 4,
    currentStep: 2,
    showLabels: true,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressIndicator>;

const StatefulProgressIndicator = (args: Story["args"]) => {
  const [step, setStep] = useState(args?.currentStep || 1);
  return (
    <ProgressIndicator
      {...args}
      totalSteps={args?.totalSteps || 1}
      currentStep={step}
      onChange={setStep}
    />
  );
};

const ProgressDemo = () => {
  const [step, setStep] = useState(1);
  const total = 4;

  return (
    <div className="flex flex-col gap-8 w-[600px]">
      <ProgressIndicator
        totalSteps={total}
        currentStep={step}
        onChange={setStep}
        showLabels
      />

      <div className="p-12 border border-dashed rounded-lg bg-muted/20 text-center">
        <p className="text-lg font-semibold">Content for Step {step}</p>
        <p className="text-sm text-muted-foreground">
          This area changes based on the progress indicator selection.
        </p>
      </div>

      <div className="flex justify-between">
        <button
          disabled={step === 1}
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          className="px-4 py-2 border rounded hover:bg-muted disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={step === total}
          onClick={() => setStep((s) => Math.min(total, s + 1))}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <StatefulProgressIndicator {...args} />,
};

export const Vertical: Story = {
  render: (args) => (
    <div className="h-[400px]">
      <StatefulProgressIndicator {...args} orientation="vertical" />
    </div>
  ),
  args: {
    totalSteps: 5,
  },
};

export const NoLabels: Story = {
  render: (args) => <StatefulProgressIndicator {...args} showLabels={false} />,
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const InteractiveDemo: Story = {
  render: () => <ProgressDemo />,
};

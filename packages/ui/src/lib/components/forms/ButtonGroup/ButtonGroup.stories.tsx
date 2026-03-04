import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button/Button";

const meta: Meta<typeof ButtonGroup> = {
  title: "Forms/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Groups related buttons together with consistent spacing or attached styling.",
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["spaced", "attached"] },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Spaced: Story = {
  render: () => (
    <ButtonGroup variant="spaced">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Center</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  ),
};

export const Attached: Story = {
  render: () => (
    <ButtonGroup variant="attached">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Center</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" variant="spaced">
      <Button variant="secondary" className="w-full">
        Top
      </Button>
      <Button variant="secondary" className="w-full">
        Middle
      </Button>
      <Button variant="secondary" className="w-full">
        Bottom
      </Button>
    </ButtonGroup>
  ),
};

export const MixedVariants: Story = {
  name: "Mixed Button Variants",
  render: () => (
    <ButtonGroup variant="spaced">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Preview</Button>
      <Button variant="tertiary">Cancel</Button>
    </ButtonGroup>
  ),
};

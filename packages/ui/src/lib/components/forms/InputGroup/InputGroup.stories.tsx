import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup, InputAddon, InputLeftElement } from "./InputGroup";
import { Input } from "../Input/Input";

const meta: Meta<typeof InputGroup> = {
  title: "Forms/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Wraps an Input with optional left/right add-ons (text, icons, buttons).",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputGroup>;

export const WithAddons: Story = {
  name: "With Text Addons",
  render: () => (
    <InputGroup>
      <InputAddon placement="left">https://</InputAddon>
      <Input placeholder="example.com" />
      <InputAddon placement="right">.com</InputAddon>
    </InputGroup>
  ),
};

export const LeftAddon: Story = {
  render: () => (
    <InputGroup>
      <InputAddon placement="left">$</InputAddon>
      <Input placeholder="0.00" type="number" />
    </InputGroup>
  ),
};

export const WithElements: Story = {
  name: "With Icon Elements",
  render: () => (
    <div className="relative w-full max-w-sm">
      <InputLeftElement>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </InputLeftElement>
      <Input placeholder="Search..." className="pl-10" />
    </div>
  ),
};

export const EmailInput: Story = {
  render: () => (
    <InputGroup>
      <InputAddon placement="left">@</InputAddon>
      <Input placeholder="username" />
    </InputGroup>
  ),
};

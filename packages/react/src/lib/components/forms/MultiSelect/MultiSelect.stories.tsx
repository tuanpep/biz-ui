import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./MultiSelect";
import { useState } from "react";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "next" },
  { label: "Nuxt.js", value: "nuxt" },
  { label: "Remix", value: "remix" },
  { label: "Gatsby", value: "gatsby" },
];

const meta: Meta<typeof MultiSelect> = {
  title: "Components/Forms/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    options,
    placeholder: "Select frameworks...",
    label: "Framework Selection",
    className: "w-[400px]",
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const StatefulMultiSelect = (args: Story["args"]) => {
  const [value, setValue] = useState<string[]>(args?.value || []);
  return (
    <MultiSelect
      {...args}
      options={args?.options || []}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  render: (args) => <StatefulMultiSelect {...args} />,
};

export const Preselected: Story = {
  args: {
    defaultValue: ["react", "next"],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: ["vue", "svelte"],
  },
};

export const ErrorState: Story = {
  args: {
    error: "Please select at least one framework.",
    defaultValue: [],
  },
};

export const WarningState: Story = {
  args: {
    warn: "Some frameworks might be outdated.",
    defaultValue: ["gatsby"],
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[400px]">
      <MultiSelect
        size="sm"
        label="Small"
        options={options}
        placeholder="sm..."
      />
      <MultiSelect
        size="md"
        label="Medium"
        options={options}
        placeholder="md..."
      />
      <MultiSelect
        size="lg"
        label="Large"
        options={options}
        placeholder="lg..."
      />
    </div>
  ),
};

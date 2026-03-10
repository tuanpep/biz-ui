import type { Meta, StoryObj } from "@storybook/react";
import { Search, ExpandableSearch } from "./Search";

const meta: Meta<typeof Search> = {
  title: "Components/Forms/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Search input size",
    },
    variant: {
      control: "select",
      options: ["default", "filled", "outline"],
      description: "Search input variant",
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
  args: {
    placeholder: "Search for things...",
    label: "Search",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    label: "Standard Search",
    description: "Enter keywords to search the database.",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Search",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Large Search",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: "Searching...",
  },
};

export const WithError: Story = {
  args: {
    error: "Invalid search query.",
    label: "Search with Error",
  },
};

export const WithWarning: Story = {
  args: {
    warn: "Search results might be limited.",
    label: "Search with Warning",
  },
};

export const Expandable: StoryObj<typeof ExpandableSearch> = {
  render: (args) => (
    <div className="flex justify-end p-4 border rounded-lg w-[400px]">
      <ExpandableSearch {...args} />
    </div>
  ),
  args: {
    placeholder: "Find...",
    hideLabel: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[400px]">
      <Search size="sm" label="Small" hideLabel placeholder="Search sm..." />
      <Search size="md" label="Medium" hideLabel placeholder="Search md..." />
      <Search size="lg" label="Large" hideLabel placeholder="Search lg..." />
    </div>
  ),
};

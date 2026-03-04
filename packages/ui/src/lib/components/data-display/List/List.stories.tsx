import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "./List";

const meta: Meta<typeof List> = {
  title: "Data Display/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Ordered and unordered lists with optional icons and consistent spacing.",
      },
    },
  },
  argTypes: {
    spacing: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof List>;

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>First item in the list</ListItem>
      <ListItem>Second item in the list</ListItem>
      <ListItem>Third item in the list</ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <List>
      <ListItem icon={<CheckIcon />}>React 18+ support</ListItem>
      <ListItem icon={<CheckIcon />}>TypeScript strict mode</ListItem>
      <ListItem icon={<CheckIcon />}>Radix UI primitives</ListItem>
      <ListItem icon={<CheckIcon />}>Tailwind CSS styling</ListItem>
    </List>
  ),
};

export const Ordered: Story = {
  render: () => (
    <List ordered>
      <ListItem>Install the package</ListItem>
      <ListItem>Import the CSS styles</ListItem>
      <ListItem>Wrap your app with providers</ListItem>
      <ListItem>Start using components</ListItem>
    </List>
  ),
};

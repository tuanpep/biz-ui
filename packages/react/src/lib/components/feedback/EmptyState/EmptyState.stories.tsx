import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Button } from "../../forms/Button/Button";

const meta: Meta<typeof EmptyState> = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Placeholder for empty content areas with optional icon, description, and call-to-action.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

const InboxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

export const Default: Story = {
  args: {
    icon: <InboxIcon />,
    title: "No messages yet",
    description: "Your inbox is empty. Messages you receive will appear here.",
    action: <Button size="sm">Compose Message</Button>,
  },
};

export const NoIcon: Story = {
  args: {
    title: "No results found",
    description:
      "Try adjusting your search or filter to find what you're looking for.",
  },
};

export const Small: Story = {
  args: {
    title: "No items",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    icon: <InboxIcon />,
    title: "Welcome to your dashboard",
    description:
      "Get started by creating your first project. We'll guide you through the setup process.",
    action: <Button>Create Project</Button>,
    size: "lg",
  },
};

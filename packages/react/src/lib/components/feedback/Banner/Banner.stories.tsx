import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Feedback/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Full-width notification banner for page-level messages, announcements, and system notices.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    variant: "info",
    children: "System maintenance scheduled for Sunday at 2:00 AM UTC.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Your trial expires in 3 days. Upgrade now to keep your data.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Payment failed. Please update your billing information.",
  },
};

export const Dismissible: Story = {
  args: {
    variant: "info",
    dismissible: true,
    children: "New features available! Check out the latest release notes.",
  },
};

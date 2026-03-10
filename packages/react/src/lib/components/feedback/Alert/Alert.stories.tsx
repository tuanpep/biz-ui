import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../Alert";
import { Button } from "../../forms/Button";
import { Terminal } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Components/Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"],
      description: "Alert variant style",
    },
    title: {
      control: "text",
      description: "Alert title",
    },
    description: {
      control: "text",
      description: "Alert description",
    },
    closable: {
      control: "boolean",
      description: "Whether the alert can be closed",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the icon",
    },
  },
  args: {
    title: "Alert Title",
    description: "This is an alert description with helpful information.",
    showIcon: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[450px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: "default",
    title: "New update available",
    description: "A new software version is ready for installation.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Note",
    description: "This action cannot be undone once confirmed.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Your document has been uploaded successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Low disk space",
    description: "You have less than 10% of disk space remaining.",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Connection failed",
    description: "Could not connect to the server. Please try again.",
  },
};

export const Closable: Story = {
  args: {
    variant: "info",
    title: "Dismissible Alert",
    description: "Click the close button on the right to remove this alert.",
    closable: true,
  },
};

export const CustomIcon: Story = {
  args: {
    variant: "default",
    title: "Terminal",
    description: "npm install @repo/ui",
    icon: <Terminal className="h-5 w-5" />,
  },
};

export const WithActions: Story = {
  args: {
    variant: "warning",
    title: "Action Required",
    description:
      "Your subscription is about to expire. Renew now to avoid interruption.",
    actions: (
      <>
        <Button size="sm" variant="outline">
          Later
        </Button>
        <Button size="sm">Renew Now</Button>
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert
        variant="default"
        title="Default Alert"
        description="General information alert."
      />
      <Alert
        variant="info"
        title="Info Alert"
        description="Informational alert for neutral messages."
      />
      <Alert
        variant="success"
        title="Success Alert"
        description="Positive feedback alert."
      />
      <Alert
        variant="warning"
        title="Warning Alert"
        description="Cautionary alert for potential issues."
      />
      <Alert
        variant="destructive"
        title="Error Alert"
        description="Critical error or failure alert."
      />
    </div>
  ),
};

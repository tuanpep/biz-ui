import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "../Alert";
import { Button } from "../../forms/Button";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
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
      <div className="w-[400px]">
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
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "Here is some helpful information for you.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    description: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please review your input before proceeding.",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Error",
    description: "Something went wrong. Please try again.",
  },
};

export const Closable: Story = {
  args: {
    variant: "info",
    title: "Closable Alert",
    description: "Click the X button to close this alert.",
    closable: true,
  },
};

export const WithActions: Story = {
  args: {
    variant: "warning",
    title: "Confirm Action",
    description: "Are you sure you want to delete this item?",
    actions: (
      <>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </>
    ),
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: "info",
    title: "No Icon",
    description: "This alert does not show an icon.",
    showIcon: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <Alert
        variant="default"
        title="Default Alert"
        description="This is a default alert."
      />
      <Alert
        variant="info"
        title="Info Alert"
        description="This is an info alert."
      />
      <Alert
        variant="success"
        title="Success Alert"
        description="This is a success alert."
      />
      <Alert
        variant="warning"
        title="Warning Alert"
        description="This is a warning alert."
      />
      <Alert
        variant="destructive"
        title="Error Alert"
        description="This is an error alert."
      />
    </div>
  ),
};

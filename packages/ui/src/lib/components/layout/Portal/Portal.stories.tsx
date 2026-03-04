import type { Meta, StoryObj } from "@storybook/react";
import { Portal } from "./Portal";
import { useState } from "react";

const meta: Meta<typeof Portal> = {
  title: "Layout/Portal",
  component: Portal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Renders children into a DOM node outside the parent component tree. Useful for escaping overflow:hidden or z-index contexts.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Portal>;

function PortalDemo() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative overflow-hidden border border-border p-4 h-32">
      <p className="text-sm mb-2">
        This container has <code>overflow: hidden</code>
      </p>
      <button
        onClick={() => setShow(!show)}
        className="px-3 py-1 bg-primary text-primary-foreground text-sm"
        type="button"
      >
        {show ? "Hide" : "Show"} Portal Content
      </button>
      {show && (
        <Portal>
          <div className="biz-ui fixed top-4 right-4 bg-white border border-border shadow-lg p-4 z-50">
            <p className="text-sm font-medium">I escaped overflow:hidden!</p>
            <p className="text-xs text-muted-foreground mt-1">
              This content is rendered via Portal at document.body
            </p>
          </div>
        </Portal>
      )}
    </div>
  );
}

export const Default: Story = {
  render: () => <PortalDemo />,
};

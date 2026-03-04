import type { Meta, StoryObj } from "@storybook/react";
import { VisuallyHidden } from "./VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Layout/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Hides content visually while keeping it accessible to screen readers. Essential for icons-only buttons, skip links, and other accessibility patterns.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  render: () => (
    <div>
      <p>
        The following text is visually hidden but readable by screen readers:
      </p>
      <VisuallyHidden>This text is only for screen readers</VisuallyHidden>
      <p className="text-sm text-muted-foreground mt-2">
        Inspect the DOM to see the hidden content.
      </p>
    </div>
  ),
};

export const WithIconButton: Story = {
  name: "Icon Button Pattern",
  render: () => (
    <button
      className="inline-flex items-center justify-center h-10 w-10 border border-border hover:bg-muted"
      type="button"
    >
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
      <VisuallyHidden>Download file</VisuallyHidden>
    </button>
  ),
};

export const FocusableSkipLink: Story = {
  name: "Focusable Skip Link",
  render: () => (
    <div>
      <VisuallyHidden focusable>
        <a href="#main-content">Skip to main content</a>
      </VisuallyHidden>
      <p className="text-sm text-muted-foreground">
        Tab into this area to reveal the skip link.
      </p>
    </div>
  ),
};

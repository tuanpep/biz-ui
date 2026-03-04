import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";

const meta: Meta<typeof HoverCard> = {
  title: "Overlays/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Content that appears when hovering over a trigger element. Useful for previews and additional context.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="text-sm font-medium text-primary underline">
          @biz-ui
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Biz UI</h4>
          <p className="text-sm text-muted-foreground">
            A comprehensive React UI component library built on Radix UI and
            Tailwind CSS.
          </p>
          <div className="flex items-center pt-2 text-xs text-muted-foreground">
            <span>50+ components</span>
            <span className="mx-2">·</span>
            <span>MIT License</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  SimpleTooltip,
} from "./Tooltip";
import { Button } from "../../forms/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Overlays/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Simple: Story = {
  render: () => (
    <SimpleTooltip content="This is a simple tooltip">
      <Button variant="outline">Simple Tooltip</Button>
    </SimpleTooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="flex justify-center gap-4">
        <SimpleTooltip content="Top tooltip" side="top">
          <Button variant="outline">Top</Button>
        </SimpleTooltip>
      </div>
      <div className="flex justify-center gap-4">
        <SimpleTooltip content="Left tooltip" side="left">
          <Button variant="outline">Left</Button>
        </SimpleTooltip>
        <SimpleTooltip content="Right tooltip" side="right">
          <Button variant="outline">Right</Button>
        </SimpleTooltip>
      </div>
      <div className="flex justify-center gap-4">
        <SimpleTooltip content="Bottom tooltip" side="bottom">
          <Button variant="outline">Bottom</Button>
        </SimpleTooltip>
      </div>
    </div>
  ),
};

export const Delay: Story = {
  render: () => (
    <div className="flex gap-4">
      <SimpleTooltip content="Instant tooltip" delayDuration={0}>
        <Button variant="outline">No Delay</Button>
      </SimpleTooltip>
      <SimpleTooltip content="Delayed tooltip" delayDuration={500}>
        <Button variant="outline">500ms Delay</Button>
      </SimpleTooltip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <SimpleTooltip content="You can't see me!" disabled>
      <Button variant="outline">Tooltip Disabled</Button>
    </SimpleTooltip>
  ),
};

export const RichContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Rich Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <p className="font-semibold">Keyboard Shortcuts</p>
            <div className="text-xs space-y-1">
              <p>
                <kbd className="px-1 bg-muted rounded">⌘</kbd> +{" "}
                <kbd className="px-1 bg-muted rounded">C</kbd> Copy
              </p>
              <p>
                <kbd className="px-1 bg-muted rounded">⌘</kbd> +{" "}
                <kbd className="px-1 bg-muted rounded">V</kbd> Paste
              </p>
              <p>
                <kbd className="px-1 bg-muted rounded">⌘</kbd> +{" "}
                <kbd className="px-1 bg-muted rounded">Z</kbd> Undo
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

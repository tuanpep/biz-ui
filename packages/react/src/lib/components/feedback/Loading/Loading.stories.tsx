import type { Meta, StoryObj } from "@storybook/react";
import { Spinner, LoadingOverlay, InlineLoading } from "./Loading";

const meta: Meta = {
  title: "Components/Feedback/Loading",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const SpinnerDefault: Story = {
  render: () => <Spinner />,
};

export const SpinnerSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const InlineLoadingDefault: Story = {
  render: () => <InlineLoading text="Loading data..." />,
};

export const InlineLoadingStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InlineLoading status="active" text="Uploading files..." progress={45} />
      <InlineLoading status="finished" text="Upload complete!" />
      <InlineLoading status="error" text="Failed to upload." />
      <InlineLoading status="inactive" text="Waiting to start..." />
    </div>
  ),
};

export const OverlayDefault: Story = {
  render: () => (
    <div className="relative h-64 w-96 border rounded-lg bg-background p-4">
      <p>This content is being covered by a loading overlay.</p>
      <LoadingOverlay text="Please wait..." variant="default" />
    </div>
  ),
};

export const OverlayBlur: Story = {
  render: () => (
    <div className="relative h-64 w-96 border rounded-lg bg-background p-4">
      <p>The content underneath will be blurred.</p>
      <LoadingOverlay text="Authenticating..." variant="blur" />
    </div>
  ),
};

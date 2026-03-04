import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, HStack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    reverse: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Box = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`p-4 bg-primary text-primary-foreground font-medium rounded border shadow-sm flex items-center justify-center min-w-[60px] ${className}`}
  >
    {children}
  </div>
);

export const Vertical: Story = {
  render: (args) => (
    <Stack {...args} className="w-[300px]">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
  args: {
    direction: "vertical",
    gap: "md",
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <Stack {...args}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
  args: {
    direction: "horizontal",
    gap: "md",
  },
};

export const Gaps: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Extra Small (xs - 4px)
        </p>
        <HStack gap="xs">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Medium (md - 16px)
        </p>
        <HStack gap="md">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Extra Large (xl - 32px)
        </p>
        <HStack gap="xl">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </HStack>
      </div>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-8 bg-muted/30 p-4 border rounded">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Align: Start
        </p>
        <HStack
          align="start"
          className="h-[100px] bg-background border border-dashed rounded p-2"
        >
          <Box className="h-8">H-8</Box>
          <Box className="h-16">H-16</Box>
          <Box className="h-12">H-12</Box>
        </HStack>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Align: Center
        </p>
        <HStack
          align="center"
          className="h-[100px] bg-background border border-dashed rounded p-2"
        >
          <Box className="h-8">H-8</Box>
          <Box className="h-16">H-16</Box>
          <Box className="h-12">H-12</Box>
        </HStack>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Align: End
        </p>
        <HStack
          align="end"
          className="h-[100px] bg-background border border-dashed rounded p-2"
        >
          <Box className="h-8">H-8</Box>
          <Box className="h-16">H-16</Box>
          <Box className="h-12">H-12</Box>
        </HStack>
      </div>
    </div>
  ),
};

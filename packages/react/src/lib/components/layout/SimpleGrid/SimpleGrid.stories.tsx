import type { Meta, StoryObj } from "@storybook/react";
import { SimpleGrid } from "./SimpleGrid";

const meta: Meta<typeof SimpleGrid> = {
  title: "Layout/SimpleGrid",
  component: SimpleGrid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "An equal-width column grid. Supports fixed column count or auto-responsive layout based on minChildWidth.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SimpleGrid>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-muted p-4 text-center text-sm font-medium">{children}</div>
);

export const FixedColumns: Story = {
  render: () => (
    <SimpleGrid columns={3} gap="1rem">
      <Box>Column 1</Box>
      <Box>Column 2</Box>
      <Box>Column 3</Box>
      <Box>Column 4</Box>
      <Box>Column 5</Box>
      <Box>Column 6</Box>
    </SimpleGrid>
  ),
};

export const ResponsiveAutoFit: Story = {
  name: "Responsive (Auto-fit)",
  render: () => (
    <SimpleGrid minChildWidth="200px" gap="1rem">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
      <Box>Item 5</Box>
      <Box>Item 6</Box>
      <Box>Item 7</Box>
      <Box>Item 8</Box>
    </SimpleGrid>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <SimpleGrid columns={2} gap="1.5rem">
      <div className="border border-border p-4">
        <h3 className="font-medium mb-1">Left Column</h3>
        <p className="text-sm text-muted-foreground">Content goes here</p>
      </div>
      <div className="border border-border p-4">
        <h3 className="font-medium mb-1">Right Column</h3>
        <p className="text-sm text-muted-foreground">Content goes here</p>
      </div>
    </SimpleGrid>
  ),
};

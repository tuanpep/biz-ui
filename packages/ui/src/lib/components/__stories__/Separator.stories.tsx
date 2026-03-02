import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from '../separator';
import { Label } from '../label';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px]">
      <Label>Section 1</Label>
      <p className="text-sm text-muted-foreground">Content for section 1</p>
      <Separator className="my-4" />
      <Label>Section 2</Label>
      <p className="text-sm text-muted-foreground">Content for section 2</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-[100px] items-center space-x-4 text-sm">
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>Products</span>
      <Separator orientation="vertical" />
      <span>Contact</span>
    </div>
  ),
};

export const Custom: Story = {
  render: () => (
    <div className="w-[300px]">
      <p>Default separator</p>
      <Separator />
      <p className="mt-4">Thick separator</p>
      <Separator className="h-1 bg-primary/20" />
      <p className="mt-4">Dashed separator</p>
      <Separator className="border-dashed" />
    </div>
  ),
};

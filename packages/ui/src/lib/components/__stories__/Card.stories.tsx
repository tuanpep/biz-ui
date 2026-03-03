import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'flat', 'clickable', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'default',
    size: 'md',
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
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here providing more context about the item.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-text-02">
          This is the card content area. It follows the Biz UI principles with sharp corners and purposeful spacing.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">Primary Action</Button>
        <Button variant="ghost" size="sm" className="ml-2">Secondary</Button>
      </CardFooter>
    </Card>
  ),
};

export const Clickable: Story = {
  render: () => (
    <Card variant="clickable">
      <CardHeader>
        <CardTitle>Clickable Card</CardTitle>
        <CardDescription>Hover to see the border interaction</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">This card is designed to be interactive, showing a visual highlight on hover.</p>
      </CardContent>
    </Card>
  ),
};

export const Flat: Story = {
  render: () => (
    <Card variant="flat">
      <CardHeader>
        <CardTitle>Flat Card</CardTitle>
        <CardDescription>No borders, just layer color</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Useful for embedding sections within another surface.</p>
      </CardContent>
    </Card>
  ),
};

export const Outline: Story = {
  render: () => (
    <Card variant="outline">
      <CardHeader>
        <CardTitle>Outline Card</CardTitle>
        <CardDescription>Bordered variant with transparent background</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">A minimal card variant often used for less prominent information.</p>
      </CardContent>
    </Card>
  ),
};

export const Ghost: Story = {
  render: () => (
    <Card variant="ghost">
      <CardHeader>
        <CardTitle>Ghost Card</CardTitle>
        <CardDescription>Completely transparent backdrop</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Renders without any background or border container.</p>
      </CardContent>
    </Card>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="grid gap-6">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Project Alpha</CardTitle>
          <CardDescription>Active development</CardDescription>
        </CardHeader>
        <CardFooter className="justify-end bg-layer-02 pt-4 pb-4">
          <Button variant="tertiary" size="sm">View Details</Button>
        </CardFooter>
      </Card>

      <Card variant="clickable">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage your preferences</CardDescription>
        </CardHeader>
      </Card>

      <Card variant="outline">
        <CardContent className="pt-6">
          <p className="text-sm font-medium">Quick stats</p>
          <div className="mt-2 text-2xl font-bold">1,234</div>
          <p className="text-xs text-text-03">+12% from last month</p>
        </CardContent>
      </Card>
    </div>
  ),
};


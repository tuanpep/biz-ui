import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Mail, Send, ChevronRight, Loader2 } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Forms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary', 'destructive', 'outline', 'ghost', 'link', 'success', 'warning'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'xl', 'icon'],
      description: 'Button size',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    loadingText: {
      control: 'text',
      description: 'Text to show when loading for screen readers',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: false,
      description: 'Render as a different element using Radix Slot',
    },
  },
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Account',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <Send className="mr-2 h-4 w-4" /> Success
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    children: (
      <>
        Email <ChevronRight className="ml-2 h-4 w-4" />
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    loadingText: 'Processing',
    children: 'Submit',
  },
};

export const IconButton: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    children: <Mail className="h-4 w-4" />,
    'aria-label': 'Send email',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

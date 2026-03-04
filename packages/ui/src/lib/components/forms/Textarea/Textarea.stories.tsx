import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'unstyled'],
      description: 'Textarea variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Textarea size',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
    },
    label: {
      control: 'text',
      description: 'Optional label text',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    error: {
      control: 'text',
      description: 'Optional error text',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
    },
    autoResize: {
      control: 'boolean',
      description: 'Enable auto-resize based on content',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
};

export const WithError: Story = {
  args: {
    label: 'Bio',
    error: 'Bio must be at least 10 characters.',
    placeholder: 'Tell us about yourself',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Description',
    showCount: true,
    maxLength: 200,
    placeholder: 'Describe your idea...',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be edited.',
  },
};

export const AutoResize: Story = {
  args: {
    label: 'Auto-resizing Textarea',
    description: 'This textarea will automatically resize based on content.',
    autoResize: true,
    placeholder: 'Type and watch it grow...',
    className: 'min-h-[60px]',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Textarea size="sm" label="Small" placeholder="Small textarea" />
      <Textarea size="md" label="Medium (default)" placeholder="Medium textarea" />
      <Textarea size="lg" label="Large" placeholder="Large textarea" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Textarea variant="default" label="Default" placeholder="Default variant" />
      <Textarea variant="filled" label="Filled" placeholder="Filled variant" />
      <Textarea variant="unstyled" label="Unstyled" placeholder="Unstyled variant" />
    </div>
  ),
};

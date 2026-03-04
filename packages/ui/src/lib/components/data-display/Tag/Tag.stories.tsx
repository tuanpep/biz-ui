import type { Meta, StoryObj } from '@storybook/react';
import { Tag, DismissibleTag, SelectableTag } from './Tag';
import { Mail, Check, AlertCircle, Info, Tag as TagIcon } from 'lucide-react';

const meta: Meta<typeof Tag> = {
    title: 'Components/Data Display/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'success', 'warning', 'error', 'info', 'outline', 'filled'],
            description: 'Tag color variant',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Tag size',
        },
        dismissible: {
            control: 'boolean',
        },
        selectable: {
            control: 'boolean',
        },
        selected: {
            control: 'boolean',
        },
    },
    args: {
        children: 'Tag Content',
        variant: 'default',
        size: 'md',
    },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        variant: 'default',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Success',
        icon: <Check className="h-3 w-3" />,
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'Error',
        icon: <AlertCircle className="h-3 w-3" />,
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Warning',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'Info',
        icon: <Info className="h-3 w-3" />,
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
        children: 'Filled',
    },
};

export const Dismissible: Story = {
    render: () => (
        <div className="flex gap-2">
            <DismissibleTag variant="default" onDismiss={() => alert('Dismissed!')}>
                Default
            </DismissibleTag>
            <DismissibleTag variant="success" onDismiss={() => alert('Dismissed!')}>
                Success
            </DismissibleTag>
            <DismissibleTag variant="error" onDismiss={() => alert('Dismissed!')}>
                Error
            </DismissibleTag>
        </div>
    ),
};

export const Selectable: Story = {
    render: () => (
        <div className="flex gap-2">
            <SelectableTag variant="default">Option 1</SelectableTag>
            <SelectableTag variant="default" defaultSelected>Option 2</SelectableTag>
            <SelectableTag variant="primary">Option 3</SelectableTag>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4 items-center">
            <Tag variant="default">Default</Tag>
            <Tag variant="secondary">Secondary</Tag>
            <Tag variant="success" icon={<Check className="h-3 w-3" />}>Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="error" icon={<AlertCircle className="h-3 w-3" />}>Error</Tag>
            <Tag variant="info" icon={<Info className="h-3 w-3" />}>Info</Tag>
            <Tag variant="outline">Outline</Tag>
            <Tag variant="filled">Filled</Tag>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
            <Tag size="sm" icon={<TagIcon className="h-3 w-3" />}>Small Tag</Tag>
            <Tag size="md" icon={<TagIcon className="h-3 w-3" />}>Medium Tag</Tag>
            <Tag size="lg" icon={<TagIcon className="h-3 w-3" />}>Large Tag</Tag>
        </div>
    ),
};

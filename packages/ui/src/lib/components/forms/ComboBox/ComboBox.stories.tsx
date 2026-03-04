import type { Meta, StoryObj } from '@storybook/react';
import { ComboBox } from './ComboBox';
import { useState } from 'react';

const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Dragonfruit', value: 'dragonfruit' },
    { label: 'Elderberry', value: 'elderberry' },
    { label: 'Fig', value: 'fig' },
    { label: 'Grape', value: 'grape' },
    { label: 'Honeydew', value: 'honeydew' },
];

const meta: Meta<typeof ComboBox> = {
    title: 'Components/Forms/ComboBox',
    component: ComboBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
        clearable: {
            control: 'boolean',
        },
        loading: {
            control: 'boolean',
        },
    },
    args: {
        options,
        placeholder: 'Select a fruit...',
        label: 'Fruit Selection',
        className: 'w-[300px]',
    },
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return <ComboBox {...args} value={value} onChange={setValue} />;
    },
};

export const WithValue: Story = {
    args: {
        defaultValue: 'cherry',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        defaultValue: 'banana',
    },
};

export const ErrorState: Story = {
    args: {
        error: 'Please select a valid fruit.',
        defaultValue: '',
    },
};

export const Loading: Story = {
    args: {
        loading: true,
    },
};

export const CustomFilter: Story = {
    args: {
        placeholder: 'Search by first letter...',
        filterOption: (option, input) => option.label.toLowerCase().startsWith(input.toLowerCase()),
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-col gap-6 w-[300px]">
            <ComboBox size="sm" label="Small" options={options} placeholder="sm..." />
            <ComboBox size="md" label="Medium" options={options} placeholder="md..." />
            <ComboBox size="lg" label="Large" options={options} placeholder="lg..." />
        </div>
    ),
};

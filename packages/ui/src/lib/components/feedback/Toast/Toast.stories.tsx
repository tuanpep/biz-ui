import type { Meta, StoryObj } from '@storybook/react';
import { ToastContextProvider, useToast } from './Toast';
import { Button } from '../../forms/Button';

const ToastDemo = ({
    title,
    description,
    variant,
    duration
}: {
    title?: string;
    description?: string;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
    duration?: number;
}) => {
    const { toast } = useToast();

    return (
        <Button
            onClick={() =>
                toast({
                    title,
                    description,
                    variant,
                    duration,
                })
            }
        >
            Show Toast
        </Button>
    );
};

const meta: Meta = {
    title: 'Components/Feedback/Toast',
    decorators: [
        (Story) => (
            <ToastContextProvider>
                <div className="flex items-center justify-center min-h-[200px]">
                    <Story />
                </div>
            </ToastContextProvider>
        ),
    ],
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <ToastDemo
            title="Notification"
            description="This is a default toast notification."
        />
    ),
};

export const Success: Story = {
    render: () => (
        <ToastDemo
            variant="success"
            title="Success"
            description="Your changes have been saved successfully."
        />
    ),
};

export const Error: Story = {
    render: () => (
        <ToastDemo
            variant="error"
            title="Error"
            description="Something went wrong. Please try again."
        />
    ),
};

export const Warning: Story = {
    render: () => (
        <ToastDemo
            variant="warning"
            title="Warning"
            description="Your account will expire in 3 days."
        />
    ),
};

export const Info: Story = {
    render: () => (
        <ToastDemo
            variant="info"
            title="Information"
            description="A new update is available for download."
        />
    ),
};

export const WithAction: Story = {
    render: () => {
        const { toast } = useToast();
        return (
            <Button
                onClick={() =>
                    toast({
                        title: "Project deleted",
                        description: "The project has been successfully removed.",
                        variant: "default",
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo clicked"),
                        },
                    })
                }
            >
                Show Toast with Action
            </Button>
        );
    },
};

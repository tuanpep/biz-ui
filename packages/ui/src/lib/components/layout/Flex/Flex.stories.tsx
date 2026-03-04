import type { Meta, StoryObj } from '@storybook/react';
import { Flex, FlexItem, Spacer } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'Layout/Flex',
    component: Flex,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: 'select',
            options: ['row', 'row-reverse', 'col', 'col-reverse'],
        },
        wrap: {
            control: 'select',
            options: ['nowrap', 'wrap', 'wrap-reverse'],
        },
        justify: {
            control: 'select',
            options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
        },
        align: {
            control: 'select',
            options: ['start', 'end', 'center', 'baseline', 'stretch'],
        },
        gap: {
            control: 'select',
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const Box = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <div className={`p-4 bg-secondary text-secondary-foreground font-medium rounded border shadow-sm flex items-center justify-center ${className}`}>
        {children}
    </div>
);

export const Default: Story = {
    render: (args) => (
        <Flex {...args} className="w-[500px] border p-4 rounded-md">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
        </Flex>
    ),
    args: {
        gap: 'md',
        justify: 'start',
    },
};

export const JustifyBetween: Story = {
    render: (args) => (
        <Flex {...args} className="w-[500px] border p-4 rounded-md">
            <Box>Left</Box>
            <Box>Center</Box>
            <Box>Right</Box>
        </Flex>
    ),
    args: {
        justify: 'between',
        gap: 'md',
    },
};

export const WithSpacer: Story = {
    render: () => (
        <Flex className="w-[500px] border p-4 rounded-md" align="center">
            <Box>Logo</Box>
            <Spacer />
            <Box>Nav Item 1</Box>
            <Box className="ml-2">Nav Item 2</Box>
            <Box className="ml-2">Profile</Box>
        </Flex>
    ),
};

export const FlexItemProps: Story = {
    render: () => (
        <Flex gap="md" className="w-[600px] border p-4 rounded-md h-[150px]">
            <FlexItem flex="1" className="bg-primary/10 border-dashed border p-4 flex items-center justify-center rounded">
                Flex 1 (Grows)
            </FlexItem>
            <FlexItem flex="none" className="bg-secondary/10 border-dashed border p-4 flex items-center justify-center rounded w-[100px]">
                Flex None (Fixed)
            </FlexItem>
            <FlexItem flex="1" className="bg-primary/10 border-dashed border p-4 flex items-center justify-center rounded">
                Flex 1 (Grows)
            </FlexItem>
        </Flex>
    ),
};

export const AlignSelf: Story = {
    render: () => (
        <Flex gap="md" className="w-[600px] border p-4 rounded-md h-[150px]" align="center">
            <Box>Center</Box>
            <FlexItem alignSelf="start">
                <Box>Start</Box>
            </FlexItem>
            <Box>Center</Box>
            <FlexItem alignSelf="end">
                <Box>End</Box>
            </FlexItem>
        </Flex>
    ),
};

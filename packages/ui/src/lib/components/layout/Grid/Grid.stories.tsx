import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, Row, Column } from './Grid';

const meta: Meta<typeof Grid> = {
    title: 'Layout/Grid',
    component: Grid,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        condensed: {
            control: 'boolean',
        },
        narrow: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const ColumnItem = ({ span, children }: { span: number | string, children: React.ReactNode }) => (
    <div className="p-4 bg-muted border border-dashed rounded text-center text-sm font-medium">
        Col {span}
        {children && <div className="mt-1 font-normal text-muted-foreground">{children}</div>}
    </div>
);

export const Default: Story = {
    render: (args) => (
        <div className="w-[800px] border p-4 bg-muted/10 rounded">
            <Grid {...args}>
                <Row>
                    <Column sm={4} md={8} lg={12}>
                        <ColumnItem span="sm:4, md:8, lg:12">Full width column</ColumnItem>
                    </Column>
                </Row>
                <Row className="mt-4">
                    <Column sm={2} md={4} lg={6}>
                        <ColumnItem span="sm:2, md:4, lg:6">First half</ColumnItem>
                    </Column>
                    <Column sm={2} md={4} lg={6}>
                        <ColumnItem span="sm:2, md:4, lg:6">Second half</ColumnItem>
                    </Column>
                </Row>
            </Grid>
        </div>
    ),
};

export const Responsive: Story = {
    render: () => (
        <div className="w-[800px] border p-4 bg-muted/10 rounded">
            <Grid>
                <Row>
                    <Column sm={4} md={6} lg={8}>
                        <ColumnItem span="Main Content">sm:4, md:6, lg:8</ColumnItem>
                    </Column>
                    <Column sm={4} md={2} lg={4}>
                        <ColumnItem span="Sidebar">sm:4, md:2, lg:4</ColumnItem>
                    </Column>
                </Row>
            </Grid>
        </div>
    ),
};

export const Offsets: Story = {
    render: () => (
        <div className="w-[800px] border p-4 bg-muted/10 rounded">
            <Grid>
                <Row>
                    <Column lg={4} offset={{ lg: 4 }}>
                        <ColumnItem span="Offset Column">Centered (lg:4 width, lg:4 offset)</ColumnItem>
                    </Column>
                </Row>
            </Grid>
        </div>
    ),
};

export const MultipleColumns: Story = {
    render: () => (
        <div className="w-[800px] border p-4 bg-muted/10 rounded">
            <Grid>
                <Row>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <Column key={i} sm={1} md={1} lg={1}>
                            <div className="h-20 bg-primary/10 border border-primary/20 rounded flex items-center justify-center text-xs">
                                {i + 1}
                            </div>
                        </Column>
                    ))}
                </Row>
                <Row className="mt-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Column key={i} sm={2} md={2} lg={2}>
                            <div className="h-20 bg-secondary/10 border border-secondary/20 rounded flex items-center justify-center text-xs font-semibold">
                                Span 2
                            </div>
                        </Column>
                    ))}
                </Row>
            </Grid>
        </div>
    ),
};

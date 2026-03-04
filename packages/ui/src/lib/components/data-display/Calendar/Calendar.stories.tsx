import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import type { DateRange } from './Calendar.types';
import { useState } from 'react';
import { addDays, subDays, isBefore } from 'date-fns';

const meta: Meta<typeof Calendar> = {
    title: 'Components/Data Display/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        mode: {
            control: 'select',
            options: ['single', 'range'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const DefaultCalendar = (args: Story['args']) => {
    const [date, setDate] = useState<Date | undefined>(args?.selected || new Date());
    return <Calendar {...args} selected={date} onSelect={setDate} />;
};

export const Default: Story = {
    render: (args) => <DefaultCalendar {...args} />,
};

const SingleModeCalendar = (args: Story['args']) => {
    const [date, setDate] = useState<Date | undefined>(args?.selected || addDays(new Date(), 2));
    return <Calendar {...args} mode="single" selected={date} onSelect={setDate} />;
};

export const SingleMode: Story = {
    render: (args) => <SingleModeCalendar {...args} />,
};

const RangeModeCalendar = (args: Story['args']) => {
    const [range, setRange] = useState<DateRange | undefined>(args?.range || {
        start: subDays(new Date(), 2),
        end: addDays(new Date(), 2),
    });

    const handleSelect = (day: Date) => {
        if (!range || (range.start && range.end)) {
            setRange({ start: day, end: null });
        } else {
            const start = range.start && isBefore(range.start, day) ? range.start : day;
            const end = range.start && isBefore(range.start, day) ? day : (range.start ?? null);
            setRange({ start, end });
        }
    };

    return <Calendar {...args} mode="range" range={range} onSelect={handleSelect} />;
};

export const RangeMode: Story = {
    render: (args) => <RangeModeCalendar {...args} />,
};

const WithConstraintsCalendar = (args: Story['args']) => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
        <Calendar
            {...args}
            selected={date}
            onSelect={setDate}
            minDate={subDays(new Date(), 7)}
            maxDate={addDays(new Date(), 14)}
        />
    );
};

export const WithConstraints: Story = {
    render: (args) => <WithConstraintsCalendar {...args} />,
};

/**
 * TimePicker Component Tests
 *
 * Following Carbon's testing patterns.
 */

import * as React from 'react';
import { render, screen, fireEvent } from '../../../../test/utils';
import { TimePicker, TimePickerSkeleton } from './TimePicker';

describe('TimePicker', () => {
  it('renders correctly', () => {
    render(<TimePicker label="Time" />);
    expect(screen.getByText('Time')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<TimePicker label="Time" description="Select a time" />);
    expect(screen.getByText('Select a time')).toBeInTheDocument();
  });

  it('renders with error state', () => {
    render(<TimePicker label="Time" error="Invalid time" />);
    expect(screen.getByText('Invalid time')).toBeInTheDocument();
    const input = screen.getByLabelText('Time');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders with warning state', () => {
    render(<TimePicker label="Time" warn="Time is in the past" />);
    expect(screen.getByText('Time is in the past')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<TimePicker label="Time" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<TimePicker label="Time" disabled />);
    const input = screen.getByLabelText('Time');
    expect(input).toBeDisabled();
  });

  it('handles readOnly state', () => {
    const handleChange = vi.fn();
    render(<TimePicker label="Time" readOnly onChange={handleChange} value="12:00" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
  });

  it('handles value change', () => {
    const handleChange = vi.fn();
    render(<TimePicker label="Time" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '14:30' } });
    expect(handleChange).toHaveBeenCalledWith('14:30');
  });

  it('renders with initial value', () => {
    render(<TimePicker label="Time" value="12:00" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('12:00');
  });

  it('applies custom className', () => {
    render(<TimePicker label="Time" className="custom-class" />);
    const container = screen.getByText('Time').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('applies wrapperClassName', () => {
    render(<TimePicker label="Time" wrapperClassName="wrapper-custom" />);
    const wrapper = screen.getByText('Time').parentElement;
    expect(wrapper).toHaveClass('wrapper-custom');
  });

  it('hides label when hideLabel is true', () => {
    render(<TimePicker label="Hidden" hideLabel />);
    const label = screen.getByText('Hidden');
    expect(label).toHaveClass('sr-only');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<TimePicker label="Small" size="sm" />);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<TimePicker label="Large" size="lg" />);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('renders without wrapper when no label/description/error/warn', () => {
    render(<TimePicker hideLabel />);
    // Should render just the input without wrapper
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

describe('TimePickerSkeleton', () => {
  it('renders skeleton', () => {
    render(<TimePickerSkeleton data-testid="time-skeleton" />);
    expect(screen.getByTestId('time-skeleton')).toBeInTheDocument();
  });

  it('renders skeleton with label', () => {
    render(<TimePickerSkeleton withLabel data-testid="skeleton-with-label" />);
    const skeleton = screen.getByTestId('skeleton-with-label');
    expect(skeleton.querySelector('.h-4')).toBeInTheDocument();
  });

  it('renders skeleton with description', () => {
    render(<TimePickerSkeleton hasDescription data-testid="skeleton-with-desc" />);
    const skeleton = screen.getByTestId('skeleton-with-desc');
    expect(skeleton.querySelector('.h-3')).toBeInTheDocument();
  });

  it('renders skeleton with error', () => {
    render(<TimePickerSkeleton hasError data-testid="skeleton-with-error" />);
    const skeleton = screen.getByTestId('skeleton-with-error');
    expect(skeleton.querySelector('.h-3')).toBeInTheDocument();
  });

  it('renders different sizes', () => {
    const { rerender } = render(<TimePickerSkeleton size="sm" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();

    rerender(<TimePickerSkeleton size="lg" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });
});

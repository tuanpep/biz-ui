/**
 * Slider Component Tests
 *
 * Following Carbon's testing patterns.
 */

import * as React from 'react';
import { render, screen, fireEvent } from '../../../../test/utils';
import { Slider, SliderSkeleton } from '../Slider';

describe('Slider', () => {
  it('renders correctly', () => {
    render(<Slider aria-label="Volume" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Slider label="Volume" />);
    expect(screen.getByText('Volume')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Slider label="Volume" description="Adjust the volume level" />);
    expect(screen.getByText('Adjust the volume level')).toBeInTheDocument();
  });

  it('renders with error state', () => {
    render(<Slider label="Volume" error="Invalid value" />);
    expect(screen.getByText('Invalid value')).toBeInTheDocument();
  });

  it('renders with warning state', () => {
    render(<Slider label="Volume" warn="Warning message" />);
    expect(screen.getByText('Warning message')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<Slider label="Volume" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Slider label="Volume" disabled />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeDisabled();
  });

  it('handles value change', () => {
    const handleChange = vi.fn();
    render(<Slider label="Volume" defaultValue={[50]} onValueChange={handleChange} />);
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '75' } });
  });

  it('applies custom className', () => {
    render(<Slider label="Volume" className="custom-class" />);
    const container = screen.getByText('Volume').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('applies wrapperClassName', () => {
    render(<Slider label="Volume" wrapperClassName="wrapper-custom" />);
    const wrapper = screen.getByText('Volume').parentElement;
    expect(wrapper).toHaveClass('wrapper-custom');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Slider label="Small" size="sm" />);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<Slider label="Large" size="lg" />);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const { rerender } = render(<Slider label="Default" variant="default" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();

    rerender(<Slider label="Primary" variant="primary" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('hides label when hideLabel is true', () => {
    render(<Slider label="Hidden" hideLabel />);
    const label = screen.getByText('Hidden');
    expect(label).toHaveClass('sr-only');
  });
});

describe('SliderSkeleton', () => {
  it('renders skeleton', () => {
    render(<SliderSkeleton data-testid="slider-skeleton" />);
    expect(screen.getByTestId('slider-skeleton')).toBeInTheDocument();
  });

  it('renders skeleton with label', () => {
    render(<SliderSkeleton hasLabel data-testid="skeleton-with-label" />);
    const skeleton = screen.getByTestId('skeleton-with-label');
    expect(skeleton.querySelector('.h-4')).toBeInTheDocument();
  });

  it('renders skeleton with description', () => {
    render(<SliderSkeleton hasDescription data-testid="skeleton-with-desc" />);
    const skeleton = screen.getByTestId('skeleton-with-desc');
    expect(skeleton.querySelector('.h-3')).toBeInTheDocument();
  });

  it('renders skeleton with error', () => {
    render(<SliderSkeleton hasError data-testid="skeleton-with-error" />);
    const skeleton = screen.getByTestId('skeleton-with-error');
    expect(skeleton.querySelector('.h-3')).toBeInTheDocument();
  });
});

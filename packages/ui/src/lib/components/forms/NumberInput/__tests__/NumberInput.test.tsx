/**
 * NumberInput Component Tests
 *
 * Following Carbon's testing patterns.
 */

import * as React from 'react';
import { render, screen, fireEvent } from '../../../../test/utils';
import { NumberInput, NumberInputSkeleton } from '..';
import type { NumberInputProps } from '../NumberInput.types';

// ============================================================================
// Test Utilities
// ============================================================================

// Helper to get increment button
const getIncrementButton = (container: HTMLElement) => {
  return container.querySelector('[aria-label="Increment"]') as HTMLButtonElement;
};

// Helper to get decrement button
const getDecrementButton = (container: HTMLElement) => {
  return container.querySelector('[aria-label="Decrement"]') as HTMLButtonElement;
};

describe('NumberInput', () => {
  const defaultProps: NumberInputProps = {
    label: 'Test Label',
    'data-testid': 'test-numberinput',
  };

  it('renders with label', () => {
    render(<NumberInput {...defaultProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders without label when hideLabel is true', () => {
    render(<NumberInput {...defaultProps} hideLabel />);
    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('sr-only');
  });

  it('renders with description', () => {
    render(<NumberInput {...defaultProps} description="Helper description" />);
    expect(screen.getByText('Helper description')).toBeInTheDocument();
  });

  it('renders with error state', () => {
    render(<NumberInput {...defaultProps} error="Invalid number" />);
    expect(screen.getByText('Invalid number')).toBeInTheDocument();
    const input = screen.getByTestId('test-numberinput');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders with warning state', () => {
    render(<NumberInput {...defaultProps} warn="Warning message" />);
    expect(screen.getByText('Warning message')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<NumberInput {...defaultProps} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<NumberInput {...defaultProps} disabled />);
    const input = screen.getByTestId('test-numberinput');
    expect(input).toBeDisabled();
    // Check steppers are also disabled
    const container = input.closest('.relative')!.parentElement!;
    const incrementBtn = getIncrementButton(container);
    expect(incrementBtn).toBeDisabled();
  });

  it('handles readOnly state', () => {
    const handleChange = vi.fn();
    render(<NumberInput {...defaultProps} readOnly onChange={handleChange} />);
    const input = screen.getByTestId('test-numberinput');
    expect(input).toHaveAttribute('readonly');
    // Steppers should not trigger change
    const container = input.closest('.relative')!.parentElement!;
    const incrementBtn = getIncrementButton(container);
    fireEvent.click(incrementBtn!);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<NumberInput {...defaultProps} onChange={handleChange} />);
    const input = screen.getByTestId('test-numberinput');
    fireEvent.change(input, { target: { value: '10' } });
    expect(handleChange).toHaveBeenCalledWith(10);
  });

  it('increments value when increment button is clicked', () => {
    const handleChange = vi.fn();
    render(<NumberInput {...defaultProps} value={5} step={1} onChange={handleChange} />);
    const container = screen.getByTestId('test-numberinput').closest('.relative')!.parentElement!;
    const incrementBtn = getIncrementButton(container);
    fireEvent.click(incrementBtn!);
    expect(handleChange).toHaveBeenCalledWith(6);
  });

  it('decrements value when decrement button is clicked', () => {
    const handleChange = vi.fn();
    render(<NumberInput {...defaultProps} value={5} step={1} onChange={handleChange} />);
    const container = screen.getByTestId('test-numberinput').closest('.relative')!.parentElement!;
    const decrementBtn = getDecrementButton(container);
    fireEvent.click(decrementBtn!);
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it('respects max constraint', () => {
    const handleChange = vi.fn();
    render(
      <NumberInput
        {...defaultProps}
        value={10}
        min={0}
        max={10}
        step={1}
        onChange={handleChange}
      />
    );
    const container = screen.getByTestId('test-numberinput').closest('.relative')!.parentElement!;
    const incrementBtn = getIncrementButton(container);
    // Click increment - should not exceed max
    fireEvent.click(incrementBtn!);
    // Should not call onChange since we're at max
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('respects min constraint', () => {
    const handleChange = vi.fn();
    render(
      <NumberInput
        {...defaultProps}
        value={0}
        min={0}
        max={10}
        step={1}
        onChange={handleChange}
      />
    );
    const container = screen.getByTestId('test-numberinput').closest('.relative')!.parentElement!;
    const decrementBtn = getDecrementButton(container);
    // Click decrement - should not go below min
    fireEvent.click(decrementBtn!);
    // Should not call onChange since we're at min
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('hides steppers when hideSteppers is true', () => {
    render(<NumberInput {...defaultProps} hideSteppers />);
    const container = screen.getByTestId('test-numberinput').closest('.relative')!;
    expect(container.querySelector('[aria-label="Increment"]')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<NumberInput {...defaultProps} className="custom-class" />);
    const input = screen.getByTestId('test-numberinput');
    expect(input).toHaveClass('custom-class');
  });

  it('applies wrapperClassName', () => {
    render(<NumberInput {...defaultProps} wrapperClassName="wrapper-custom" />);
    const wrapper = screen.getByText('Test Label').parentElement;
    expect(wrapper).toHaveClass('wrapper-custom');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<NumberInput {...defaultProps} size="sm" data-testid="sm-input" />);
    expect(screen.getByTestId('sm-input')).toBeInTheDocument();

    rerender(<NumberInput {...defaultProps} size="lg" data-testid="lg-input" />);
    expect(screen.getByTestId('lg-input')).toBeInTheDocument();
  });
});

describe('NumberInputSkeleton', () => {
  it('renders skeleton', () => {
    render(<NumberInputSkeleton data-testid="number-skeleton" />);
    expect(screen.getByTestId('number-skeleton')).toBeInTheDocument();
  });

  it('renders skeleton with label', () => {
    render(<NumberInputSkeleton hasLabel data-testid="skeleton-with-label" />);
    const skeleton = screen.getByTestId('skeleton-with-label');
    expect(skeleton.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('renders skeleton with description', () => {
    render(<NumberInputSkeleton hasDescription data-testid="skeleton-with-desc" />);
    const skeleton = screen.getByTestId('skeleton-with-desc');
    expect(skeleton.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('renders skeleton with error', () => {
    render(<NumberInputSkeleton hasError data-testid="skeleton-with-error" />);
    const skeleton = screen.getByTestId('skeleton-with-error');
    expect(skeleton.querySelector('.animate-pulse')).toBeInTheDocument();
  });
});

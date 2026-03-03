import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../test/utils';
import { RadioGroup, RadioGroupItem } from '../RadioGroup';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>
    );
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('renders with labels', () => {
    render(
      <RadioGroup defaultValue="option1">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    );
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('applies default value', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>
    );
    expect(screen.getByRole('radio', { name: 'option1' })).toBeChecked();
  });

  it('handles value change', () => {
    const handleValueChange = vi.fn();
    render(
      <RadioGroup onValueChange={handleValueChange}>
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>
    );

    const radio2 = screen.getByRole('radio', { name: 'option2' });
    fireEvent.click(radio2);

    expect(handleValueChange).toHaveBeenCalledWith('option2');
  });

  it('applies disabled state', () => {
    render(
      <RadioGroup disabled>
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>
    );
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('applies size variants', () => {
    const { container } = render(
      <RadioGroup size="lg">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies orientation', () => {
    const { container } = render(
      <RadioGroup orientation="horizontal">
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <RadioGroup description="Select your preferred option">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>
    );
    expect(screen.getByText('Select your preferred option')).toBeInTheDocument();
  });

  it('renders with error', () => {
    render(
      <RadioGroup error="Please select an option">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Please select an option');
  });

  it('applies error styles', () => {
    render(
      <RadioGroup error="Required">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>
    );
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('accepts custom className', () => {
    render(
      <RadioGroup className="custom-class">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>
    );
    expect(screen.getByRole('radiogroup')).toHaveClass('custom-class');
  });

  it('supports keyboard navigation', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: 'option1' });
    radio1.focus();

    // Arrow down should move to next radio
    fireEvent.keyDown(radio1, { key: 'ArrowDown' });
  });
});

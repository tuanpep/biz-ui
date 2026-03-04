import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../../test/utils';
import { Checkbox } from '../../forms/Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" id="terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('applies checked state', () => {
    render(<Checkbox checked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('applies unchecked state', () => {
    render(<Checkbox checked={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('handles onCheckedChange', () => {
    const handleChange = vi.fn();
    render(<Checkbox onCheckedChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });

  it('applies disabled state', () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('applies size variants', () => {
    const { container } = render(<Checkbox size="lg" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    const { container } = render(<Checkbox variant="destructive" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Checkbox description="Check to accept terms" id="terms" />);
    expect(screen.getByText('Check to accept terms')).toBeInTheDocument();
  });

  it('renders with error', () => {
    render(<Checkbox error="You must accept terms" id="terms" />);
    expect(screen.getByRole('alert')).toHaveTextContent('You must accept terms');
  });

  it('applies error styles when error is present', () => {
    render(<Checkbox error="Required" id="terms" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('accepts custom className', () => {
    const { container } = render(<Checkbox className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});

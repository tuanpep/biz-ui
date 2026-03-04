import * as React from 'react';
import { render, screen, fireEvent } from '../../../test/utils';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('can be checked and unchecked', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Check me" onCheckedChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('renders indeterminate state', () => {
    render(<Checkbox checked="indeterminate" label="Select all" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });

  it('displays error message', () => {
    render(<Checkbox error="This is required" label="Required" />);
    expect(screen.getByText('This is required')).toBeInTheDocument();
  });

  it('displays description', () => {
    render(<Checkbox description="Please accept the terms" label="Terms" />);
    expect(screen.getByText('Please accept the terms')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox disabled label="Disabled" />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('applies size variants', () => {
    const { rerender } = render(<Checkbox size="sm" label="Small" />);
    expect(screen.getByRole('checkbox')).toHaveClass('h-4');

    rerender(<Checkbox size="lg" label="Large" />);
    expect(screen.getByRole('checkbox')).toHaveClass('h-6');
  });
});

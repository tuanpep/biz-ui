import * as React from 'react';
import { render, screen, fireEvent } from '../../../test/utils';
import { Switch } from '../switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
    expect(screen.getByText('Enable notifications')).toBeInTheDocument();
  });

  it('can be toggled', () => {
    const handleChange = jest.fn();
    render(<Switch label="Toggle me" onCheckedChange={handleChange} />);

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('renders in checked state', () => {
    render(<Switch checked label="Checked" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('displays description', () => {
    render(<Switch description="Get email updates" label="Notifications" />);
    expect(screen.getByText('Get email updates')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Switch disabled label="Disabled" />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('applies size variants', () => {
    const { rerender } = render(<Switch size="sm" label="Small" />);
    expect(screen.getByRole('switch')).toHaveClass('h-5');

    rerender(<Switch size="lg" label="Large" />);
    expect(screen.getByRole('switch')).toHaveClass('h-7');
  });
});

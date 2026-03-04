import * as React from 'react';
import { render, screen, fireEvent } from '../../../test/utils';
import { Input } from '../Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('applies default variant styles', () => {
    render(<Input placeholder="Default" />);
    const input = screen.getByPlaceholderText('Default');
    expect(input).toHaveClass('border-input');
    expect(input).toHaveClass('bg-background');
  });

  it('applies filled variant styles', () => {
    render(<Input variant="filled" placeholder="Filled" />);
    const input = screen.getByPlaceholderText('Filled');
    expect(input).toHaveClass('bg-muted');
    expect(input).toHaveClass('border-transparent');
  });

  it('applies size styles', () => {
    render(<Input size="lg" placeholder="Large" />);
    const input = screen.getByPlaceholderText('Large');
    expect(input).toHaveClass('h-12');
  });

  it('renders with label', () => {
    render(<Input label="Email" id="email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Input description="Enter your email address" id="email" />);
    expect(screen.getByText('Enter your email address')).toBeInTheDocument();
  });

  it('renders with error', () => {
    render(<Input error="Email is required" id="email" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
  });

  it('applies error styles when error is present', () => {
    render(<Input error="Error" id="test" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-destructive');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('hides description when error is present', () => {
    render(<Input description="Helper text" error="Error message" id="test" />);
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('accepts custom className', () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });
});

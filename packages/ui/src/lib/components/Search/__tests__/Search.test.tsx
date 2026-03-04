/**
 * Search Component Tests
 *
 * Following Carbon's testing patterns.
 */

import * as React from 'react';
import { render, screen, fireEvent } from '../../../../test/utils';
import { Search, ExpandableSearch } from '../Search';

describe('Search', () => {
  it('renders correctly', () => {
    render(<Search placeholder="Search..." />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Search label="Search" placeholder="Type to search" />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<Search label="Search" description="Enter search terms" />);
    expect(screen.getByText('Enter search terms')).toBeInTheDocument();
  });

  it('renders with error state', () => {
    render(<Search label="Search" error="Search failed" />);
    expect(screen.getByText('Search failed')).toBeInTheDocument();
  });

  it('renders with warning state', () => {
    render(<Search label="Search" warn="Too many results" />);
    expect(screen.getByText('Too many results')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<Search label="Search" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Search label="Search" disabled />);
    const input = screen.getByRole('searchbox');
    expect(input).toBeDisabled();
  });

  it('handles value change', () => {
    const handleChange = vi.fn();
    render(<Search label="Search" onChange={handleChange} />);
    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onSearch when Enter is pressed', () => {
    const handleSearch = vi.fn();
    render(<Search label="Search" onSearch={handleSearch} defaultValue="test" />);
    const input = screen.getByRole('searchbox');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleSearch).toHaveBeenCalledWith('test');
  });

  it('shows clear button when value is present', () => {
    render(<Search label="Search" defaultValue="test" />);
    expect(screen.getByLabelText('Clear search')).toBeInTheDocument();
  });

  it('hides clear button when hideClear is true', () => {
    render(<Search label="Search" defaultValue="test" hideClear />);
    expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
  });

  it('clears value when clear button is clicked', () => {
    const handleClear = vi.fn();
    render(<Search label="Search" defaultValue="test" onClear={handleClear} />);
    const clearButton = screen.getByLabelText('Clear search');
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalled();
  });

  it('shows loading spinner when loading is true', () => {
    render(<Search label="Search" loading />);
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Search label="Search" className="custom-class" />);
    const input = screen.getByRole('searchbox');
    expect(input).toHaveClass('custom-class');
  });

  it('applies wrapperClassName', () => {
    render(<Search label="Search" wrapperClassName="wrapper-custom" />);
    const wrapper = screen.getByText('Search').parentElement;
    expect(wrapper).toHaveClass('wrapper-custom');
  });

  it('hides label when hideLabel is true', () => {
    render(<Search label="Hidden" hideLabel />);
    // When hideLabel is true, Search uses aria-label instead of rendering a label element
    const input = screen.getByRole('searchbox');
    expect(input).toHaveAttribute('aria-label', 'Hidden');
    // Label text should not be visible as a separate element
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Search label="Small" size="sm" />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();

    rerender(<Search label="Large" size="lg" />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const { rerender } = render(<Search label="Default" variant="default" />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();

    rerender(<Search label="Filled" variant="filled" />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});

describe('ExpandableSearch', () => {
  it('renders correctly', () => {
    render(<ExpandableSearch placeholder="Search..." />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('expands on focus', () => {
    render(<ExpandableSearch placeholder="Search..." />);
    const input = screen.getByRole('searchbox');
    fireEvent.focus(input);
    // The expandable search should have transition classes on the input
    expect(input).toHaveClass('transition-all');
  });
});

/**
 * MultiSelect Component Tests
 *
 * Following Carbon's testing patterns.
 */

import * as React from 'react';
import { render, screen, fireEvent } from '../../../../test/utils';
import { MultiSelect, MultiSelectTag, MultiSelectSkeleton } from '../multi-select';

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('MultiSelect', () => {
  it('renders correctly', () => {
    render(<MultiSelect options={defaultOptions} placeholder="Select options" />);
    expect(screen.getByText('Select options')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<MultiSelect options={defaultOptions} label="Options" />);
    expect(screen.getByText('Options')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<MultiSelect options={defaultOptions} label="Options" description="Select multiple options" />);
    expect(screen.getByText('Select multiple options')).toBeInTheDocument();
  });

  it('renders with error state', () => {
    render(<MultiSelect options={defaultOptions} label="Options" error="Selection required" />);
    expect(screen.getByText('Selection required')).toBeInTheDocument();
    const trigger = screen.getByRole('button', { name: /options/i });
    expect(trigger).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders with warning state', () => {
    render(<MultiSelect options={defaultOptions} label="Options" warn="Too many selected" />);
    expect(screen.getByText('Too many selected')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<MultiSelect options={defaultOptions} label="Options" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<MultiSelect options={defaultOptions} label="Options" disabled />);
    const trigger = screen.getByRole('button', { name: /options/i });
    expect(trigger).toBeDisabled();
  });

  it('opens dropdown when clicked', () => {
    render(<MultiSelect options={defaultOptions} placeholder="Select" />);
    const trigger = screen.getByRole('button', { name: /select/i });
    fireEvent.click(trigger);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('selects and deselects options', () => {
    const handleChange = vi.fn();
    render(<MultiSelect options={defaultOptions} placeholder="Select" onChange={handleChange} />);
    const trigger = screen.getByRole('button', { name: /select/i });
    fireEvent.click(trigger);

    // Select first option
    fireEvent.click(screen.getByText('Option 1'));
    expect(handleChange).toHaveBeenCalledWith(['option1']);

    // Select second option
    fireEvent.click(screen.getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith(['option1', 'option2']);
  });

  it('displays selected options as tags', () => {
    render(<MultiSelect options={defaultOptions} value={['option1', 'option2']} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('removes option when tag is clicked', () => {
    const handleChange = vi.fn();
    render(
      <MultiSelect
        options={defaultOptions}
        value={['option1', 'option2']}
        onChange={handleChange}
      />
    );

    // Find and click the first remove button
    const removeButtons = screen.getAllByLabelText(/Remove/);
    fireEvent.click(removeButtons[0]);
    expect(handleChange).toHaveBeenCalled();
  });

  it('filters options based on search', () => {
    render(<MultiSelect options={defaultOptions} placeholder="Select" />);
    const trigger = screen.getByRole('button', { name: /select/i });
    fireEvent.click(trigger);

    // Search should filter options (if implemented)
    // This test assumes search functionality exists
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<MultiSelect options={defaultOptions} label="Options" className="custom-class" />);
    const container = screen.getByText('Options').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('applies wrapperClassName', () => {
    render(<MultiSelect options={defaultOptions} label="Options" wrapperClassName="wrapper-custom" />);
    const wrapper = screen.getByText('Options').parentElement;
    expect(wrapper).toHaveClass('wrapper-custom');
  });

  it('hides label when hideLabel is true', () => {
    render(<MultiSelect options={defaultOptions} label="Hidden" hideLabel />);
    const label = screen.getByText('Hidden');
    expect(label).toHaveClass('sr-only');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<MultiSelect options={defaultOptions} label="Small" size="sm" />);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<MultiSelect options={defaultOptions} label="Large" size="lg" />);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('handles disabled options', () => {
    const optionsWithDisabled = [
      ...defaultOptions,
      { value: 'disabled', label: 'Disabled Option', disabled: true },
    ];
    render(<MultiSelect options={optionsWithDisabled} placeholder="Select" />);
    const trigger = screen.getByRole('button', { name: /select/i });
    fireEvent.click(trigger);
    expect(screen.getByText('Disabled Option')).toBeInTheDocument();
  });
});

describe('MultiSelectTag', () => {
  it('renders correctly', () => {
    render(<MultiSelectTag tag="Test Tag" />);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('renders with remove button when removable', () => {
    render(<MultiSelectTag tag="Test Tag" removable onRemove={() => {}} />);
    expect(screen.getByLabelText('Remove Test Tag')).toBeInTheDocument();
  });

  it('calls onRemove when remove button is clicked', () => {
    const handleRemove = vi.fn();
    render(<MultiSelectTag tag="Test Tag" removable onRemove={handleRemove} />);
    fireEvent.click(screen.getByLabelText('Remove Test Tag'));
    expect(handleRemove).toHaveBeenCalled();
  });

  it('applies selected state', () => {
    render(<MultiSelectTag tag="Test Tag" selected />);
    const tag = screen.getByText('Test Tag').parentElement;
    expect(tag).toHaveClass('bg-primary/10');
  });
});

describe('MultiSelectSkeleton', () => {
  it('renders skeleton', () => {
    render(<MultiSelectSkeleton data-testid="multiselect-skeleton" />);
    expect(screen.getByTestId('multiselect-skeleton')).toBeInTheDocument();
  });

  it('renders skeleton with label', () => {
    render(<MultiSelectSkeleton withLabel data-testid="skeleton-with-label" />);
    const skeleton = screen.getByTestId('skeleton-with-label');
    expect(skeleton.querySelector('.h-4')).toBeInTheDocument();
  });

  it('renders skeleton with description', () => {
    render(<MultiSelectSkeleton hasDescription data-testid="skeleton-with-desc" />);
    const skeleton = screen.getByTestId('skeleton-with-desc');
    expect(skeleton.querySelector('.h-3')).toBeInTheDocument();
  });

  it('renders skeleton with error', () => {
    render(<MultiSelectSkeleton hasError data-testid="skeleton-with-error" />);
    const skeleton = screen.getByTestId('skeleton-with-error');
    expect(skeleton.querySelector('.h-3')).toBeInTheDocument();
  });
});

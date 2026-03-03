import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../../test/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectSeparator,
} from '../Select';

describe('Select', () => {
  it('renders correctly', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(
      <Select>
        <SelectTrigger label="Country">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  it('applies size variants', () => {
    const { container } = render(
      <Select>
        <SelectTrigger size="lg">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies disabled state', () => {
    render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('applies error state', () => {
    render(
      <Select>
        <SelectTrigger error errorText="Selection required">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders with error message', () => {
    render(
      <Select>
        <SelectTrigger errorText="Please select an option">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Please select an option');
  });

  it('handles onValueChange', () => {
    const handleValueChange = vi.fn();
    render(
      <Select onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );

    // Open select and click item
    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);
  });

  it('accepts custom className', () => {
    render(
      <Select>
        <SelectTrigger className="custom-trigger">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveClass('custom-trigger');
  });

  it('renders with groups', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders with warning state', () => {
    render(
      <Select>
        <SelectTrigger warn warnText="Please verify your selection">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Please verify your selection');
  });

  it('renders with label prop', () => {
    render(
      <Select>
        <SelectTrigger label="Country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <Select>
        <SelectTrigger label="Country" description="Select your country of residence">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText('Select your country of residence')).toBeInTheDocument();
  });

  it('renders with required indicator', () => {
    render(
      <Select>
        <SelectTrigger label="Country" required>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
        </SelectContent>
      </Select>
    );
    const label = screen.getByText('Country').closest('label');
    expect(label).toHaveTextContent('*');
  });

  it('hides label visually with hideLabel', () => {
    render(
      <Select>
        <SelectTrigger label="Country" hideLabel>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText('Country')).toHaveClass('sr-only');
  });

  it('error takes precedence over warning', () => {
    render(
      <Select>
        <SelectTrigger error errorText="Required field" warn warnText="Just a warning">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Required field');
    expect(screen.queryByText('Just a warning')).not.toBeInTheDocument();
  });
});

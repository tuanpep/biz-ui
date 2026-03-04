import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Electronics', href: '/products/electronics' },
        { label: 'Laptops' },
      ]}
    />
  ),
};

export const ShortPath: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Overview' },
      ]}
    />
  ),
};

export const LongPath: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Settings', href: '/settings' },
        { label: 'Account', href: '/settings/account' },
        { label: 'Security', href: '/settings/account/security' },
        { label: 'Two-Factor Authentication' },
      ]}
    />
  ),
};

export const EcommercePath: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Categories', href: '/categories' },
        { label: 'Electronics', href: '/categories/electronics' },
        { label: 'Computers', href: '/categories/electronics/computers' },
        { label: 'Laptops', href: '/categories/electronics/computers/laptops' },
        { label: 'MacBook Pro 16"' },
      ]}
    />
  ),
};

export const AdminPath: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Admin', href: '/admin' },
        { label: 'Users', href: '/admin/users' },
        { label: 'Edit User' },
      ]}
    />
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Dashboard' },
      ]}
    />
  ),
};

export const WithLongLabels: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Very Long Category Name Here', href: '/category' },
        { label: 'Extremely Long Product Name That Might Overflow' },
      ]}
    />
  ),
};

export const NoLinks: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' },
      ]}
    />
  ),
};

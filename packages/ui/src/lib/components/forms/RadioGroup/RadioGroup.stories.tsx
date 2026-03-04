import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
      <RadioGroupItem value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="small">
      <RadioGroupItem
        value="small"
        label="Small"
        description="Up to 5 users"
      />
      <RadioGroupItem
        value="medium"
        label="Medium"
        description="Up to 20 users"
      />
      <RadioGroupItem
        value="large"
        label="Large"
        description="Unlimited users"
      />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup disabled>
      <RadioGroupItem value="option1" label="Disabled Option 1" />
      <RadioGroupItem value="option2" label="Disabled Option 2" />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <RadioGroup defaultValue="sm1">
          <RadioGroupItem value="sm1" size="sm" label="Small Radio" />
        </RadioGroup>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Medium (default)</p>
        <RadioGroup defaultValue="md1">
          <RadioGroupItem value="md1" size="md" label="Medium Radio" />
        </RadioGroup>
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <RadioGroup defaultValue="lg1">
          <RadioGroupItem value="lg1" size="lg" label="Large Radio" />
        </RadioGroup>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <RadioGroup defaultValue="default_opt">
        <RadioGroupItem value="default_opt" variant="default" label="Default" />
      </RadioGroup>
      <RadioGroup defaultValue="success_opt">
        <RadioGroupItem value="success_opt" variant="success" label="Success" />
      </RadioGroup>
      <RadioGroup defaultValue="destructive_opt">
        <RadioGroupItem value="destructive_opt" variant="destructive" label="Destructive" />
      </RadioGroup>
    </div>
  ),
};

export const PaymentMethod: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="space-y-3">
      <div className="flex items-center space-x-3 p-3 border rounded-lg">
        <RadioGroupItem value="card" label="Credit Card" />
      </div>
      <div className="flex items-center space-x-3 p-3 border rounded-lg">
        <RadioGroupItem value="paypal" label="PayPal" />
      </div>
      <div className="flex items-center space-x-3 p-3 border rounded-lg">
        <RadioGroupItem value="bank" label="Bank Transfer" />
      </div>
    </RadioGroup>
  ),
};

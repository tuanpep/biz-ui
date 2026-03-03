import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form, FormField, FormGroup } from '../form-field';
import { Input } from '../Input';
import { Button } from '../Button';
import { Checkbox } from '../checkbox';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../select';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <FormField label="Email" htmlFor="email">
      <Input id="email" type="email" placeholder="Enter your email" />
    </FormField>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormField
      label="Username"
      htmlFor="username"
      description="This will be your public display name."
    >
      <Input id="username" placeholder="Enter username" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField
      label="Password"
      htmlFor="password"
      error="Password must be at least 8 characters."
    >
      <Input id="password" type="password" placeholder="Enter password" />
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField label="Email" htmlFor="required-email" required>
      <Input id="required-email" type="email" placeholder="Required field" />
    </FormField>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <FormField label="First Name" htmlFor="firstName" orientation="horizontal">
        <Input id="firstName" placeholder="John" />
      </FormField>
      <FormField label="Last Name" htmlFor="lastName" orientation="horizontal">
        <Input id="lastName" placeholder="Doe" />
      </FormField>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <FormField label="Small" htmlFor="small" size="sm">
        <Input id="small" placeholder="Small size" />
      </FormField>
      <FormField label="Medium (default)" htmlFor="medium" size="md">
        <Input id="medium" placeholder="Medium size" />
      </FormField>
      <FormField label="Large" htmlFor="large" size="lg">
        <Input id="large" placeholder="Large size" />
      </FormField>
    </div>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <Form className="w-[350px]">
      <FormField label="Full Name" htmlFor="fullName" required>
        <Input id="fullName" placeholder="John Doe" />
      </FormField>
      <FormField
        label="Email"
        htmlFor="form-email"
        description="We'll never share your email."
        required
      >
        <Input id="form-email" type="email" placeholder="john@example.com" />
      </FormField>
      <FormField label="Password" htmlFor="form-password" required>
        <Input id="form-password" type="password" placeholder="••••••••" />
      </FormField>
      <FormField label="Role" htmlFor="role">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </Form>
  ),
};

export const FormGroupExample: Story = {
  render: () => (
    <FormGroup
      legend="Personal Information"
      description="Please provide your personal details."
      className="w-[350px] border rounded-lg p-4"
    >
      <FormField label="First Name" htmlFor="group-firstName">
        <Input id="group-firstName" />
      </FormField>
      <FormField label="Last Name" htmlFor="group-lastName">
        <Input id="group-lastName" />
      </FormField>
      <FormField label="Date of Birth" htmlFor="dob">
        <Input id="dob" type="date" />
      </FormField>
    </FormGroup>
  ),
};

export const FormVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4">Default Spacing</h4>
        <Form variant="default" className="w-[300px]">
          <FormField label="Field 1">
            <Input />
          </FormField>
          <FormField label="Field 2">
            <Input />
          </FormField>
        </Form>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Compact Spacing</h4>
        <Form variant="compact" className="w-[300px]">
          <FormField label="Field 1">
            <Input />
          </FormField>
          <FormField label="Field 2">
            <Input />
          </FormField>
        </Form>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-4">Spacious</h4>
        <Form variant="spacious" className="w-[300px]">
          <FormField label="Field 1">
            <Input />
          </FormField>
          <FormField label="Field 2">
            <Input />
          </FormField>
        </Form>
      </div>
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="space-y-4">
      <FormField label="Terms and Conditions" htmlFor="terms">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the terms and conditions
          </label>
        </div>
      </FormField>
      <FormField
        label="Newsletter"
        htmlFor="newsletter"
        description="Receive updates about new features"
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <label htmlFor="newsletter" className="text-sm text-muted-foreground">
            Subscribe to newsletter
          </label>
        </div>
      </FormField>
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <FormField label="Valid Field" htmlFor="valid">
        <Input id="valid" defaultValue="correct@email.com" className="border-green-500" />
      </FormField>
      <FormField
        label="Invalid Field"
        htmlFor="invalid"
        error="This field is required"
      >
        <Input id="invalid" className="border-destructive" />
      </FormField>
      <FormField
        label="Warning Field"
        htmlFor="warning"
        description="Please double-check this value"
      >
        <Input id="warning" defaultValue="Maybe incorrect" className="border-yellow-500" />
      </FormField>
    </div>
  ),
};

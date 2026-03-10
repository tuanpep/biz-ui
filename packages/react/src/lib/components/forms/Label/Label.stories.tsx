import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";

const meta: Meta<typeof Label> = {
  title: "Components/Forms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label>Email</Label>,
};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="required">
        Username <span className="text-destructive">*</span>
      </Label>
      <Input id="required" placeholder="Required field" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" />
      <p className="text-xs text-muted-foreground">
        Must be at least 8 characters long
      </p>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid gap-1.5">
        <Label className="text-xs">Extra Small Label</Label>
        <Input placeholder="Small input" className="h-8" />
      </div>
      <div className="grid gap-1.5">
        <Label>Default Label</Label>
        <Input placeholder="Default input" />
      </div>
      <div className="grid gap-1.5">
        <Label className="text-lg">Large Label</Label>
        <Input placeholder="Large input" className="h-12" />
      </div>
    </div>
  ),
};

export const FormLabels: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" placeholder="John" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" placeholder="Doe" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm gap-1.5">
        <Label>Enabled Label</Label>
        <Input placeholder="Enabled input" />
      </div>
      <div className="grid w-full max-w-sm gap-1.5 opacity-50">
        <Label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled Label
        </Label>
        <Input placeholder="Disabled input" disabled className="peer" />
      </div>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="error-input" className="text-destructive">
        Email Address
      </Label>
      <Input
        id="error-input"
        type="email"
        placeholder="invalid-email"
        className="border-destructive"
      />
      <p className="text-xs text-destructive">
        Please enter a valid email address
      </p>
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => (
    <div className="space-y-2">
      <Label className="text-base font-semibold mb-3 block">
        Select your preferred contact method
      </Label>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <input type="radio" id="email-contact" name="contact" value="email" />
          <Label htmlFor="email-contact" className="font-normal cursor-pointer">
            Email
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="phone-contact" name="contact" value="phone" />
          <Label htmlFor="phone-contact" className="font-normal cursor-pointer">
            Phone
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" id="sms-contact" name="contact" value="sms" />
          <Label htmlFor="sms-contact" className="font-normal cursor-pointer">
            SMS
          </Label>
        </div>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Label className="text-primary font-bold">Primary Colored Label</Label>
      <br />
      <Label className="text-muted-foreground italic">Muted Italic Label</Label>
      <br />
      <Label className="text-destructive uppercase tracking-wide">
        Error Label
      </Label>
    </div>
  ),
};

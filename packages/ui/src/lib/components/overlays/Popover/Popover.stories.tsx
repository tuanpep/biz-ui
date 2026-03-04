import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Button } from "../../forms/Button";
import { Input } from "../../forms/Input";
import { Label } from "../../forms/Label";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. Width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Simple: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Show Info</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p className="text-sm">
          This is a simple popover with just text content. Popovers are great
          for displaying additional information without cluttering the main
          interface.
        </p>
      </PopoverContent>
    </Popover>
  ),
};

export const FormPopover: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Quick Add</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Item</h4>
            <p className="text-sm text-muted-foreground">
              Enter the details below.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Item name" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email address" />
            </div>
          </div>
          <Button className="w-full">Add Item</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

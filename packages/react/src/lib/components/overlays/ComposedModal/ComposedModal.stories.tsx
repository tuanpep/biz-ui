import type { Meta, StoryObj } from "@storybook/react";
import {
  ComposedModal,
  ComposedModalTrigger,
  ComposedModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalSkeleton,
} from "./ComposedModal";
import { Button } from "../../forms/Button";
import { Input } from "../../forms/Input";
import { Label } from "../../forms/Label";
import { Info } from "lucide-react";

const meta: Meta<typeof ComposedModal> = {
  title: "Components/Overlays/ComposedModal",
  component: ComposedModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ComposedModal>;

export const Default: Story = {
  render: () => (
    <ComposedModal>
      <ComposedModalTrigger asChild>
        <Button>Open Composed Modal</Button>
      </ComposedModalTrigger>
      <ComposedModalContent>
        <ModalHeader
          title="Modal Title"
          description="Provide a brief description of the modal's purpose."
        />
        <ModalBody>
          <p className="text-sm">
            This is the modal body content. You can place any components or text
            here. The ComposedModal allows for flexible layout by combining
            header, body, and footer.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Confirm Action</Button>
        </ModalFooter>
      </ComposedModalContent>
    </ComposedModal>
  ),
};

export const WithForm: Story = {
  render: () => (
    <ComposedModal>
      <ComposedModalTrigger asChild>
        <Button>Edit User Profile</Button>
      </ComposedModalTrigger>
      <ComposedModalContent size="md">
        <ModalHeader
          title="Edit Profile"
          description="Update your account information."
        />
        <ModalBody className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="john@example.com"
              className="col-span-3"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary">Save Changes</Button>
        </ModalFooter>
      </ComposedModalContent>
    </ComposedModal>
  ),
};

export const LargeScrollable: Story = {
  render: () => (
    <ComposedModal>
      <ComposedModalTrigger asChild>
        <Button>View Terms of Service</Button>
      </ComposedModalTrigger>
      <ComposedModalContent size="lg">
        <ModalHeader title="Terms of Service" />
        <ModalBody scrollable>
          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={i}>
                Section {i + 1}: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary">I Accept</Button>
        </ModalFooter>
      </ComposedModalContent>
    </ComposedModal>
  ),
};

export const DangerModal: Story = {
  render: () => (
    <ComposedModal>
      <ComposedModalTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </ComposedModalTrigger>
      <ComposedModalContent size="sm">
        <ModalHeader
          title="Delete Account"
          description="Are you absolutely sure you want to delete your account?"
          icon={<Info className="h-5 w-5 text-destructive" />}
        />
        <ModalBody>
          <p className="text-sm">
            This action is irreversible and will result in the permanent
            deletion of all your data.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Permanently Delete</Button>
        </ModalFooter>
      </ComposedModalContent>
    </ComposedModal>
  ),
};

export const Skeleton: Story = {
  render: () => (
    <div className="w-[400px] border rounded-lg overflow-hidden">
      <ModalSkeleton size="md" />
    </div>
  ),
};

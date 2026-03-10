import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./Table";
import { Badge } from "../Badge";

const meta: Meta<typeof Table> = {
  title: "Components/Data Display/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Table size/spacing",
    },
    stickyHeader: {
      control: "boolean",
      description: "Whether header is sticky when scrolling",
    },
    useZebraStyles: {
      control: "boolean",
      description: "Enable zebra striping (alternate row colors)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "inactive",
    role: "User",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "active",
    role: "Editor",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    status: "pending",
    role: "User",
  },
];

export const Default: Story = {
  render: (args) => (
    <div className="w-[800px]">
      <Table {...args}>
        <TableCaption>A list of recent workspace members.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium text-muted-foreground w-12">
                {user.id}
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.status === "active"
                      ? "success"
                      : user.status === "pending"
                        ? "warning"
                        : "secondary"
                  }
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

export const Zebra: Story = {
  args: {
    useZebraStyles: true,
  },
  render: (args) => (
    <div className="w-[800px]">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Smart Watch X1</TableCell>
            <TableCell>SW-001</TableCell>
            <TableCell className="text-right">$299.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wireless Buds Pro</TableCell>
            <TableCell>WB-PRO</TableCell>
            <TableCell className="text-right">$149.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Smart Watch X2</TableCell>
            <TableCell>SW-002</TableCell>
            <TableCell className="text-right">$399.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>USB-C Hub</TableCell>
            <TableCell>HUB-USB</TableCell>
            <TableCell className="text-right">$59.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-12 w-[800px]">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Small (sm)</h4>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>package.json</TableCell>
              <TableCell>2.4 KB</TableCell>
              <TableCell>Just now</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>README.md</TableCell>
              <TableCell>1.1 KB</TableCell>
              <TableCell>2 days ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Medium (md - default)</h4>
        <Table size="md">
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>package.json</TableCell>
              <TableCell>2.4 KB</TableCell>
              <TableCell>Just now</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>README.md</TableCell>
              <TableCell>1.1 KB</TableCell>
              <TableCell>2 days ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Large (lg)</h4>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Modified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>package.json</TableCell>
              <TableCell>2.4 KB</TableCell>
              <TableCell>Just now</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>README.md</TableCell>
              <TableCell>1.1 KB</TableCell>
              <TableCell>2 days ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
};

export const WithStickyHeader: Story = {
  args: {
    stickyHeader: true,
  },
  render: (args) => (
    <div className="h-[300px] overflow-auto border rounded-md">
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 40 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">USR-{1000 + i}</TableCell>
              <TableCell>User {i + 1}</TableCell>
              <TableCell>user{i + 1}@example.com</TableCell>
              <TableCell>Department {(i % 5) + 1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

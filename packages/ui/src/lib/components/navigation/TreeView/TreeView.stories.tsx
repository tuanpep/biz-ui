import type { Meta, StoryObj } from "@storybook/react";
import { TreeView } from "./TreeView";
import { TreeViewItem } from "./TreeView";
import { Folder, FolderOpen, File, FileText } from "lucide-react";

const meta: Meta<typeof TreeView> = {
  title: "Components/Navigation/TreeView",
  component: TreeView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "TreeView size",
    },
    multiSelect: {
      control: "boolean",
      description: "Enable multiple selection",
    },
  },
  args: {
    items: [
      {
        id: "root",
        label: "Root Folder",
        icon: Folder,
        children: [
          {
            id: "folder1",
            label: "Folder 1",
            icon: Folder,
            children: [
              { id: "file1-1", label: "File 1-1", icon: File },
              { id: "file1-2", label: "File 1-2", icon: File },
            ],
          },
          {
            id: "folder2",
            label: "Folder 2",
            icon: FolderOpen,
            children: [{ id: "file2-1", label: "File 2-1", icon: FileText }],
          },
        ],
      },
    ],
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: "root",
        label: "Documents",
        icon: Folder,
        children: [
          {
            id: "work",
            label: "Work",
            icon: Folder,
            children: [
              { id: "project1", label: "Project 1", icon: FolderOpen },
              { id: "project2", label: "Project 2", icon: Folder },
            ],
          },
          {
            id: "personal",
            label: "Personal",
            icon: Folder,
            children: [
              { id: "photos", label: "Photos", icon: Folder },
              { id: "music", label: "Music", icon: Folder },
            ],
          },
        ],
      },
    ],
    size: "md",
  },
};

export const MultiSelect: Story = {
  args: {
    multiSelect: true,
    items: [
      {
        id: "item1",
        label: "Item 1",
      },
      {
        id: "item2",
        label: "Item 2",
      },
      {
        id: "item3",
        label: "Item 3",
      },
    ],
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <TreeView size="sm" items={[{ id: "1", label: "Item 1" }]} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Medium</p>
        <TreeView size="md" items={[{ id: "1", label: "Item 1" }]} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <TreeView size="lg" items={[{ id: "1", label: "Item 1" }]} />
      </div>
    </div>
  ),
};

// TreeViewItem standalone story
const treeViewItemMeta: Meta<typeof TreeViewItem> = {
  title: "Components/Navigation/TreeViewItem",
  component: TreeViewItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    selected: {
      control: "boolean",
      description: "Whether item is selected",
    },
    expanded: {
      control: "boolean",
      description: "Whether item is expanded",
    },
    hasChildren: {
      control: "boolean",
      description: "Whether item has children",
    },
  },
  args: {
    item: {
      id: "demo",
      label: "Demo Item",
      icon: File,
    },
    size: "md",
  },
};

export const TreeViewItemDefault: typeof treeViewItemMeta = {
  args: {},
};

export const TreeViewItemWithChildren: typeof treeViewItemMeta = {
  args: {
    item: {
      id: "parent",
      label: "Parent Item",
      icon: Folder,
      children: [],
    },
    hasChildren: true,
    expanded: true,
  },
};

export const TreeViewItemExpanded: typeof treeViewItemMeta = {
  args: {
    item: {
      id: "folder",
      label: "Expanded Folder",
      icon: FolderOpen,
      children: [],
    },
    hasChildren: true,
    expanded: true,
  },
};

export { treeViewItemMeta };

import type { Meta, StoryObj } from "@storybook/react";
import type { PaginationNavProps } from "./Pagination.types";
import { Pagination, PaginationNav } from "./Pagination";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Pagination size",
    },
    total: {
      control: "number",
      description: "Total number of pages",
    },
    page: {
      control: "number",
      description: "Current page number",
    },
    showFirstLast: {
      control: "boolean",
    },
    showPageSize: {
      control: "boolean",
    },
    showTotal: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    total: 10,
    page: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const DefaultPagination = (args: Story["args"]) => {
  const [page, setPage] = useState(args?.page || 1);
  return (
    <Pagination
      {...args}
      total={args?.total || 10}
      page={page}
      onChange={setPage}
    />
  );
};

export const Default: Story = {
  render: (args) => <DefaultPagination {...args} />,
};

const FirstLastPagination = (args: Story["args"]) => {
  const [page, setPage] = useState(args?.page || 1);
  return (
    <Pagination
      {...args}
      total={args?.total || 20}
      page={page}
      onChange={setPage}
      showFirstLast
    />
  );
};

export const WithFirstLast: Story = {
  render: (args) => <FirstLastPagination {...args} />,
  args: {
    total: 20,
  },
};

const PageSizePagination = (args: Story["args"]) => {
  const [page, setPage] = useState(args?.page || 1);
  const [pageSize, setPageSize] = useState(args?.pageSize || 10);
  return (
    <Pagination
      {...args}
      total={args?.total || 10}
      page={page}
      pageSize={pageSize}
      onChange={setPage}
      onPageSizeChange={setPageSize}
      showPageSize
    />
  );
};

export const WithPageSize: Story = {
  render: (args) => <PageSizePagination {...args} />,
  args: {
    totalItems: 100,
    total: 10,
  },
};

const FullFeaturedPagination = (args: Story["args"]) => {
  const [page, setPage] = useState(args?.page || 1);
  const [pageSize, setPageSize] = useState(args?.pageSize || 20);
  const totalItems = args?.totalItems || 456;
  return (
    <Pagination
      {...args}
      page={page}
      pageSize={pageSize}
      onChange={setPage}
      onPageSizeChange={setPageSize}
      showFirstLast
      showPageSize
      showTotal
      totalItems={totalItems}
      total={args?.total || Math.ceil(totalItems / pageSize)}
    />
  );
};

export const FullFeatured: Story = {
  render: (args) => <FullFeaturedPagination {...args} />,
};

const NavOnlyPagination = (args: PaginationNavProps) => {
  const [page, setPage] = useState(args?.page || 1);
  return (
    <PaginationNav
      {...args}
      total={args?.total || 5}
      page={page}
      onChange={setPage}
    />
  );
};

export const NavigationOnly: StoryObj<typeof PaginationNav> = {
  render: (args) => <NavOnlyPagination {...args} />,
  args: {
    total: 5,
    page: 1,
  },
};

const AllSizesPagination = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col gap-8">
      <Pagination size="sm" total={10} page={page} onChange={setPage} />
      <Pagination size="md" total={10} page={page} onChange={setPage} />
      <Pagination size="lg" total={10} page={page} onChange={setPage} />
    </div>
  );
};

export const AllSizes: Story = {
  render: () => <AllSizesPagination />,
};

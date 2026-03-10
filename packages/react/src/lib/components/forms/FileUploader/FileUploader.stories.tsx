import type { Meta, StoryObj } from "@storybook/react";
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import type { FileUploaderFile } from "./FileUploader.types";

const meta: Meta<typeof FileUploader> = {
  title: "Components/Forms/FileUploader",
  component: FileUploader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
  },
  args: {
    label: "Upload Files",
    description: "Please upload JPG, PNG or PDF files. Max size 5MB.",
    buttonLabel: "Add file",
    accept: ".jpg,.png,.pdf",
    className: "w-[500px]",
  },
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

const DefaultFileUploader = (args: Story["args"]) => {
  const [files, setFiles] = useState<FileUploaderFile[]>([]);
  return <FileUploader {...args} files={files} onChange={setFiles} />;
};

export const Default: Story = {
  render: (args) => <DefaultFileUploader {...args} />,
};

const SingleFileUploader = (args: Story["args"]) => {
  const [files, setFiles] = useState<FileUploaderFile[]>([]);
  return (
    <FileUploader
      {...args}
      files={files}
      onChange={setFiles}
      multiple={false}
    />
  );
};

export const SingleFile: Story = {
  render: (args) => <SingleFileUploader {...args} />,
  args: {
    label: "Upload Profile Picture",
    description: "Select a single image file.",
  },
};

const ExistingFileUploader = (args: Story["args"]) => {
  const [files, setFiles] = useState<FileUploaderFile[]>([
    {
      uuid: "1",
      name: "document.pdf",
      size: 1024 * 1024 * 2.5,
      type: "application/pdf",
      status: "complete",
    },
    {
      uuid: "2",
      name: "image.png",
      size: 1024 * 512,
      type: "image/png",
      status: "uploading",
    },
  ]);
  return <FileUploader {...args} files={files} onChange={setFiles} />;
};

export const ExistingFiles: Story = {
  render: (args) => <ExistingFileUploader {...args} />,
};

const ErrorFileUploader = (args: Story["args"]) => {
  const [files, setFiles] = useState<FileUploaderFile[]>([
    {
      uuid: "1",
      name: "large_file.zip",
      size: 1024 * 1024 * 50,
      type: "application/zip",
      status: "error",
      errorMessage: "File size exceeds limit.",
    },
  ]);
  return (
    <FileUploader
      {...args}
      files={files}
      onChange={setFiles}
      error="Some files failed to upload."
    />
  );
};

export const WithError: Story = {
  render: (args) => <ErrorFileUploader {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Uploader Disabled",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[500px]">
      <FileUploader size="sm" label="Small" />
      <FileUploader size="md" label="Medium" />
      <FileUploader size="lg" label="Large" />
    </div>
  ),
};

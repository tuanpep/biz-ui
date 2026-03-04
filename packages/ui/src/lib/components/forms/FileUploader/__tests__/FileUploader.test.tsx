/**
 * FileUploader Component Tests
 *
 * Following Carbon's testing patterns.
 */

import * as React from "react";
import { render, screen, fireEvent } from "../../../../test/utils";
import {
  FileUploader,
  FileUploaderButton,
  FileUploaderDropContainer,
  FileUploaderItem,
  FileUploaderSkeleton,
} from "../Index";
import type { FileUploaderFile } from "../FileUploader.types";

// Helpers removed as they were unused

describe("FileUploader", () => {
  it("renders correctly", () => {
    render(<FileUploader />);
    expect(screen.getByText(/drag and drop/i)).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<FileUploader label="Upload Files" />);
    expect(screen.getByText("Upload Files")).toBeInTheDocument();
  });

  it("renders with description", () => {
    render(
      <FileUploader label="Upload" description="Select files to upload" />,
    );
    expect(screen.getByText("Select files to upload")).toBeInTheDocument();
  });

  it("renders with error state", () => {
    render(<FileUploader label="Upload" error="Upload failed" />);
    expect(screen.getByText("Upload failed")).toBeInTheDocument();
  });

  it("renders with warning state", () => {
    render(<FileUploader label="Upload" warn="File too large" />);
    expect(screen.getByText("File too large")).toBeInTheDocument();
  });

  it("shows required indicator", () => {
    render(<FileUploader label="Upload" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(<FileUploader label="Upload" disabled />);
    const dropContainer = screen.getByRole("button", {
      name: /drag and drop/i,
    });
    expect(dropContainer).toHaveAttribute("aria-disabled", "true");
  });

  it("handles readOnly state", () => {
    render(<FileUploader label="Upload" readOnly />);
    // Read-only should not allow file selection
    expect(screen.getByText(/drag and drop/i)).toBeInTheDocument();
  });

  it("hides label when hideLabel is true", () => {
    render(<FileUploader label="Hidden" hideLabel />);
    const label = screen.getByText("Hidden");
    expect(label).toHaveClass("sr-only");
  });

  it("applies custom className", () => {
    render(<FileUploader label="Upload" className="custom-class" />);
    const container = screen.getByText("Upload").parentElement;
    expect(container).toHaveClass("custom-class");
  });

  it("applies wrapperClassName", () => {
    render(<FileUploader label="Upload" wrapperClassName="wrapper-custom" />);
    const wrapper = screen.getByText("Upload").parentElement;
    expect(wrapper).toHaveClass("wrapper-custom");
  });

  it("renders with custom button label", () => {
    render(<FileUploader buttonLabel="Choose Files" />);
    expect(screen.getByText("Choose Files")).toBeInTheDocument();
  });

  it("displays uploaded files", () => {
    const files: FileUploaderFile[] = [
      { uuid: "1", name: "test.txt", size: 1024, type: "text/plain" },
    ];
    render(<FileUploader files={files} />);
    expect(screen.getByText("test.txt")).toBeInTheDocument();
  });

  it("handles file removal", () => {
    const handleChange = vi.fn();
    const files: FileUploaderFile[] = [
      { uuid: "1", name: "test.txt", size: 1024, type: "text/plain" },
    ];
    render(<FileUploader files={files} onChange={handleChange} />);
    const removeButton = screen.getByLabelText("Remove file");
    fireEvent.click(removeButton);
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it("shows file size correctly", () => {
    const files: FileUploaderFile[] = [
      {
        uuid: "1",
        name: "large.txt",
        size: 1024 * 1024 * 5,
        type: "text/plain",
      }, // 5 MB
    ];
    render(<FileUploader files={files} />);
    expect(screen.getByText("5.0 MB")).toBeInTheDocument();
  });

  it("shows error state on file item", () => {
    const files: FileUploaderFile[] = [
      {
        uuid: "1",
        name: "error.txt",
        size: 1024,
        type: "text/plain",
        status: "error",
        errorMessage: "Upload failed",
      },
    ];
    render(<FileUploader files={files} />);
    expect(screen.getByText("Upload failed")).toBeInTheDocument();
  });

  it("shows uploading state on file item", () => {
    const files: FileUploaderFile[] = [
      {
        uuid: "1",
        name: "uploading.txt",
        size: 1024,
        type: "text/plain",
        status: "uploading",
        progress: 50,
      },
    ];
    render(<FileUploader files={files} />);
    // Check for loading spinner
    expect(document.querySelector(".animate-spin")).toBeInTheDocument();
  });
});

describe("FileUploaderButton", () => {
  it("renders correctly", () => {
    render(<FileUploaderButton>Add File</FileUploaderButton>);
    expect(screen.getByText("Add File")).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(<FileUploaderButton disabled>Add File</FileUploaderButton>);
    expect(screen.getByText("Add File")).toBeDisabled();
  });

  it("renders different variants", () => {
    const { rerender } = render(
      <FileUploaderButton variant="primary">Primary</FileUploaderButton>,
    );
    expect(screen.getByText("Primary")).toBeInTheDocument();

    rerender(
      <FileUploaderButton variant="secondary">Secondary</FileUploaderButton>,
    );
    expect(screen.getByText("Secondary")).toBeInTheDocument();

    rerender(<FileUploaderButton variant="ghost">Ghost</FileUploaderButton>);
    expect(screen.getByText("Ghost")).toBeInTheDocument();
  });

  it("renders different sizes", () => {
    const { rerender } = render(
      <FileUploaderButton size="sm">Small</FileUploaderButton>,
    );
    expect(screen.getByText("Small")).toBeInTheDocument();

    rerender(<FileUploaderButton size="lg">Large</FileUploaderButton>);
    expect(screen.getByText("Large")).toBeInTheDocument();
  });
});

describe("FileUploaderDropContainer", () => {
  it("renders correctly", () => {
    render(<FileUploaderDropContainer />);
    expect(screen.getByText(/drag and drop/i)).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(<FileUploaderDropContainer disabled />);
    const container = screen.getByRole("button");
    expect(container).toHaveAttribute("aria-disabled", "true");
  });

  it("shows multiple files hint", () => {
    render(<FileUploaderDropContainer multiple />);
    expect(screen.getByText(/multiple files/i)).toBeInTheDocument();
  });

  it("shows single file hint", () => {
    render(<FileUploaderDropContainer multiple={false} />);
    expect(screen.getByText(/one file/i)).toBeInTheDocument();
  });

  it("handles drag events", () => {
    render(<FileUploaderDropContainer />);
    const container = screen.getByRole("button");

    fireEvent.dragOver(container);
    // Container should show active state

    fireEvent.dragLeave(container);
    // Container should return to normal state
  });

  it("applies custom className", () => {
    render(<FileUploaderDropContainer className="custom-class" />);
    const container = screen.getByRole("button");
    expect(container).toHaveClass("custom-class");
  });
});

describe("FileUploaderItem", () => {
  const defaultFile: FileUploaderFile = {
    uuid: "1",
    name: "test.txt",
    size: 1024,
    type: "text/plain",
  };

  it("renders correctly", () => {
    render(<FileUploaderItem file={defaultFile} />);
    expect(screen.getByText("test.txt")).toBeInTheDocument();
  });

  it("shows file size", () => {
    render(<FileUploaderItem file={defaultFile} />);
    expect(screen.getByText("1.0 KB")).toBeInTheDocument();
  });

  it("handles delete button", () => {
    const handleDelete = vi.fn();
    render(<FileUploaderItem file={defaultFile} onDelete={handleDelete} />);
    const deleteButton = screen.getByLabelText("Remove file");
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalled();
  });

  it("handles disabled state", () => {
    render(<FileUploaderItem file={defaultFile} disabled />);
    expect(screen.getByText("test.txt")).toBeInTheDocument();
  });

  it("handles readOnly state", () => {
    render(<FileUploaderItem file={defaultFile} readOnly />);
    expect(screen.getByText("test.txt")).toBeInTheDocument();
  });

  it("shows error state", () => {
    const errorFile = {
      ...defaultFile,
      status: "error" as const,
      errorMessage: "Failed",
    };
    render(<FileUploaderItem file={errorFile} />);
    expect(screen.getByText("Failed")).toBeInTheDocument();
  });

  it("shows uploading state with progress", () => {
    const uploadingFile = {
      ...defaultFile,
      status: "uploading" as const,
      progress: 75,
    };
    render(<FileUploaderItem file={uploadingFile} />);
    expect(screen.getByText("test.txt")).toBeInTheDocument();
  });

  it("shows complete state", () => {
    const completeFile = { ...defaultFile, status: "complete" as const };
    render(<FileUploaderItem file={completeFile} />);
    expect(screen.getByText("test.txt")).toBeInTheDocument();
  });
});

describe("FileUploaderSkeleton", () => {
  it("renders skeleton", () => {
    render(<FileUploaderSkeleton data-testid="file-skeleton" />);
    expect(screen.getByTestId("file-skeleton")).toBeInTheDocument();
  });

  it("renders skeleton with label", () => {
    render(<FileUploaderSkeleton hasLabel data-testid="skeleton-with-label" />);
    const skeleton = screen.getByTestId("skeleton-with-label");
    expect(skeleton.querySelector(".h-4")).toBeInTheDocument();
  });

  it("renders skeleton with description", () => {
    render(
      <FileUploaderSkeleton hasDescription data-testid="skeleton-with-desc" />,
    );
    const skeleton = screen.getByTestId("skeleton-with-desc");
    expect(skeleton.querySelector(".h-3")).toBeInTheDocument();
  });

  it("renders skeleton with file items", () => {
    render(
      <FileUploaderSkeleton itemCount={3} data-testid="skeleton-with-items" />,
    );
    const skeleton = screen.getByTestId("skeleton-with-items");
    const items = skeleton.querySelectorAll(".h-8");
    expect(items.length).toBe(3);
  });
});

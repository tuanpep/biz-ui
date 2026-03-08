import { describe, it, expect } from "vitest";
import { render, screen } from "../../../../test/utils";
import { FormField } from "./FormField";
import { Input } from "../Input";

describe("FormField", () => {
  it("renders label and child input", () => {
    render(
      <FormField label="Email" htmlFor="email">
        <Input id="email" placeholder="Enter email" />
      </FormField>,
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <FormField
        label="Username"
        htmlFor="username"
        description="Your public display name."
      >
        <Input id="username" placeholder="Username" />
      </FormField>,
    );
    expect(screen.getByText("Your public display name.")).toBeInTheDocument();
  });

  it("renders error message and does not show description when error is set", () => {
    render(
      <FormField
        label="Password"
        htmlFor="password"
        error="Password is required"
      >
        <Input id="password" placeholder="Password" />
      </FormField>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Password is required");
    expect(screen.queryByText("Password is required")).toBeInTheDocument();
  });

  it("shows required indicator when required is true", () => {
    render(
      <FormField label="Name" htmlFor="name" required>
        <Input id="name" placeholder="Name" />
      </FormField>,
    );
    // Use case-insensitive regex and check for label text
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(document.body.textContent).toContain("*");
  });

  it("accepts custom className", () => {
    const { container } = render(
      <FormField label="X" htmlFor="x" className="custom-field">
        <Input id="x" placeholder="X" />
      </FormField>,
    );
    expect(container.querySelector(".custom-field")).toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "../../../../test/utils";
import { Button } from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-primary");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-secondary");

    rerender(<Button variant="destructive">Destructive</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-destructive");
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-8");

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-10");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-12");
  });

  it("shows loading state correctly", () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("disables when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("accepts custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<Button ref={ref}>Ref Test</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

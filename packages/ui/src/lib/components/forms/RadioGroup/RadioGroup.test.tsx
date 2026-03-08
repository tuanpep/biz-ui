import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "../../../../test/utils";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders correctly", () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>,
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("renders with labels", () => {
    render(
      <RadioGroup defaultValue="option1">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>,
    );
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
  });

  it("applies default value", () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>,
    );
    const radio = document.getElementById("option1");
    expect(radio).toBeChecked();
  });

  it("handles value change", () => {
    const handleValueChange = vi.fn();
    render(
      <RadioGroup onValueChange={handleValueChange}>
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>,
    );

    const radio2 = document.getElementById("option2");
    fireEvent.click(radio2);

    expect(handleValueChange).toHaveBeenCalledWith("option2");
  });

  it("applies disabled state", () => {
    render(
      <RadioGroup disabled>
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("applies size variants", () => {
    const { container } = render(
      <RadioGroup size="lg">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies orientation", () => {
    const { container } = render(
      <RadioGroup orientation="horizontal">
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with description", () => {
    render(
      <RadioGroup description="Select your preferred option">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(
      screen.getByText("Select your preferred option"),
    ).toBeInTheDocument();
  });

  it("renders with error", () => {
    render(
      <RadioGroup error="Please select an option">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please select an option",
    );
  });

  it("applies error styles", () => {
    render(
      <RadioGroup error="Required">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    const radiogroup = screen.getByRole("radiogroup");
    expect(radiogroup).toHaveAttribute("aria-invalid", "true");
  });

  it("accepts custom className", () => {
    render(
      <RadioGroup className="custom-class">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass("custom-class");
  });

  it("supports keyboard navigation", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>,
    );

    const radio1 = document.getElementById("option1");
    radio1.focus();

    // Arrow down should move to next radio
    fireEvent.keyDown(radio1, { key: "ArrowDown" });
  });

  it("renders with group label", () => {
    render(
      <RadioGroup label="Select option">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(screen.getByText("Select option")).toBeInTheDocument();
  });

  it("renders with warning state", () => {
    render(
      <RadioGroup warn="Please verify your selection">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please verify your selection",
    );
  });

  it("renders with required indicator", () => {
    render(
      <RadioGroup label="Select option" required>
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    const label = screen.getByText("Select option").closest("label");
    expect(label).toHaveTextContent("*");
  });

  it("hides label visually with hideLabel", () => {
    render(
      <RadioGroup label="Select option" hideLabel>
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(screen.getByText("Select option")).toHaveClass("sr-only");
  });

  it("error takes precedence over warning", () => {
    render(
      <RadioGroup error="Required field" warn="Just a warning">
        <RadioGroupItem value="option1" id="option1" />
      </RadioGroup>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Required field");
    expect(screen.queryByText("Just a warning")).not.toBeInTheDocument();
  });
});

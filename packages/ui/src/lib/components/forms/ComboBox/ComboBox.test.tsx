import { describe, it, expect } from "vitest";
import { render, screen } from "../../../../test/utils";
import { ComboBox } from "./ComboBox";

const options = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

describe("ComboBox", () => {
  it("renders with placeholder", () => {
    render(<ComboBox options={options} placeholder="Select..." />);
    expect(screen.getByPlaceholderText("Select...")).toBeInTheDocument();
  });

  it("renders with default value", () => {
    render(
      <ComboBox options={options} defaultValue="b" placeholder="Choose" />,
    );
    expect(screen.getByDisplayValue("Option B")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(
      <ComboBox
        options={options}
        label="Country"
        id="country"
        placeholder="Select country"
      />,
    );
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });

  it("applies disabled state", () => {
    render(<ComboBox options={options} disabled placeholder="Disabled" />);
    const input = screen.getByPlaceholderText("Disabled");
    expect(input).toBeDisabled();
  });

  it("accepts custom className", () => {
    const { container } = render(
      <ComboBox options={options} className="custom-combo" placeholder="X" />,
    );
    const wrapper = container.querySelector(".custom-combo");
    expect(wrapper).toBeInTheDocument();
  });
});

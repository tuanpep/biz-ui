import { describe, it, expect } from "vitest";
import { render, screen } from "../../../../test/utils";
import { Label } from "./Label";

describe("Label", () => {
  describe("rendering", () => {
    it("renders correctly", () => {
      render(<Label>Email</Label>);

      expect(screen.getByText("Email")).toBeInTheDocument();
    });

    it("renders as a label element", () => {
      render(<Label data-testid="label">Email</Label>);

      const label = screen.getByTestId("label");
      expect(label.tagName).toBe("LABEL");
    });

    it("applies custom className", () => {
      render(<Label className="custom-class">Email</Label>);

      const label = screen.getByText("Email");
      expect(label).toHaveClass("custom-class");
    });
  });

  describe("sizes", () => {
    it("applies default size", () => {
      render(<Label>Email</Label>);

      const label = screen.getByText("Email");
      expect(label.className).toContain("text-sm");
    });

    it("applies sm size", () => {
      render(<Label size="sm">Email</Label>);

      const label = screen.getByText("Email");
      expect(label).toBeInTheDocument();
    });

    it("applies lg size", () => {
      render(<Label size="lg">Email</Label>);

      const label = screen.getByText("Email");
      expect(label).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("associates with form control via htmlFor", () => {
      render(
        <>
          <Label htmlFor="email">Email</Label>
          <input id="email" type="email" />
        </>,
      );

      const label = screen.getByText("Email");
      expect(label).toHaveAttribute("for", "email");
    });
  });

  describe("forwardRef", () => {
    it("forwards ref correctly", () => {
      const ref = { current: null as HTMLLabelElement | null };
      render(<Label ref={ref}>Email</Label>);

      expect(ref.current).toBeInstanceOf(HTMLLabelElement);
    });
  });
});

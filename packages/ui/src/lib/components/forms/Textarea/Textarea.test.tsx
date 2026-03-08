import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "../../../../test/utils";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  describe("rendering", () => {
    it("renders correctly", () => {
      render(<Textarea />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Textarea label="Description" />);

      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("renders with placeholder", () => {
      render(<Textarea placeholder="Enter description" />);

      const textarea = screen.getByPlaceholderText("Enter description");
      expect(textarea).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<Textarea className="custom-class" />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveClass("custom-class");
    });
  });

  describe("label", () => {
    it("hides label when hideLabel is true", () => {
      render(<Textarea label="Description" hideLabel />);

      const label = screen.getByText("Description");
      expect(label).toHaveClass("sr-only");
    });

    it("shows required indicator when required is true", () => {
      render(<Textarea label="Description" required />);

      expect(screen.getByText("*")).toBeInTheDocument();
    });
  });

  describe("description and messages", () => {
    it("renders description", () => {
      render(<Textarea label="Bio" description="Tell us about yourself" />);

      expect(screen.getByText("Tell us about yourself")).toBeInTheDocument();
    });

    it("renders error message", () => {
      render(<Textarea label="Bio" error="Bio is required" />);

      expect(screen.getByRole("alert")).toHaveTextContent("Bio is required");
    });

    it("renders warning message", () => {
      render(<Textarea label="Bio" warn="Consider adding more detail" />);

      expect(screen.getByRole("alert")).toHaveTextContent(
        "Consider adding more detail",
      );
    });

    it("error takes precedence over warning", () => {
      render(
        <Textarea label="Bio" error="Error message" warn="Warning message" />,
      );

      expect(screen.getByText("Error message")).toBeInTheDocument();
      expect(screen.queryByText("Warning message")).not.toBeInTheDocument();
    });

    it("description is hidden when error is shown", () => {
      render(
        <Textarea
          label="Bio"
          description="Helper text"
          error="Error message"
        />,
      );

      expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
    });
  });

  describe("character count", () => {
    it("shows character count when showCount is true", () => {
      render(<Textarea label="Bio" showCount />);

      expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("shows character count with maxLength", () => {
      render(<Textarea label="Bio" showCount maxLength={100} />);

      expect(screen.getByText("0 / 100")).toBeInTheDocument();
    });

    it("updates character count on input", () => {
      render(<Textarea label="Bio" showCount />);

      const textarea = screen.getByRole("textbox");
      fireEvent.change(textarea, { target: { value: "Hello" } });

      expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("shows error styling when at maxLength", () => {
      render(
        <Textarea label="Bio" showCount maxLength={5} defaultValue="Hello" />,
      );

      const count = screen.getByText("5 / 5");
      expect(count).toHaveClass("text-destructive");
    });
  });

  describe("states", () => {
    it("is disabled when disabled prop is true", () => {
      render(<Textarea disabled />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toBeDisabled();
    });

    it("is not disabled when readOnly", () => {
      render(<Textarea readOnly disabled />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).not.toBeDisabled();
    });

    it("does not show error when readOnly", () => {
      render(<Textarea readOnly error="Error" />);

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  describe("value handling", () => {
    it("handles controlled value", () => {
      const handleChange = vi.fn();
      render(<Textarea value="test" onChange={handleChange} />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveValue("test");
    });

    it("handles uncontrolled defaultValue", () => {
      render(<Textarea defaultValue="default" />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveValue("default");
    });

    it("calls onChange when value changes", () => {
      const handleChange = vi.fn();
      render(<Textarea onChange={handleChange} />);

      const textarea = screen.getByRole("textbox");
      fireEvent.change(textarea, { target: { value: "new value" } });

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("variants", () => {
    it("applies default variant", () => {
      render(<Textarea />);

      const textarea = screen.getByRole("textbox");
      expect(textarea.className).toBeTruthy();
    });

    it("applies different sizes", () => {
      const { rerender } = render(<Textarea size="sm" />);

      let textarea = screen.getByRole("textbox");
      expect(textarea).toBeInTheDocument();

      rerender(<Textarea size="lg" />);
      textarea = screen.getByRole("textbox");
      expect(textarea).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("has aria-invalid when error is present", () => {
      render(<Textarea error="Required" />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("aria-invalid", "true");
    });

    it("has aria-describedby with error", () => {
      render(<Textarea label="Bio" error="Required" id="bio" />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("aria-describedby", "bio-error");
    });

    it("has aria-describedby with description", () => {
      render(<Textarea label="Bio" description="Helper" id="bio" />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("aria-describedby", "bio-description");
    });
  });

  describe("forwardRef", () => {
    it("forwards ref correctly", () => {
      const ref = { current: null as HTMLTextAreaElement | null };
      render(<Textarea ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    });
  });
});

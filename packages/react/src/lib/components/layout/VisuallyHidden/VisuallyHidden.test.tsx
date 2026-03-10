import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VisuallyHidden } from "./VisuallyHidden";

describe("VisuallyHidden", () => {
  it("renders content that is accessible to screen readers", () => {
    render(<VisuallyHidden>Hidden label</VisuallyHidden>);
    expect(screen.getByText("Hidden label")).toBeInTheDocument();
  });

  it("applies sr-only class by default", () => {
    render(<VisuallyHidden data-testid="vh">Hidden</VisuallyHidden>);
    const el = screen.getByTestId("vh");
    expect(el.className).toContain("sr-only");
  });

  it("applies focusable classes when focusable is true", () => {
    render(
      <VisuallyHidden focusable data-testid="vh">
        Skip link
      </VisuallyHidden>,
    );
    const el = screen.getByTestId("vh");
    expect(el.className).toContain("sr-only");
    expect(el.className).toContain("focus:not-sr-only");
  });

  it("forwards ref", () => {
    const ref = { current: null } as React.RefObject<HTMLSpanElement | null>;
    render(<VisuallyHidden ref={ref}>Ref test</VisuallyHidden>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it("accepts custom className", () => {
    render(
      <VisuallyHidden className="custom-class" data-testid="vh">
        Test
      </VisuallyHidden>,
    );
    expect(screen.getByTestId("vh").className).toContain("custom-class");
  });
});

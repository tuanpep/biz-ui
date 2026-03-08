import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test/utils";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />);

    expect(screen.getByText(/Build Beautiful/i)).toBeInTheDocument();
    expect(screen.getByText(/React Apps Faster/i)).toBeInTheDocument();
  });

  it("renders the subheadline", () => {
    render(<Hero />);

    expect(
      screen.getByText(/accessible, customizable components/i),
    ).toBeInTheDocument();
  });

  it("renders primary CTA button", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: /get started/i }),
    ).toBeInTheDocument();
  });

  it("renders secondary CTA button", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: /view components/i }),
    ).toBeInTheDocument();
  });

  it("renders version badge", () => {
    render(<Hero />);

    expect(screen.getByText(/v\d+\.\d+\.\d+/i)).toBeInTheDocument();
  });
});

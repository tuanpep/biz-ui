import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test/utils";
import { Header } from "./Header";

describe("Header", () => {
  it("renders logo and brand name", () => {
    render(<Header />);

    expect(screen.getByText("Biz UI")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", { name: /documentation/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /components/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /examples/i })).toBeInTheDocument();
  });

  it("renders theme toggle button", () => {
    render(<Header />);

    expect(
      screen.getByRole("button", { name: /switch to.*mode/i }),
    ).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    render(<Header />);

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/biz-ui/biz-ui",
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("renders Get Started button", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", { name: /get started/i }),
    ).toBeInTheDocument();
  });

  it("has sticky positioning", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("fixed");
  });
});

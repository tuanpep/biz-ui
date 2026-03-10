import * as React from "react";
import { render, screen } from "../../../test/utils";
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar";

describe("Avatar", () => {
  it("renders correctly", () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("applies default size (md)", () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId("avatar")).toHaveClass("h-10");
    expect(screen.getByTestId("avatar")).toHaveClass("w-10");
  });

  it("applies size variants", () => {
    const { rerender } = render(
      <Avatar size="sm" data-testid="avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId("avatar")).toHaveClass("h-8");
    expect(screen.getByTestId("avatar")).toHaveClass("w-8");

    rerender(
      <Avatar size="lg" data-testid="avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId("avatar")).toHaveClass("h-12");
    expect(screen.getByTestId("avatar")).toHaveClass("w-12");

    rerender(
      <Avatar size="xl" data-testid="avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId("avatar")).toHaveClass("h-16");
    expect(screen.getByTestId("avatar")).toHaveClass("w-16");
  });

  it("renders with image source (shows fallback in test environment)", () => {
    // Note: In a test environment, images typically fail to load immediately,
    // so the fallback is shown. This tests that the component handles both children.
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    // The fallback should be visible (images don't load in test environment)
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders fallback when image fails to load", () => {
    render(
      <Avatar>
        <AvatarImage src="invalid-url" alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("accepts custom className", () => {
    render(
      <Avatar className="custom-class" data-testid="avatar">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId("avatar")).toHaveClass("custom-class");
  });
});

import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test/utils";
import { CodeBlock } from "./CodeBlock";

describe("CodeBlock", () => {
  describe("rendering", () => {
    it("renders code content", () => {
      render(<CodeBlock code="npm install biz-ui" />);

      expect(screen.getByText("npm install biz-ui")).toBeInTheDocument();
    });

    it("renders with filename when provided", () => {
      render(<CodeBlock code="console.log('hello')" filename="index.ts" />);

      expect(screen.getByText("index.ts")).toBeInTheDocument();
    });

    it("renders with language badge when provided", () => {
      render(<CodeBlock code="console.log('hello')" language="typescript" />);

      expect(screen.getByText("typescript")).toBeInTheDocument();
    });

    it("renders multi-line code", () => {
      const code = `import { Button } from '@biz-ui/react'

function App() {
  return <Button>Click me</Button>
}`;
      render(<CodeBlock code={code} />);

      expect(screen.getByText(/import { Button }/)).toBeInTheDocument();
      expect(
        screen.getByText(/return <Button>Click me<\/Button>/),
      ).toBeInTheDocument();
    });
  });

  describe("copy functionality", () => {
    it("shows copy button by default", () => {
      render(<CodeBlock code="test code" />);

      expect(screen.getByRole("button", { name: /copy/i })).toBeInTheDocument();
    });

    it("copies code and shows success feedback", async () => {
      const user = userEvent.setup();
      render(<CodeBlock code="test code" />);

      const copyButton = screen.getByRole("button", { name: /copy code/i });
      await user.click(copyButton);

      // After copying, button should show "Copied!" state
      expect(
        screen.getByRole("button", { name: /copied/i }),
      ).toBeInTheDocument();
    });

    it("hides copy button when showCopyButton is false", () => {
      render(<CodeBlock code="test code" showCopyButton={false} />);

      expect(
        screen.queryByRole("button", { name: /copy/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("has accessible copy button label", () => {
      render(<CodeBlock code="test code" />);

      const copyButton = screen.getByRole("button", { name: /copy code/i });
      expect(copyButton).toBeInTheDocument();
    });
  });
});

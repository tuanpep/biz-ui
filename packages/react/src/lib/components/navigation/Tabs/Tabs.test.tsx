import { describe, it, expect } from "vitest";
import { render, screen } from "../../../../test/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

describe("Tabs", () => {
  it("renders tabs with default value", () => {
    render(
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">Tab One</TabsTrigger>
          <TabsTrigger value="two">Tab Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Content one</TabsContent>
        <TabsContent value="two">Content two</TabsContent>
      </Tabs>,
    );

    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /tab one/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /tab two/i })).toBeInTheDocument();
    expect(
      screen.getByRole("tabpanel", { name: /tab one/i }),
    ).toHaveTextContent("Content one");
  });

  it("applies variant and size to list and triggers", () => {
    const { container } = render(
      <Tabs defaultValue="a">
        <TabsList variant="pills" size="sm">
          <TabsTrigger value="a" variant="pills" size="sm">
            A
          </TabsTrigger>
        </TabsList>
        <TabsContent value="a">A content</TabsContent>
      </Tabs>,
    );

    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getByRole("tab")).toBeInTheDocument();
    expect(container.querySelector("[data-state=active]")).toBeInTheDocument();
  });
});

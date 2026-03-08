import { describe, it, expect } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("should merge class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should handle conditional classes", () => {
    const off = false;
    const on = true;
    expect(cn("foo", off && "bar", "baz")).toBe("foo baz");
    expect(cn("foo", on && "bar", "baz")).toBe("foo bar baz");
  });

  it("should handle undefined and null", () => {
    expect(cn("foo", undefined, null, "bar")).toBe("foo bar");
  });

  it("should handle object syntax", () => {
    expect(cn({ foo: true, bar: false })).toBe("foo");
    expect(cn({ foo: true, bar: true })).toBe("foo bar");
  });

  it("should handle array syntax", () => {
    const off = false;
    expect(cn(["foo", "bar"])).toBe("foo bar");
    expect(cn(["foo", off && "bar"])).toBe("foo");
  });

  it("should merge tailwind classes correctly", () => {
    // tailwind-merge should dedupe conflicting classes
    expect(cn("p-4", "p-2")).toBe("p-2");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("should preserve non-conflicting tailwind classes", () => {
    expect(cn("p-4", "m-2")).toBe("p-4 m-2");
    expect(cn("text-sm", "font-bold")).toBe("text-sm font-bold");
  });

  it("should handle complex combinations", () => {
    const skip = false;
    const result = cn(
      "base-class",
      { "conditional-class": true },
      skip && "ignored",
      ["array-class"],
    );
    expect(result).toContain("base-class");
    expect(result).toContain("conditional-class");
    expect(result).toContain("array-class");
    expect(result).not.toContain("ignored");
  });

  it("should handle empty input", () => {
    expect(cn()).toBe("");
    expect(cn("")).toBe("");
  });

  it("should trim whitespace", () => {
    // clsx handles extra whitespace
    const result = cn("  foo  ", "bar  ");
    expect(result.trim()).toBe("foo bar");
  });
});

import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useId } from "./use-id";

describe("useId", () => {
  it("should return a string ID", () => {
    const { result } = renderHook(() => useId());
    expect(typeof result.current).toBe("string");
    expect(result.current.length).toBeGreaterThan(0);
  });

  it('should use default prefix "biz"', () => {
    const { result } = renderHook(() => useId());
    expect(result.current).toMatch(/^biz-/);
  });

  it("should use custom prefix when provided", () => {
    const { result } = renderHook(() => useId("input"));
    expect(result.current).toMatch(/^input-/);
  });

  it("should return provided ID when given", () => {
    const { result } = renderHook(() => useId("biz", "custom-id"));
    expect(result.current).toBe("custom-id");
  });

  it("should return different IDs for different hook calls", () => {
    const { result: result1 } = renderHook(() => useId());
    const { result: result2 } = renderHook(() => useId());

    expect(result1.current).not.toBe(result2.current);
  });

  it("should generate stable IDs on rerender", () => {
    const { result, rerender } = renderHook(() => useId("test"));

    const firstId = result.current;
    rerender();
    const secondId = result.current;

    expect(firstId).toBe(secondId);
  });

  it("should update when prefix changes", () => {
    const { result, rerender } = renderHook(
      ({ prefix }: { prefix: string }) => useId(prefix),
      { initialProps: { prefix: "first" } },
    );

    expect(result.current).toMatch(/^first-/);

    rerender({ prefix: "second" });

    // The ID should change when prefix changes
    expect(result.current).toMatch(/^second-/);
  });

  it("should prioritize provided ID over generated ID", () => {
    const { result, rerender } = renderHook(
      ({ providedId }: { providedId?: string }) => useId("biz", providedId),
      { initialProps: {} },
    );

    const generatedId = result.current;
    expect(generatedId).toMatch(/^biz-/);

    rerender({ providedId: "my-custom-id" });
    expect(result.current).toBe("my-custom-id");
  });
});

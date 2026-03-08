import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useUnmount, useMount } from "./use-unmount";

describe("useUnmount", () => {
  it("should call cleanup function on unmount", () => {
    const cleanup = vi.fn();
    const { unmount } = renderHook(() => useUnmount(cleanup));

    expect(cleanup).not.toHaveBeenCalled();

    unmount();

    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it("should call latest cleanup function if it changes", () => {
    const cleanup1 = vi.fn();
    const cleanup2 = vi.fn();

    const { rerender, unmount } = renderHook(({ fn }) => useUnmount(fn), {
      initialProps: { fn: cleanup1 },
    });

    rerender({ fn: cleanup2 });
    unmount();

    expect(cleanup1).not.toHaveBeenCalled();
    expect(cleanup2).toHaveBeenCalledTimes(1);
  });

  it("should not call cleanup on rerender", () => {
    const cleanup = vi.fn();
    const { rerender } = renderHook(() => useUnmount(cleanup));

    rerender();
    rerender();
    rerender();

    expect(cleanup).not.toHaveBeenCalled();
  });
});

describe("useMount", () => {
  it("should call callback on mount", () => {
    const callback = vi.fn();
    renderHook(() => useMount(callback));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not call callback on rerender", () => {
    const callback = vi.fn();
    const { rerender } = renderHook(() => useMount(callback));

    rerender();
    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should call cleanup function returned by callback on unmount", () => {
    const cleanup = vi.fn();
    const callback = vi.fn(() => cleanup);

    const { unmount } = renderHook(() => useMount(callback));

    expect(callback).toHaveBeenCalledTimes(1);
    expect(cleanup).not.toHaveBeenCalled();

    unmount();

    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it("should work with async callbacks", async () => {
    const callback = vi.fn(async () => {});
    renderHook(() => useMount(callback));

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

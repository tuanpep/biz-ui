import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useOutsideClick, useOutsideClickMultiple } from "./use-outside-click";

describe("useOutsideClick", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("should call handler when clicking outside the element", () => {
    const handler = vi.fn();
    const ref = { current: null as HTMLDivElement | null };

    renderHook(() => useOutsideClick(ref, handler));

    // Create element and assign to ref
    const element = document.createElement("div");
    container.appendChild(element);
    ref.current = element;

    // Click outside
    act(() => {
      document.body.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true }),
      );
    });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("should not call handler when clicking inside the element", () => {
    const handler = vi.fn();
    const element = document.createElement("div");
    container.appendChild(element);
    const ref = { current: element };

    renderHook(() => useOutsideClick(ref, handler));

    // Click inside
    act(() => {
      element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    });

    expect(handler).not.toHaveBeenCalled();
  });

  it("should not call handler when disabled", () => {
    const handler = vi.fn();
    const ref = { current: null as HTMLDivElement | null };

    renderHook(() => useOutsideClick(ref, handler, false));

    act(() => {
      document.body.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true }),
      );
    });

    expect(handler).not.toHaveBeenCalled();
  });

  it("should handle touch events", () => {
    const handler = vi.fn();
    const element = document.createElement("div");
    container.appendChild(element);
    const ref = { current: element };

    renderHook(() => useOutsideClick(ref, handler));

    act(() => {
      document.body.dispatchEvent(
        new TouchEvent("touchstart", { bubbles: true }),
      );
    });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("should cleanup event listeners on unmount", () => {
    const handler = vi.fn();
    const ref = { current: null as HTMLDivElement | null };

    const { unmount } = renderHook(() => useOutsideClick(ref, handler));
    unmount();

    act(() => {
      document.body.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true }),
      );
    });

    expect(handler).not.toHaveBeenCalled();
  });
});

describe("useOutsideClickMultiple", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("should call handler when clicking outside all refs", () => {
    const handler = vi.fn();
    const element1 = document.createElement("div");
    const element2 = document.createElement("div");
    container.appendChild(element1);
    container.appendChild(element2);

    const ref1 = { current: element1 };
    const ref2 = { current: element2 };

    renderHook(() => useOutsideClickMultiple([ref1, ref2], handler));

    act(() => {
      document.body.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true }),
      );
    });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("should not call handler when clicking inside any ref", () => {
    const handler = vi.fn();
    const element1 = document.createElement("div");
    const element2 = document.createElement("div");
    container.appendChild(element1);
    container.appendChild(element2);

    const ref1 = { current: element1 };
    const ref2 = { current: element2 };

    renderHook(() => useOutsideClickMultiple([ref1, ref2], handler));

    act(() => {
      element1.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    });

    expect(handler).not.toHaveBeenCalled();

    act(() => {
      element2.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    });

    expect(handler).not.toHaveBeenCalled();
  });

  it("should not call handler when disabled", () => {
    const handler = vi.fn();
    const ref1 = { current: null as HTMLDivElement | null };

    renderHook(() => useOutsideClickMultiple([ref1], handler, false));

    act(() => {
      document.body.dispatchEvent(
        new MouseEvent("mousedown", { bubbles: true }),
      );
    });

    expect(handler).not.toHaveBeenCalled();
  });
});

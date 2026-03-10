import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import * as React from "react";
import {
  useControllableState,
  useMergedRefs,
  useCallbackRef,
  usePrevious,
  useForceUpdate,
  useMatchMedia,
  useDelayedState,
  useEvent,
  useWindowEvent,
  useResizeObserver,
  usePresence,
} from "../index";

describe("useControllableState", () => {
  it("should use defaultValue when uncontrolled", () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: "initial" }),
    );
    expect(result.current[0]).toBe("initial");
  });

  it("should use value when controlled", () => {
    const { result } = renderHook(() =>
      useControllableState({ value: "controlled", defaultValue: "initial" }),
    );
    expect(result.current[0]).toBe("controlled");
  });

  it("should update state when setValue is called", () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: "initial" }),
    );

    act(() => {
      result.current[1]("updated");
    });

    expect(result.current[0]).toBe("updated");
  });

  it("should call onChange when state changes", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: "initial", onChange }),
    );

    act(() => {
      result.current[1]("updated");
    });

    expect(onChange).toHaveBeenCalledWith("updated");
  });

  it("should support functional updates", () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 0 }),
    );

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(1);
  });
});

describe("useMergedRefs", () => {
  it("should merge multiple refs", () => {
    const ref1 = { current: null };
    const ref2 = { current: null };
    const { result } = renderHook(() => useMergedRefs([ref1, ref2]));

    const element = document.createElement("div");
    act(() => {
      result.current(element);
    });

    expect(ref1.current).toBe(element);
    expect(ref2.current).toBe(element);
  });

  it("should handle function refs", () => {
    const fnRef = vi.fn();
    const { result } = renderHook(() => useMergedRefs([fnRef]));

    const element = document.createElement("div");
    act(() => {
      result.current(element);
    });

    expect(fnRef).toHaveBeenCalledWith(element);
  });

  it("should handle null refs", () => {
    const ref = { current: null };
    const { result } = renderHook(() => useMergedRefs([ref, null]));

    const element = document.createElement("div");
    act(() => {
      result.current(element);
    });

    expect(ref.current).toBe(element);
  });
});

describe("useCallbackRef", () => {
  it("should return a stable ref with current value", () => {
    const callback = vi.fn();
    const { result, rerender } = renderHook(({ cb }) => useCallbackRef(cb), {
      initialProps: { cb: callback },
    });

    const firstRef = result.current;
    expect(firstRef.current).toBe(callback);

    const newCallback = vi.fn();
    rerender({ cb: newCallback });

    // Ref should be stable
    expect(result.current).toBe(firstRef);
    // But current should be updated
    expect(result.current.current).toBe(newCallback);
  });
});

describe("usePrevious", () => {
  it("should return undefined on first render", () => {
    const { result } = renderHook(() => usePrevious("first"));
    expect(result.current).toBeUndefined();
  });

  it("should return previous value after update", () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: "first" },
    });

    expect(result.current).toBeUndefined();

    rerender({ value: "second" });
    expect(result.current).toBe("first");

    rerender({ value: "third" });
    expect(result.current).toBe("second");
  });
});

describe("useForceUpdate", () => {
  it("should force a re-render when called", () => {
    let renderCount = 0;
    const { result } = renderHook(() => {
      renderCount++;
      return useForceUpdate();
    });

    expect(renderCount).toBe(1);

    act(() => {
      result.current();
    });

    expect(renderCount).toBe(2);
  });
});

describe("useMatchMedia", () => {
  it("should return matches from media query", () => {
    // Default mock returns false
    const { result } = renderHook(() => useMatchMedia("(min-width: 768px)"));
    expect(result.current).toBe(false);
  });
});

describe("useDelayedState", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should work like useState with no delay", () => {
    const { result } = renderHook(() => useDelayedState("initial"));

    expect(result.current[0]).toBe("initial");

    act(() => {
      result.current[1]("updated");
    });

    expect(result.current[0]).toBe("updated");
  });

  it("should delay state update", () => {
    const { result } = renderHook(() => useDelayedState("initial"));

    act(() => {
      result.current[1]("delayed", 100);
    });

    // State should not have changed yet
    expect(result.current[0]).toBe("initial");

    // Advance timers
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current[0]).toBe("delayed");
  });

  it("should cancel pending update when new update is called", () => {
    const { result } = renderHook(() => useDelayedState("initial"));

    act(() => {
      result.current[1]("first", 100);
    });

    act(() => {
      vi.advanceTimersByTime(50);
    });

    // Call another update before first completes
    act(() => {
      result.current[1]("second", 100);
    });

    // Advance past first timer
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // First update should have been cancelled
    expect(result.current[0]).toBe("initial");

    // Advance to complete second timer
    act(() => {
      vi.advanceTimersByTime(50);
    });

    expect(result.current[0]).toBe("second");
  });

  it("should support functional updates", () => {
    const { result } = renderHook(() => useDelayedState(0));

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(1);
  });
});

describe("useEvent", () => {
  it("should add event listener to element", () => {
    const element = document.createElement("div");
    const listener = vi.fn();

    renderHook(() => useEvent(element, "click", listener));

    element.click();

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("should remove event listener on unmount", () => {
    const element = document.createElement("div");
    const listener = vi.fn();

    const { unmount } = renderHook(() => useEvent(element, "click", listener));

    unmount();

    element.click();

    expect(listener).not.toHaveBeenCalled();
  });

  it("should work with ref", () => {
    const listener = vi.fn();

    const { result } = renderHook(() => {
      const ref = React.useRef<HTMLDivElement | null>(null);
      useEvent(ref, "click", listener);
      return ref;
    });

    const element = document.createElement("div");
    result.current.current = element;

    element.click();

    expect(listener).toHaveBeenCalledTimes(1);
  });
});

describe("useWindowEvent", () => {
  it("should add event listener to window", () => {
    const listener = vi.fn();

    renderHook(() => useWindowEvent("resize", listener));

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("should remove event listener on unmount", () => {
    const listener = vi.fn();

    const { unmount } = renderHook(() => useWindowEvent("resize", listener));

    unmount();

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(listener).not.toHaveBeenCalled();
  });
});

describe("useResizeObserver", () => {
  it("should return initial dimensions as -1", () => {
    const { result } = renderHook(() => {
      const ref = React.useRef<HTMLDivElement>(null);
      return useResizeObserver({ ref });
    });

    expect(result.current.width).toBe(-1);
    expect(result.current.height).toBe(-1);
  });
});

describe("usePresence", () => {
  it("should return isPresent=true when isOpen=true", () => {
    const { result } = renderHook(() => {
      const ref = React.useRef<HTMLDivElement>(null);
      return usePresence(ref, true);
    });

    expect(result.current.isPresent).toBe(true);
    expect(result.current.isExiting).toBe(false);
  });

  it("should return isPresent=false when isOpen=false and exit is finished", () => {
    const { result } = renderHook(() => {
      const ref = React.useRef<HTMLDivElement>(null);
      return usePresence(ref, false);
    });

    expect(result.current.isPresent).toBe(false);
    expect(result.current.isExiting).toBe(false);
  });

  it("should transition to exiting state when isOpen becomes false", () => {
    const { result, rerender } = renderHook(
      ({ isOpen }) => {
        const ref = React.useRef<HTMLDivElement>(null);
        return usePresence(ref, isOpen);
      },
      { initialProps: { isOpen: true } },
    );

    expect(result.current.isPresent).toBe(true);
    expect(result.current.isExiting).toBe(false);

    // Trigger close
    rerender({ isOpen: false });

    expect(result.current.isExiting).toBe(true);
  });
});

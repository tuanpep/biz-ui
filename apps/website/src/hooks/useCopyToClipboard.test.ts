import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCopyToClipboard } from "./useCopyToClipboard";

describe("useCopyToClipboard", () => {
  let mockWriteText: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockWriteText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: mockWriteText },
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("happy path", () => {
    it("copies text to clipboard", async () => {
      const { result } = renderHook(() => useCopyToClipboard());

      expect(result.current.copiedText).toBe(null);
      expect(result.current.error).toBe(null);

      await act(async () => {
        await result.current.copy("test text");
      });

      expect(mockWriteText).toHaveBeenCalledWith("test text");
      expect(result.current.copiedText).toBe("test text");
      expect(result.current.error).toBe(null);
    });

    it("returns error state when clipboard API fails", async () => {
      const mockError = new Error("Clipboard error");
      mockWriteText.mockRejectedValue(mockError);

      const { result } = renderHook(() => useCopyToClipboard());

      await act(async () => {
        await result.current.copy("test text");
      });

      expect(result.current.copiedText).toBe(null);
      expect(result.current.error).toBe(mockError);
    });
  });

  describe("edge cases", () => {
    it("handles empty string", async () => {
      const { result } = renderHook(() => useCopyToClipboard());

      await act(async () => {
        await result.current.copy("");
      });

      expect(mockWriteText).toHaveBeenCalledWith("");
    });

    it("resets copied state when reset is called", async () => {
      const { result } = renderHook(() => useCopyToClipboard());

      await act(async () => {
        await result.current.copy("test text");
      });

      expect(result.current.copiedText).toBe("test text");

      act(() => {
        result.current.reset();
      });

      expect(result.current.copiedText).toBe(null);
      expect(result.current.error).toBe(null);
    });
  });
});

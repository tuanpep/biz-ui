import * as React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, renderHook } from "@testing-library/react";
import {
  PrefixProvider,
  usePrefix,
  addPrefix,
  createPrefixedClass,
  FeatureFlagsProvider,
  useFeatureFlag,
  useFeatureFlags,
  mergeFeatureFlags,
  defaultFeatureFlags,
} from "../index";

describe("PrefixProvider", () => {
  it("should provide default prefix when wrapped", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <PrefixProvider>{children}</PrefixProvider>
    );

    const { result } = renderHook(() => usePrefix(), { wrapper });
    expect(result.current).toBe("biz");
  });

  it("should provide custom prefix", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <PrefixProvider prefix="custom">{children}</PrefixProvider>
    );

    const { result } = renderHook(() => usePrefix(), { wrapper });
    expect(result.current).toBe("custom");
  });

  it("should nest prefixes correctly", () => {
    const InnerComponent = () => {
      const prefix = usePrefix();
      return <span data-testid="prefix">{prefix}</span>;
    };

    render(
      <PrefixProvider prefix="outer">
        <PrefixProvider prefix="inner">
          <InnerComponent />
        </PrefixProvider>
      </PrefixProvider>,
    );

    expect(screen.getByTestId("prefix")).toHaveTextContent("inner");
  });
});

describe("addPrefix", () => {
  it("should add prefix to class name", () => {
    expect(addPrefix("button", "biz")).toBe("biz-button");
  });

  it("should handle array of class names", () => {
    expect(addPrefix(["button", "primary"], "biz")).toBe(
      "biz-button biz-primary",
    );
  });
});

describe("createPrefixedClass", () => {
  it("should create a function that adds prefix", () => {
    const prefixed = createPrefixedClass("my");
    expect(prefixed("button")).toBe("my-button");
    expect(prefixed("btn", "primary")).toBe("my-btn my-primary");
  });
});

describe("FeatureFlagsProvider", () => {
  it("should provide default feature flags when wrapped", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FeatureFlagsProvider>{children}</FeatureFlagsProvider>
    );

    const { result } = renderHook(() => useFeatureFlags(), { wrapper });
    expect(result.current).toEqual(defaultFeatureFlags);
  });

  it("should provide custom feature flags", () => {
    const customFlags = { "enable-dark-mode": true };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FeatureFlagsProvider flags={customFlags}>
        {children}
      </FeatureFlagsProvider>
    );

    const { result } = renderHook(() => useFeatureFlags(), { wrapper });
    expect(result.current["enable-dark-mode"]).toBe(true);
  });

  it("should use useFeatureFlag for individual flags", () => {
    const customFlags = { "enable-css-grid": false };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FeatureFlagsProvider flags={customFlags}>
        {children}
      </FeatureFlagsProvider>
    );

    const { result } = renderHook(() => useFeatureFlag("enable-css-grid"), {
      wrapper,
    });
    expect(result.current).toBe(false);
  });

  it("should return default value for undefined flags when wrapped", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FeatureFlagsProvider>{children}</FeatureFlagsProvider>
    );

    const { result } = renderHook(() => useFeatureFlag("enable-ai-features"), {
      wrapper,
    });
    expect(result.current).toBe(false);
  });
});

describe("mergeFeatureFlags", () => {
  it("should merge feature flags with defaults", () => {
    const override = { "enable-dark-mode": true, "enable-ai-features": true };

    const merged = mergeFeatureFlags(override);

    expect(merged["enable-experimental-features"]).toBe(false); // default
    expect(merged["enable-dark-mode"]).toBe(true); // overridden
    expect(merged["enable-ai-features"]).toBe(true); // overridden
  });
});

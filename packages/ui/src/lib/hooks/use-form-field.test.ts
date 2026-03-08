import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import {
  useFormField,
  useFormFieldIds,
  useFormFieldStates,
} from "./use-form-field";

describe("useFormField", () => {
  it("should generate IDs when none provided", () => {
    const { result } = renderHook(() =>
      useFormField({ error: undefined, warn: undefined }),
    );

    expect(result.current.fieldId).toBeDefined();
    expect(result.current.descriptionId).toBe(
      `${result.current.fieldId}-description`,
    );
    expect(result.current.errorId).toBe(`${result.current.fieldId}-error`);
    expect(result.current.warnId).toBe(`${result.current.fieldId}-warn`);
  });

  it("should use provided ID", () => {
    const { result } = renderHook(() =>
      useFormField({ id: "my-field", error: undefined, warn: undefined }),
    );

    expect(result.current.fieldId).toBe("my-field");
    expect(result.current.descriptionId).toBe("my-field-description");
    expect(result.current.errorId).toBe("my-field-error");
    expect(result.current.warnId).toBe("my-field-warn");
  });

  it("should calculate hasError correctly", () => {
    const { result: withError } = renderHook(() =>
      useFormField({ error: "Required field" }),
    );
    expect(withError.current.hasError).toBe(true);

    const { result: withoutError } = renderHook(() =>
      useFormField({ error: undefined }),
    );
    expect(withoutError.current.hasError).toBe(false);
  });

  it("should calculate hasWarning correctly", () => {
    const { result: withWarn } = renderHook(() =>
      useFormField({ warn: "Check this field" }),
    );
    expect(withWarn.current.hasWarning).toBe(true);

    const { result: withoutWarn } = renderHook(() =>
      useFormField({ warn: undefined }),
    );
    expect(withoutWarn.current.hasWarning).toBe(false);
  });

  it("should not show warning when error is present", () => {
    const { result } = renderHook(() =>
      useFormField({ error: "Error", warn: "Warning" }),
    );

    expect(result.current.hasError).toBe(true);
    expect(result.current.hasWarning).toBe(false);
  });

  it("should calculate effectiveDisabled correctly", () => {
    const { result: disabled } = renderHook(() =>
      useFormField({ disabled: true }),
    );
    expect(disabled.current.effectiveDisabled).toBe(true);

    const { result: enabled } = renderHook(() =>
      useFormField({ disabled: false }),
    );
    expect(enabled.current.effectiveDisabled).toBe(false);
  });

  it("should not disable when readOnly is true", () => {
    const { result } = renderHook(() =>
      useFormField({ disabled: true, readOnly: true }),
    );

    expect(result.current.effectiveDisabled).toBe(false);
  });

  it("should not show error when readOnly is true", () => {
    const { result } = renderHook(() =>
      useFormField({ error: "Error", readOnly: true }),
    );

    expect(result.current.hasError).toBe(false);
  });

  it("should build ariaDescribedBy correctly with description", () => {
    const { result } = renderHook(() =>
      useFormField({ description: "Helper text" }),
    );

    expect(result.current.ariaDescribedBy).toContain("-description");
  });

  it("should build ariaDescribedBy correctly with error", () => {
    const { result } = renderHook(() =>
      useFormField({ error: "Error message" }),
    );

    expect(result.current.ariaDescribedBy).toContain("-error");
    expect(result.current.ariaDescribedBy).not.toContain("-description");
  });

  it("should build ariaDescribedBy correctly with warning", () => {
    const { result } = renderHook(() =>
      useFormField({ warn: "Warning message" }),
    );

    expect(result.current.ariaDescribedBy).toContain("-warn");
  });

  it("should return undefined ariaDescribedBy when no description/error/warn", () => {
    const { result } = renderHook(() => useFormField({}));

    expect(result.current.ariaDescribedBy).toBeUndefined();
  });

  it("should generate validation classes", () => {
    const { result: withError } = renderHook(() =>
      useFormField({ error: "Error" }),
    );
    expect(withError.current.validationClasses).toContain("border-destructive");

    const { result: withWarn } = renderHook(() =>
      useFormField({ warn: "Warning" }),
    );
    expect(withWarn.current.validationClasses).toContain("border-warning");
  });

  it("should generate fieldProps object", () => {
    const { result } = renderHook(() =>
      useFormField({ id: "test", error: "Error" }),
    );

    expect(result.current.fieldProps.id).toBe("test");
    expect(result.current.fieldProps["aria-invalid"]).toBe(true);
    expect(result.current.fieldProps["aria-describedby"]).toBeDefined();
  });
});

describe("useFormFieldIds", () => {
  it("should generate consistent IDs", () => {
    const { result } = renderHook(() => useFormFieldIds("custom-id"));

    expect(result.current.fieldId).toBe("custom-id");
    expect(result.current.descriptionId).toBe("custom-id-description");
    expect(result.current.errorId).toBe("custom-id-error");
    expect(result.current.warnId).toBe("custom-id-warn");
  });

  it("should generate IDs when none provided", () => {
    const { result } = renderHook(() => useFormFieldIds());

    expect(result.current.fieldId).toBeDefined();
    expect(result.current.descriptionId).toBe(
      `${result.current.fieldId}-description`,
    );
  });
});

describe("useFormFieldStates", () => {
  it("should calculate states correctly", () => {
    const { result } = renderHook(() =>
      useFormFieldStates("Error", "Warning", false, false),
    );

    expect(result.current.hasError).toBe(true);
    expect(result.current.hasWarning).toBe(false); // Error takes precedence
    expect(result.current.effectiveDisabled).toBe(false);
  });

  it("should respect disabled state", () => {
    const { result } = renderHook(() =>
      useFormFieldStates("Error", "Warning", true, false),
    );

    expect(result.current.effectiveDisabled).toBe(true);
    expect(result.current.hasError).toBe(false); // Disabled suppresses error
    expect(result.current.hasWarning).toBe(false);
  });

  it("should respect readOnly state", () => {
    const { result } = renderHook(() =>
      useFormFieldStates("Error", "Warning", true, true),
    );

    expect(result.current.effectiveDisabled).toBe(false); // readOnly overrides disabled
  });
});

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  selectorTabbable,
  selectorFocusable,
  getFocusableElements,
  getFirstFocusableElement,
  getLastFocusableElement,
  focusFirstElement,
  focusLastElement,
  trapFocus,
  elementOrParentIsFloatingMenu,
  wrapFocus,
  wrapFocusWithoutSentinels,
} from "../focus";

describe("Focus Utilities", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    container.innerHTML = `
      <button id="btn-1">Button 1</button>
      <input id="input-1" type="text" />
      <a id="link-1" href="#">Link</a>
      <button id="btn-2" disabled>Disabled Button</button>
      <button id="btn-3">Button 3</button>
    `;
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe("selectorTabbable", () => {
    it("should be a valid CSS selector string", () => {
      expect(typeof selectorTabbable).toBe("string");
      expect(selectorTabbable.length).toBeGreaterThan(0);
    });

    it("should select tabbable elements", () => {
      const elements = container.querySelectorAll(selectorTabbable);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  describe("selectorFocusable", () => {
    it("should be a valid CSS selector string", () => {
      expect(typeof selectorFocusable).toBe("string");
      expect(selectorFocusable.length).toBeGreaterThan(0);
    });
  });

  describe("getFocusableElements", () => {
    it("should return all focusable elements", () => {
      const elements = getFocusableElements(container);
      expect(elements.length).toBe(4); // btn-1, input-1, link-1, btn-3 (disabled btn-2 excluded)
    });

    it("should return HTMLElement array", () => {
      const elements = getFocusableElements(container);
      elements.forEach((el) => {
        expect(el).toBeInstanceOf(HTMLElement);
      });
    });
  });

  describe("getFirstFocusableElement", () => {
    it("should return the first focusable element", () => {
      const element = getFirstFocusableElement(container);
      expect(element?.id).toBe("btn-1");
    });

    it("should return null if no focusable elements", () => {
      const emptyContainer = document.createElement("div");
      const element = getFirstFocusableElement(emptyContainer);
      expect(element).toBeNull();
    });
  });

  describe("getLastFocusableElement", () => {
    it("should return the last focusable element", () => {
      const element = getLastFocusableElement(container);
      expect(element?.id).toBe("btn-3");
    });

    it("should return null if no focusable elements", () => {
      const emptyContainer = document.createElement("div");
      const element = getLastFocusableElement(emptyContainer);
      expect(element).toBeNull();
    });
  });

  describe("focusFirstElement", () => {
    it("should focus the first focusable element", () => {
      const result = focusFirstElement(container);
      expect(result).toBe(true);
      expect(document.activeElement?.id).toBe("btn-1");
    });

    it("should return false if no focusable elements", () => {
      const emptyContainer = document.createElement("div");
      const result = focusFirstElement(emptyContainer);
      expect(result).toBe(false);
    });
  });

  describe("focusLastElement", () => {
    it("should focus the last focusable element", () => {
      const result = focusLastElement(container);
      expect(result).toBe(true);
      expect(document.activeElement?.id).toBe("btn-3");
    });
  });

  describe("trapFocus", () => {
    it("should return a cleanup function", () => {
      const cleanup = trapFocus(container);
      expect(typeof cleanup).toBe("function");
      cleanup();
    });

    it("should focus first element on initialization", () => {
      const cleanup = trapFocus(container);
      expect(document.activeElement?.id).toBe("btn-1");
      cleanup();
    });
  });
});

describe("elementOrParentIsFloatingMenu", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    container.innerHTML = `
      <div class="biz--tooltip" id="tooltip">
        <button id="tooltip-btn">Tooltip Button</button>
      </div>
      <div class="biz--overflow-menu-options" id="overflow">
        <button id="overflow-btn">Overflow Button</button>
      </div>
      <button id="regular-btn">Regular Button</button>
    `;
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("should return true for element inside tooltip", () => {
    const button = container.querySelector("#tooltip-btn") as HTMLElement;
    expect(elementOrParentIsFloatingMenu(button)).toBe(true);
  });

  it("should return true for element inside overflow menu", () => {
    const button = container.querySelector("#overflow-btn") as HTMLElement;
    expect(elementOrParentIsFloatingMenu(button)).toBe(true);
  });

  it("should return true for the tooltip element itself", () => {
    const tooltip = container.querySelector("#tooltip") as HTMLElement;
    expect(elementOrParentIsFloatingMenu(tooltip)).toBe(true);
  });

  it("should return false for regular element", () => {
    const button = container.querySelector("#regular-btn") as HTMLElement;
    expect(elementOrParentIsFloatingMenu(button)).toBe(false);
  });

  it("should support custom prefix", () => {
    container.innerHTML = `
      <div class="custom--tooltip" id="custom-tooltip">
        <button id="custom-btn">Custom Button</button>
      </div>
    `;
    const button = container.querySelector("#custom-btn") as HTMLElement;
    expect(elementOrParentIsFloatingMenu(button, [], "custom")).toBe(true);
  });

  it("should support custom floating menu selectors", () => {
    container.innerHTML = `
      <div class="my-custom-menu" id="custom-menu">
        <button id="custom-menu-btn">Custom Menu Button</button>
      </div>
    `;
    const button = container.querySelector("#custom-menu-btn") as HTMLElement;
    expect(elementOrParentIsFloatingMenu(button, [".my-custom-menu"])).toBe(
      true,
    );
  });
});

describe("wrapFocus", () => {
  let modalContainer: HTMLDivElement;
  let startSentinel: HTMLSpanElement;
  let endSentinel: HTMLSpanElement;
  let innerModal: HTMLDivElement;
  let button0: HTMLButtonElement;
  let button2: HTMLButtonElement;

  beforeEach(() => {
    modalContainer = document.createElement("div");
    modalContainer.tabIndex = -1;
    modalContainer.innerHTML = `
      <button id="outer-preceding"></button>
      <span id="start-sentinel" tabIndex={0} role="link" class="biz--visually-hidden"></span>
      <div id="inner-modal" tabindex="-1">
        <button id="button-0">Button 0</button>
        <button id="button-1">Button 1</button>
        <button id="button-2">Button 2</button>
      </div>
      <span id="end-sentinel" tabIndex={0} role="link" class="biz--visually-hidden"></span>
      <button id="outer-following"></button>
      <div class="biz--tooltip" tabindex="0"></div>
    `;
    document.body.appendChild(modalContainer);

    startSentinel = modalContainer.querySelector(
      "#start-sentinel",
    ) as HTMLSpanElement;
    endSentinel = modalContainer.querySelector(
      "#end-sentinel",
    ) as HTMLSpanElement;
    innerModal = modalContainer.querySelector("#inner-modal") as HTMLDivElement;
    button0 = modalContainer.querySelector("#button-0") as HTMLButtonElement;
    button2 = modalContainer.querySelector("#button-2") as HTMLButtonElement;

    // In JSDOM, offsetParent is null, so we need to mock it
    // The function checks offsetParent to filter visible elements
    Object.defineProperty(button0, "offsetParent", {
      get: () => document.body,
      configurable: true,
    });
    Object.defineProperty(button2, "offsetParent", {
      get: () => document.body,
      configurable: true,
    });

    // Spy on focus methods
    vi.spyOn(button0, "focus");
    vi.spyOn(button2, "focus");
    vi.spyOn(innerModal, "focus");
  });

  afterEach(() => {
    document.body.removeChild(modalContainer);
    vi.restoreAllMocks();
  });

  it("should wrap focus forward when following outer node is focused", () => {
    const outerFollowing = modalContainer.querySelector(
      "#outer-following",
    ) as HTMLElement;

    wrapFocus({
      bodyNode: innerModal,
      startTrapNode: startSentinel,
      endTrapNode: endSentinel,
      currentActiveNode: outerFollowing,
      oldActiveNode: button2,
    });

    expect(button0.focus).toHaveBeenCalled();
  });

  it("should wrap focus backward when preceding outer node is focused", () => {
    const outerPreceding = modalContainer.querySelector(
      "#outer-preceding",
    ) as HTMLElement;

    wrapFocus({
      bodyNode: innerModal,
      startTrapNode: startSentinel,
      endTrapNode: endSentinel,
      currentActiveNode: outerPreceding,
      oldActiveNode: button0,
    });

    expect(button2.focus).toHaveBeenCalled();
  });

  it("should not wrap focus when a floating menu is focused", () => {
    const tooltip = modalContainer.querySelector(
      ".biz--tooltip",
    ) as HTMLElement;

    wrapFocus({
      bodyNode: innerModal,
      startTrapNode: startSentinel,
      endTrapNode: endSentinel,
      currentActiveNode: tooltip,
      oldActiveNode: button2,
    });

    expect(innerModal.focus).not.toHaveBeenCalled();
    expect(button0.focus).not.toHaveBeenCalled();
    expect(button2.focus).not.toHaveBeenCalled();
  });

  it("should use bodyNode as fallback when no tabbable elements found", () => {
    // Create a modal with no tabbable elements
    innerModal.innerHTML = '<div id="dummy-node"></div>';
    const dummyNode = innerModal.querySelector("#dummy-node") as HTMLElement;
    const outerFollowing = modalContainer.querySelector(
      "#outer-following",
    ) as HTMLElement;

    wrapFocus({
      bodyNode: innerModal,
      startTrapNode: startSentinel,
      endTrapNode: endSentinel,
      currentActiveNode: outerFollowing,
      oldActiveNode: dummyNode,
    });

    expect(innerModal.focus).toHaveBeenCalled();
  });
});

describe("wrapFocusWithoutSentinels", () => {
  let container: HTMLDivElement;
  let button0: HTMLButtonElement;
  let button1: HTMLButtonElement;

  beforeEach(() => {
    container = document.createElement("div");
    container.innerHTML = `
      <button id="button-0">Button 0</button>
      <button id="button-1">Button 1</button>
    `;
    document.body.appendChild(container);
    button0 = container.querySelector("#button-0") as HTMLButtonElement;
    button1 = container.querySelector("#button-1") as HTMLButtonElement;

    // In JSDOM, offsetParent is null, so we need to mock it
    Object.defineProperty(button0, "offsetParent", {
      get: () => document.body,
      configurable: true,
    });
    Object.defineProperty(button1, "offsetParent", {
      get: () => document.body,
      configurable: true,
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    vi.restoreAllMocks();
  });

  it("should not throw an error when called during keydown event", () => {
    const event = new KeyboardEvent("keydown", { key: "Tab" });
    Object.defineProperty(event, "shiftKey", { value: false });

    expect(() =>
      wrapFocusWithoutSentinels({
        containerNode: container,
        currentActiveNode: button1,
        event,
      }),
    ).not.toThrow();
  });

  it("should throw an error when called during unsupported event in development", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";

    const event = new FocusEvent("focusin");

    expect(() =>
      wrapFocusWithoutSentinels({
        containerNode: container,
        currentActiveNode: button1,
        event: event as unknown as KeyboardEvent,
      }),
    ).toThrow(
      /wrapFocusWithoutSentinels\(\.\.\.\) called in unsupported focusin event/,
    );

    process.env.NODE_ENV = originalEnv;
  });

  it("should wrap focus from last to first on Tab", () => {
    vi.spyOn(button0, "focus");

    const event = new KeyboardEvent("keydown", { key: "Tab" });
    Object.defineProperty(event, "shiftKey", { value: false });
    Object.defineProperty(event, "preventDefault", { value: vi.fn() });

    wrapFocusWithoutSentinels({
      containerNode: container,
      currentActiveNode: button1,
      event,
    });

    expect(event.preventDefault).toHaveBeenCalled();
    expect(button0.focus).toHaveBeenCalled();
  });

  it("should wrap focus from first to last on Shift+Tab", () => {
    vi.spyOn(button1, "focus");

    const event = new KeyboardEvent("keydown", { key: "Tab" });
    Object.defineProperty(event, "shiftKey", { value: true });
    Object.defineProperty(event, "preventDefault", { value: vi.fn() });

    wrapFocusWithoutSentinels({
      containerNode: container,
      currentActiveNode: button0,
      event,
    });

    expect(event.preventDefault).toHaveBeenCalled();
    expect(button1.focus).toHaveBeenCalled();
  });

  it("should not wrap focus when in the middle", () => {
    vi.spyOn(button0, "focus");
    vi.spyOn(button1, "focus");

    const event = new KeyboardEvent("keydown", { key: "Tab" });
    Object.defineProperty(event, "shiftKey", { value: false });
    Object.defineProperty(event, "preventDefault", { value: vi.fn() });

    // button0 is first, not last, so no wrap should happen
    wrapFocusWithoutSentinels({
      containerNode: container,
      currentActiveNode: button0,
      event,
    });

    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it("should do nothing if no tabbable elements found", () => {
    const emptyContainer = document.createElement("div");
    document.body.appendChild(emptyContainer);

    const event = new KeyboardEvent("keydown", { key: "Tab" });
    Object.defineProperty(event, "shiftKey", { value: false });
    Object.defineProperty(event, "preventDefault", { value: vi.fn() });

    wrapFocusWithoutSentinels({
      containerNode: emptyContainer,
      currentActiveNode: button1,
      event,
    });

    expect(event.preventDefault).not.toHaveBeenCalled();

    document.body.removeChild(emptyContainer);
  });
});

import "@testing-library/jest-dom/vitest";

// Mock matchMedia for tests
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock localStorage
const localStorageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  length: 0,
  key: () => null,
};
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// Mock clipboard with writable functions for spying
const clipboardMock = {
  writeText: () => Promise.resolve(),
  readText: () => Promise.resolve(""),
};
Object.defineProperty(navigator, "clipboard", {
  value: clipboardMock,
  configurable: true,
  writable: true,
});

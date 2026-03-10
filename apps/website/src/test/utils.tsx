import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../components/providers/ThemeProvider";

// All providers wrapper
// eslint-disable-next-line react-refresh/only-export-components
function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <MemoryRouter>
      <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
    </MemoryRouter>
  );
}

// Custom render with providers
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

// Re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };

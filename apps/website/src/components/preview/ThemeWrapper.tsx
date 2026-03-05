import type { ReactNode } from "react";
import { OceanThemeProvider, defaultTheme } from "biz-ui";

export function ThemeWrapper({ children }: { children: ReactNode }) {
  return (
    <OceanThemeProvider theme={defaultTheme}>
      <div className="biz-ui">{children}</div>
    </OceanThemeProvider>
  );
}

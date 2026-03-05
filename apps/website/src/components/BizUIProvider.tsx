import type { ReactNode } from "react";
import { OceanThemeProvider, defaultTheme } from "biz-ui";

interface BizUIProviderProps {
  children: ReactNode;
}

export function BizUIProvider({ children }: BizUIProviderProps) {
  return (
    <OceanThemeProvider theme={defaultTheme}>
      <div className="biz-ui">{children}</div>
    </OceanThemeProvider>
  );
}

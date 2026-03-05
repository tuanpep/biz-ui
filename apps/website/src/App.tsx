import { OceanThemeProvider } from "biz-ui";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { ThemeProvider } from "./lib/theme-context";
import "biz-ui/styles";

function App() {
  return (
    <ThemeProvider>
      <OceanThemeProvider>
        <div className="biz-ui">
          <RouterProvider router={router} />
        </div>
      </OceanThemeProvider>
    </ThemeProvider>
  );
}

export default App;

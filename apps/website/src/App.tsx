import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/providers";
import { Home } from "./pages/Home";
import { Docs } from "./pages/Docs";
import { Components } from "./pages/Components";

/**
 * Main App component with routing
 */
function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <div className="relative min-h-screen">
          {/* Background grid */}
          <div className="fixed inset-0 grid-bg opacity-50 dark:opacity-30 pointer-events-none" />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/*" element={<Docs />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/*" element={<Components />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

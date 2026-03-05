import { Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

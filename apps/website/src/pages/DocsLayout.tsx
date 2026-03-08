import type { ReactNode } from "react";
import { Layout } from "../components/layout";

interface DocsLayoutProps {
  children: ReactNode;
}

/**
 * Layout wrapper for documentation pages
 */
export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-6 py-20">{children}</div>
    </Layout>
  );
}

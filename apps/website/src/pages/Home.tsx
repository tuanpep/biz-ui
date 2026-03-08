import { Layout } from "../components/layout";
import {
  Hero,
  Features,
  ComponentShowcase,
  Installation,
  CTA,
} from "../components/marketing";

/**
 * Homepage
 */
export function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <ComponentShowcase />
      <Installation />
      <CTA />
    </Layout>
  );
}

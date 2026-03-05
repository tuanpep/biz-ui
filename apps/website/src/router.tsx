import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { RootLayout } from "./routes/__root";
import { LandingPage } from "./routes/index";
import { GettingStartedPage } from "./routes/guide/getting-started";
import { ComponentsIndexPage } from "./routes/components/index";
import { ComponentDocPage } from "./routes/components/$component";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

const gettingStartedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/guide/getting-started",
  component: GettingStartedPage,
});

const componentsIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/components",
  component: ComponentsIndexPage,
});

const componentDocRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/components/$component",
  component: ComponentDocPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  gettingStartedRoute,
  componentsIndexRoute,
  componentDocRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

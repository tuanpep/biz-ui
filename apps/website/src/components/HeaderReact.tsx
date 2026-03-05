import { Button, Container, Flex, Link as BUILink } from "biz-ui";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}

function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <BUILink
      href={href}
      className={isActive ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}
    >
      {children}
    </BUILink>
  );
}

interface HeaderProps {
  currentPath?: string;
}

export function HeaderReact({ currentPath = "" }: HeaderProps) {
  const isDocs = currentPath.startsWith("/docs");
  const isPlayground = currentPath === "/playground";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <Flex justify="between" align="center" className="h-14">
          <BUILink href="/" className="font-semibold text-foreground text-lg">
            Biz UI
          </BUILink>
          <Flex gap={6} align="center">
            <NavLink href="/" isActive={currentPath === "/"}>
              Home
            </NavLink>
            <NavLink href="/docs" isActive={isDocs}>
              Docs
            </NavLink>
            <NavLink href="/playground" isActive={isPlayground}>
              Playground
            </NavLink>
            <BUILink
              href="https://github.com/biz-ui/biz-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </BUILink>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}

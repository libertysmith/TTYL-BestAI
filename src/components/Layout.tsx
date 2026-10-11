import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import type { RouteKey } from "../routes";

interface LayoutProps {
  active: RouteKey | null;
  children: ReactNode;
}

export function Layout({ active, children }: LayoutProps) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader active={active} />
      <main id="main" className="main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

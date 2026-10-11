// Route definitions for the four pages of the site.
//
// The site is a static, multi-page site hosted under the repository subpath
// /TTYL-BestAI/. Vite exposes that subpath as import.meta.env.BASE_URL, so all
// internal links and route matching are built from it. Every route has its own
// static HTML entry point (see scripts/postbuild.mjs), so direct visits and
// page refreshes work on GitHub Pages without a server.

export const BASE_PATH: string = import.meta.env.BASE_URL; // "/TTYL-BestAI/"

export type RouteKey = "home" | "optIn" | "privacy" | "terms";

export interface RouteInfo {
  /** Path relative to the site root, always with a leading and trailing slash. */
  path: string;
  /** Text shown in the document title. */
  title: string;
  /** Label used in the navigation, where the page appears there. */
  navLabel?: string;
}

export const ROUTES: Record<RouteKey, RouteInfo> = {
  home: { path: "/", title: "Ttyl BestAI" },
  optIn: { path: "/opt-in/", title: "SMS Opt-In", navLabel: "SMS Opt-In" },
  privacy: { path: "/privacy/", title: "Privacy Policy", navLabel: "Privacy" },
  terms: { path: "/terms/", title: "Terms & Conditions", navLabel: "Terms" },
};

/** Builds a full site URL for a route path, including the repository subpath. */
export function toHref(path: string): string {
  return BASE_PATH + path.replace(/^\/+/, "");
}

/** Maps the current browser pathname to a route, or null if no page matches. */
export function matchRoute(pathname: string): RouteKey | null {
  const base = BASE_PATH.slice(0, -1); // "/TTYL-BestAI"
  let path = pathname;

  if (path === base) {
    path = "/";
  } else if (path.startsWith(BASE_PATH)) {
    path = path.slice(base.length);
  }

  if (!path.startsWith("/")) path = `/${path}`;
  if (!path.endsWith("/")) path = `${path}/`;

  const match = (Object.keys(ROUTES) as RouteKey[]).find(
    (key) => ROUTES[key].path === path,
  );
  return match ?? null;
}

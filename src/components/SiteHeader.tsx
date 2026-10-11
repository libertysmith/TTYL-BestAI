import { Link } from "./Link";
import { ROUTES, type RouteKey } from "../routes";

interface SiteHeaderProps {
  active: RouteKey | null;
}

const NAV_KEYS: RouteKey[] = ["optIn", "privacy", "terms"];

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link to={ROUTES.home.path} className="brand">
        Ttyl BestAI
      </Link>
      <nav aria-label="Primary">
        <ul className="nav-list">
          {NAV_KEYS.map((key) => (
            <li key={key}>
              <Link
                to={ROUTES[key].path}
                aria-current={active === key ? "page" : undefined}
              >
                {ROUTES[key].navLabel}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

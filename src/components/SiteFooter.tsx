import { Link } from "./Link";
import { ROUTES } from "../routes";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">
          Ttyl BestAI
          <span className="footer-note">A private AI texting companion. Access is by invitation.</span>
        </p>
        <nav aria-label="Legal">
          <ul className="nav-list">
            <li>
              <Link to={ROUTES.privacy.path}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={ROUTES.terms.path}>Terms &amp; Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="footer-fine">
        &copy; 2026 Ttyl BestAI. Ttyl BestAI is an AI system, not a human.
      </p>
    </footer>
  );
}

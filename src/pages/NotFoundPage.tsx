import { Link } from "../components/Link";
import { ROUTES } from "../routes";

export function NotFoundPage() {
  return (
    <section className="doc not-found">
      <p className="eyebrow">Not found</p>
      <h1>This page isn&rsquo;t here.</h1>
      <p>
        <Link to={ROUTES.home.path}>Return to the home page</Link>
      </p>
    </section>
  );
}

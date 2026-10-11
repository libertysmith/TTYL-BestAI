import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { OptInPage } from "./pages/OptInPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ROUTES, matchRoute, type RouteKey } from "./routes";

function renderPage(key: RouteKey | null) {
  switch (key) {
    case "home":
      return <HomePage />;
    case "optIn":
      return <OptInPage />;
    case "privacy":
      return <PrivacyPage />;
    case "terms":
      return <TermsPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  const key = matchRoute(window.location.pathname);

  useEffect(() => {
    const title = key ? ROUTES[key].title : "Page not found";
    document.title = key === "home" ? "Ttyl BestAI" : `${title} · Ttyl BestAI`;
    window.scrollTo(0, 0);
  }, [key]);

  return <Layout active={key}>{renderPage(key)}</Layout>;
}

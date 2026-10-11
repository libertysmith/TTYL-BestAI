import { Link } from "../components/Link";
import { ROUTES } from "../routes";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">PRIVATE ACCESS · BY INVITATION</p>
        <p className="wordmark">Ttyl BestAI</p>
        <h1 className="hero-title">A conversation, on your terms.</h1>
        <p className="hero-lede">
          A private AI texting companion designed for natural, ongoing conversation.
        </p>
        <p className="access-statement">Access is currently by invitation.</p>
        <div className="hero-actions">
          <Link to={ROUTES.optIn.path} className="button">
            How SMS access works
          </Link>
          <span className="hero-secondary">
            <Link to={ROUTES.privacy.path}>Privacy Policy</Link>
            <Link to={ROUTES.terms.path}>Terms &amp; Conditions</Link>
          </span>
        </div>
      </section>

      <section className="principles" aria-label="About Ttyl BestAI">
        <article className="principle">
          <span className="principle-index" aria-hidden="true">01</span>
          <h2>Ongoing, not one-off</h2>
          <p>
            Ttyl BestAI is built for conversation that continues over time. Each exchange is meant to
            pick up where the last one left off.
          </p>
        </article>
        <article className="principle">
          <span className="principle-index" aria-hidden="true">02</span>
          <h2>Invitation only</h2>
          <p>
            Access is limited to people who have been approved and have received private activation
            instructions. Approval is a separate step from agreeing to receive texts.
          </p>
        </article>
        <article className="principle">
          <span className="principle-index" aria-hidden="true">03</span>
          <h2>Clear about what it is</h2>
          <p>
            Ttyl BestAI is an AI system, not a human. It is not a substitute for emergency services,
            medical care, therapy, legal advice, or financial advice.
          </p>
        </article>
      </section>

      <section className="closing" aria-labelledby="closing-heading">
        <h2 id="closing-heading">Have an invitation?</h2>
        <p>
          Activation instructions are sent privately to approved individuals. Read how the text-message
          process works before you reply to anything.
        </p>
        <Link to={ROUTES.optIn.path} className="button button--light">
          Read the SMS Opt-In process
        </Link>
      </section>
    </>
  );
}

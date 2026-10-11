import { Link } from "../components/Link";
import { ROUTES } from "../routes";

export function OptInPage() {
  return (
    <article className="doc">
      <header className="doc-header">
        <p className="eyebrow">SMS Opt-In</p>
        <h1>Your first text. Your choice.</h1>
        <p className="doc-lede">
          SMS activation is available by invitation only. Being approved for access is not the same as
          agreeing to receive text messages. Those are two separate steps, and the second one is always
          up to you.
        </p>
      </header>

      <section className="legal-section" aria-labelledby="process-heading">
        <h2 id="process-heading">How activation works</h2>
        <ol className="steps">
          <li>Approved individuals receive private activation instructions.</li>
          <li>They start enrollment by texting JOIN.</li>
          <li>They receive a disclosure and a welcome message.</li>
          <li>They confirm enrollment by replying Y.</li>
          <li>They can then communicate with Ttyl BestAI by SMS.</li>
        </ol>
      </section>

      <section className="legal-section" aria-labelledby="consent-heading">
        <h2 id="consent-heading">Access approval and SMS consent</h2>
        <p>
          Receiving private activation instructions means your access has been approved. It does not, on
          its own, mean you have agreed to receive SMS messages. You only consent to text messages when
          you complete the enrollment steps above. SMS consent is voluntary.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="details-heading">
        <h2 id="details-heading">Before you text</h2>
        <ul className="detail-list">
          <li>Message frequency varies.</li>
          <li>Message and data rates may apply.</li>
          <li>Reply HELP for help.</li>
          <li>Reply STOP to stop messages.</li>
          <li>SMS consent is voluntary.</li>
          <li>
            The <Link to={ROUTES.terms.path}>Terms &amp; Conditions</Link> and the{" "}
            <Link to={ROUTES.privacy.path}>Privacy Policy</Link> apply.
          </li>
        </ul>
      </section>

      <p className="doc-footnote">
        This page is informational only. It does not enroll anyone in SMS messages.
      </p>
    </article>
  );
}

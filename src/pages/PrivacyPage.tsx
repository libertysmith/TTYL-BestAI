
import { LegalIntro } from "../components/LegalIntro";
import { LegalSection } from "../components/LegalSection";
import { Link } from "../components/Link";
import { ROUTES } from "../routes";

export function PrivacyPage() {
  return (
    <article className="doc">
      <LegalIntro
        title="Privacy Policy"
        lede={<>Effective date: October 11, 2026</>}
      />

      <LegalSection id="overview" title="Overview">
        <p>
          This Privacy Policy explains how Ttyl BestAI (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information when you
          visit this website and when you communicate with Ttyl BestAI by SMS.
          Ttyl BestAI is a private AI texting companion. Access is currently
          by invitation.
        </p>
      </LegalSection>

      <LegalSection id="information-collected" title="Information collected">
        <p>
          We process information needed to manage access, deliver SMS
          conversations, and operate the service. This may include your mobile
          phone number, text message content, conversation history, message
          timestamps, and delivery information.
        </p>
        <p>
          If you request or receive access, we may also process information
          you provide to us for that purpose.
        </p>
      </LegalSection>

      <LegalSection
        id="phone-sms"
        title="Phone numbers and SMS information"
      >
        <p>
          We process your mobile phone number so that we can send and receive
          text messages with you. SMS information may include message content,
          timestamps, and delivery status. Mobile carriers and SMS service
          providers may process messages under their own policies.
        </p>
      </LegalSection>

      <LegalSection
        id="conversation-information"
        title="Conversation information"
      >
        <p>
          The content of your conversations with Ttyl BestAI by text is
          conversation information. We use it to generate responses and
          maintain conversational continuity across messages.
        </p>
      </LegalSection>

      <LegalSection id="technical-information" title="Technical information">
        <p>
          This informational website does not use analytics tools. The
          website hosting provider may record standard technical information,
          such as IP address, browser type, and pages requested, under its own
          policies.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use" title="How we use information">
        <ul>
          <li>To manage access to and operate the service.</li>
          <li>To send and receive SMS messages and respond to your messages.</li>
          <li>To maintain conversational continuity across your conversations.</li>
          <li>To honor requests such as STOP and HELP.</li>
          <li>
            To maintain service reliability, address misuse, and comply with
            applicable law.
          </li>
        </ul>
        <p className="callout">
          We do not sell personal information or share SMS opt-in data or
          personal information with third parties for their independent
          marketing purposes.
        </p>
      </LegalSection>

      <LegalSection
        id="continuity"
        title="Conversation continuity and personalization"
      >
        <p>
          Ttyl BestAI uses prior messages in your conversation to help generate
          relevant responses and maintain conversational continuity. This
          means your message history may be retrieved when you send a new
          message and used to produce a response.
        </p>
      </LegalSection>

      <LegalSection id="deletion" title="Data storage and deletion">
        <p>
          Ttyl BestAI stores conversation messages to support conversational
          continuity and personalized responses.
        </p>
        <p>
          You may request deletion of your personal information and
          conversation history by emailing{" "}
          <a href="mailto:profoundhumming@proton.me">
            profoundhumming@proton.me
          </a>
          . We will review and process your request, subject to applicable
          legal obligations and technical limitations.
        </p>
      </LegalSection>

      <LegalSection id="security" title="Security">
        <p>
          We take reasonable steps to protect the information handled by
          Ttyl BestAI. No method of electronic storage or transmission can be
          guaranteed to be completely secure. Please avoid sending sensitive
          information by SMS.
        </p>
      </LegalSection>

      <LegalSection
        id="third-parties"
        title="Third-party service providers"
      >
        <p>
          We may rely on service providers to deliver SMS messages, process
          information needed to generate AI responses, and host this website.
          These providers may process information as necessary to perform
          their services and under their own applicable terms and privacy
          policies.
        </p>
        <p>
          We do not sell personal information or permit third-party service
          providers to use SMS opt-in data for their own independent
          marketing purposes.
        </p>
      </LegalSection>

      <LegalSection id="sms-communications" title="SMS communications">
        <p>
          By opting in to SMS, you agree to receive text messages from Ttyl
          BestAI. Message frequency varies. Message and data rates may apply.
          Reply HELP for help and STOP to stop messages. SMS consent is
          voluntary. Mobile carriers are not liable for delayed or
          undelivered messages.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="Your choices and privacy requests">
        <p>
          You may request access to, correction of, or deletion of your
          personal information by emailing{" "}
          <a href="mailto:profoundhumming@proton.me">
            profoundhumming@proton.me
          </a>
          . The rights available to you may depend on your location and
          applicable law.
        </p>
        <p>
          You can stop receiving SMS messages at any time by replying STOP.
          For assistance with SMS messages, reply HELP.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Policy changes">
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be posted on this page with a revised effective date.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact information">
        <p>
          For privacy questions or to request deletion of personal
          information, contact{" "}
          <a href="mailto:profoundhumming@proton.me">
            profoundhumming@proton.me
          </a>
          .
        </p>
        <p>
          See also the <Link to={ROUTES.terms.path}>Terms &amp; Conditions</Link>.
        </p>
      </LegalSection>
    </article>
  );
}
# Ttyl AI Companion

Build a polished, modern website for a service called **Ttyl BestAI**.

Ttyl BestAI is a private AI texting companion service. Approved users receive access to an AI companion that communicates with them through SMS. The experience should feel personal, conversational, and intentional rather than like a generic chatbot or customer-service system.

Create these pages:

1. **Home**

   * Clearly explain what Ttyl BestAI is.
   * Explain that it is an AI companion accessed through text messaging.
   * Explain the basic experience:
     Apply for access → Get approved → Activate your texting companion → Start chatting.
   * Explain that access is currently approval-based.
   * Include a prominent "Apply for Access" CTA.
   * Include a secondary link to learn how SMS activation works.
   * Do not make medical, therapeutic, or mental-health claims.
   * Do not imply that the AI is human.
   * Do not imply that the service provides professional counseling, emergency assistance, or crisis support.

2. **Apply for Access**

   * Create an application form for prospective users.
   * The form should clearly state that submitting an application does not automatically enroll the applicant in SMS messaging.
   * Include fields for:

     * Name
     * Email
     * Phone number
     * What they are looking for from an AI texting companion
     * How they heard about Ttyl BestAI
     * Any additional information they want to share
   * Include a checkbox acknowledging that submitting the application is a request for access and is not SMS consent.
   * Include a clear submission button.
   * After submission, show a confirmation message explaining that the application will be reviewed and that approved users will receive separate instructions for activating SMS access.

3. **SMS Opt-In**

   * Explain that only approved users may activate SMS access.

   * Explain the keyword opt-in process:

     1. Text JOIN to the Ttyl BestAI phone number.
     2. Receive the required welcome/disclosure message.
     3. Reply Y to confirm enrollment.
     4. Begin chatting with Ttyl BestAI.

   * Clearly state:
     "Message frequency varies based on your conversations. Msg & data rates may apply. Reply HELP for help. Reply STOP to cancel."

   * Include clearly labeled links to the Privacy Policy and Terms & Conditions.

   * Include a section showing the exact example SMS conversation:

     User: JOIN

     Ttyl BestAI: You’re signing up for recurring conversational messages with an AI companion. Message frequency varies based on your conversations. Msg & data rates may apply. Reply HELP for help. Reply STOP to cancel. Terms: [Terms URL] Privacy: [Privacy URL] Reply Y to confirm.

     User: Y

     Ttyl BestAI: You’re all set. You can start chatting with me anytime.

   * Clearly distinguish the website application from SMS consent.

4. **Privacy Policy**

   * Create a page titled exactly "Privacy Policy".
   * Write a comprehensive but readable privacy policy appropriate for Ttyl BestAI.
   * Address collection and use of names, email addresses, phone numbers, application information, SMS messages, conversation history, technical information, and information necessary to operate the service.
   * Explain that conversations may be processed by third-party technology providers necessary to operate the AI service.
   * Include this exact statement:
     "We do not sell or share your SMS opt-in data or personal information with third parties for marketing purposes."
   * Clearly identify Ttyl BestAI as the registered/service Brand name.
   * Include appropriate data retention, security, user rights, and contact sections.
   * Do not make unsupported legal claims.

5. **Terms & Conditions**

   * Create a page titled exactly "Terms & Conditions".
   * Identify Ttyl BestAI as the service/Brand.
   * Explain eligibility, account/access approval, acceptable use, AI-generated content, limitations of the service, termination of access, intellectual property, disclaimers, and changes to the service.
   * Include a dedicated section titled "SMS Terms".
   * The SMS Terms must include:

     * Message frequency varies.
     * "Message and data rates may apply."
     * Reply HELP for help.
     * Reply STOP to cancel.
     * SMS access requires affirmative opt-in.
     * Application approval does not itself constitute SMS consent.
   * Include contact information placeholders rather than inventing an address or phone number.

Design:

* Modern, sophisticated, minimal technology aesthetic.
* The brand should feel intelligent, private, selective, and conversational.
* Avoid generic corporate SaaS styling.
* Make the site mobile responsive.
* Use clear typography and generous spacing.
* Make the application and SMS activation flows extremely easy to understand.
* Include a footer on every page with links to Home, Apply for Access, SMS Opt-In, Privacy Policy, and Terms & Conditions.

Technical:

* Build the site so that each page has its own stable public URL.
* Use routes:
  /
  /apply
  /opt-in
  /privacy
  /terms
* Make all legal and compliance pages publicly accessible without requiring login.
* Do not implement SMS functionality on this website yet.
* Do not connect the website to Twilio yet.
* Do not invent a Twilio phone number, legal entity name, physical address, or email address. Use clearly marked placeholders where necessary.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/741c3b28-0672-4067-b3af-c61bcafddd2d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# Ttyl BestAI — Website

The public informational and compliance website for **Ttyl BestAI**, a private AI texting companion.

> A conversation, on your terms.

This is a static site. It has four pages, no backend, no forms, and no third-party scripts. The AI and SMS system operate separately and are not part of this project.

## Stack

- React 18 and TypeScript
- Vite 5 (`@vitejs/plugin-react`)
- Plain CSS (no CSS framework)
- No router library: each page is its own static HTML file, so navigation is ordinary page loads

Runtime dependencies are only `react` and `react-dom`.

## Pages

| Route        | Page                       |
| ------------ | -------------------------- |
| `/`          | Home                       |
| `/opt-in/`   | SMS Opt-In                 |
| `/privacy/`  | Privacy Policy             |
| `/terms/`    | Terms & Conditions         |

## Requirements

- Node.js 18.18 or newer (Node 20 or 22 recommended)
- npm 9 or newer

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

Vite serves the site at `http://localhost:5173/TTYL-BestAI/`. The base path matches the GitHub Pages subpath, so local URLs match production.

## Build

```bash
npm run build
```

This runs a TypeScript check, then `vite build`, then `scripts/postbuild.mjs`. The output is written to `dist/`:

- `dist/index.html`, plus `dist/opt-in/index.html`, `dist/privacy/index.html`, and `dist/terms/index.html`
- `dist/404.html`
- `dist/assets/` (hashed JS and CSS)
- `dist/CNAME` and `dist/favicon.svg`

Preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

Deployment is not configured in this repository yet. Once the source is verified, a typical manual flow is:

1. Push this project to `libertysmith/TTYL-BestAI`.
2. Run `npm run build`.
3. Publish the contents of `dist/` to the `gh-pages` branch or a Pages artifact.
4. In the repository settings, set Pages to serve from that source.

The site is then served at `https://libertysmith.github.io/TTYL-BestAI/`.

The custom domain `ttyl-bestai.com` is set in `public/CNAME`, which Vite copies into `dist/`. DNS is not configured here and the custom domain is not assumed to be active.

## Before launch

The legal pages contain bracketed placeholders that must be replaced with confirmed information. Search the source for `Placeholder`. They cover:

- Effective dates for the Privacy Policy and Terms & Conditions
- Contact email address (no physical address or business registration is included, by design)
- Fields collected during access approval
- Conversation history handling and data retention periods
- Security practices, which must be verified before they are described
- Third-party service providers
- User rights and request process
- Minimum age requirement
- Liability and governing law terms, reviewed with counsel

Do not describe any security measure or data practice that has not been verified.

## Project structure

```
.
├── index.html                 Vite entry HTML
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts             base: '/TTYL-BestAI/'
├── public/
│   ├── CNAME                  ttyl-bestai.com
│   ├── favicon.svg
│   └── .nojekyll
├── scripts/
│   └── postbuild.mjs          Writes static entry points for each route
└── src/
    ├── main.tsx               React entry point
    ├── App.tsx                Route selection and page title
    ├── routes.ts              Route table and base-path helpers
    ├── vite-env.d.ts
    ├── components/
    │   ├── Layout.tsx         Header, main, footer
    │   ├── SiteHeader.tsx
    │   ├── SiteFooter.tsx
    │   ├── Link.tsx           Base-path-aware anchor
    │   ├── LegalIntro.tsx
    │   ├── LegalSection.tsx
    │   └── Placeholder.tsx
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── OptInPage.tsx
    │   ├── PrivacyPage.tsx
    │   ├── TermsPage.tsx
    │   └── NotFoundPage.tsx
    └── styles/
        └── global.css
```

## Scope

Intentionally excluded: application or contact forms, sign-up or login, analytics, chat widgets, payments, databases, API calls, AI calls, Twilio or any SMS integration, admin pages, server-side code, and secrets. The site contains no API keys or credentials.

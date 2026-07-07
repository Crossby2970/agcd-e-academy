# AGCD@E-Academy — Landing Pages

Two responsive landing pages for AGCD@E-Academy, built with React + Vite + Tailwind CSS v4:

- `index.html` — the general AGCD@E-Academy site (all pillars and programmes).
- `npo-capacity-building-programme.html` — a dedicated, conversion-focused
  landing page for the flagship **Comprehensive NPO Capacity Building
  Programme** (12-week / 13-part / 62-module course), with separate learner
  and sponsor registration forms.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173 (main site) and /npo-capacity-building-programme.html
npm run build    # production build of both pages to dist/
npm run preview  # preview the production build
```

## Structure

- `src/data/` — editable content for the main site (pillars, courses, pathways, audiences, FAQs) and shared brand/founder info (`founder.js`, `agcd.js`).
- `src/data/programme/` — editable content specific to the NPO Capacity Building Programme page (curriculum, tools, weekly pathway, FAQs, sponsor benefits, etc.).
- `src/components/` — one component per section/UI element for the main site; `src/components/programme/` holds the flagship-programme page's sections.
- `src/pages/ProgrammePage.jsx` — assembles the flagship-programme page; `src/App.jsx` assembles the main site.
- `src/index.css` — Tailwind import, AGCD brand theme (`@theme`), and base styles, shared by both pages.

## Customizing

- Contact details, socials and motto: `src/data/agcd.js`.
- Founder qualifications and positions: `src/data/founder.js`.
- Both registration forms (`src/components/programme/RegistrationForms.jsx`) submit via a `mailto:` link (no backend). Replace `handleSubmit` in each form with a real API call once a backend/CRM endpoint is available.
- Logo/photo: replace `src/assets/founder-photo.jpg`.

## Before going live

See the "Placeholder content" list in the delivery notes — founder photo, social links, `public/og-image.png`, impact-metric figures and testimonials all need real content before launch. The NPO Capacity Building Programme page's accreditation disclaimer (`src/data/programme/content.js`) must stay accurate — do not claim formal accreditation until it is confirmed in writing.

## Before going live

See the "Placeholder content" list in the delivery notes — founder photo, social links, `public/og-image.png`, impact-metric figures and testimonials all need real content before launch.

# Historic Army Aircraft Flight (HAAF) — Official Website

Official website repository for the **Historic Army Aircraft Flight (HAAF)**, a registered UK charity (No. 1182285) based at the Army Aviation Centre, Middle Wallop, Hampshire.

---

## Quick Links
* **Live Staging Preview:** [haaf-website.netlify.app](https://haaf-website.netlify.app/)
* **Project Wiki:** [github.com/benunsworth/haaf-website/wiki](https://github.com/benunsworth/haaf-website/wiki)
* **Epics & Issue Tracker:** [github.com/benunsworth/haaf-website/issues](https://github.com/benunsworth/haaf-website/issues)

---

## Key Features
* **Modern & Accessible:** Built with semantic HTML5, high-contrast aviation heritage styling, and full keyboard/screen-reader accessibility (WCAG 2.1 AA).
* **Zero Maintenance & Zero Server Cost:** Static architecture with £0/month hosting on Netlify, completely eliminating WordPress security update cycles and database vulnerabilities.
* **Non-Technical Volunteer CMS:** Sveltia CMS running at `/admin` with email magic-link login via Netlify Identity.
* **Direct Form Routing:** Aircraft appearance requests and general inquiries sent directly to Gmail via Netlify Forms with honeypot spam protection.

---

## Project Structure
```
haaf-website/
├── index.html               # Standalone static preview (ready to open directly without Node)
├── public/
│   ├── admin/
│   │   ├── index.html       # Sveltia CMS web interface
│   │   └── config.yml       # CMS collections schema (Events, Page Content)
│   ├── images/              # All 18 extracted aircraft photos, badges, logos
│   └── styles/              # Fallback compiled static stylesheets
├── src/
│   ├── layouts/Layout.astro # Base layout with accessibility landmarks & bundled CSS
│   ├── pages/index.astro    # Full Astro single-page scroller template
│   ├── content/             # Editable JSON content files (events & site text)
│   └── styles/global.css    # Complete aviation heritage design system
├── VOLUNTEER_HANDBOOK.md    # Plain-English guide for charity volunteers
├── MAINTENANCE.md           # Technical runbook & DNS cutover guide
├── netlify.toml             # Netlify deployment configuration
└── package.json             # Astro & Tailwind dependencies for cloud builds
```

---

## Documentation & Runbooks
* **[Volunteer Handbook](VOLUNTEER_HANDBOOK.md)** — Step-by-step instructions for non-technical volunteers on updating events and text.
* **[Maintenance & Cutover Runbook](MAINTENANCE.md)** — Technical instructions for Netlify setup and DNS migration from WPEngine.
* **[GitHub Project Wiki](https://github.com/benunsworth/haaf-website/wiki)** — Comprehensive architectural blueprint, design tokens, security model, and AI agent guide.

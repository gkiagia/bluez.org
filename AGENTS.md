# BlueZ.org Agent Instructions

## Build And Validate
- Use Hugo only. Do not add npm, package managers, or extra build tooling.
- Dev server: `hugo server` (live reload at `http://localhost:1313`).
- Production build: `hugo --minify` (outputs to `public/`).
- If you change templates, data, or styles, run at least `hugo --minify` to verify the site still builds.

## Project Architecture
- This repository is a single-page Hugo site for the BlueZ homepage.
- The homepage is assembled in `layouts/index.html` in this order:
  1. `layouts/partials/header.html`
  2. `layouts/partials/hero.html`
  3. `layouts/partials/features.html`
  4. `layouts/partials/modules.html`
  5. `layouts/partials/profiles.html`
  6. `layouts/partials/news.html`
  7. `layouts/partials/footer-links.html`
  8. `layouts/partials/footer.html`
- Data-driven sections:
  - Features: `data/features.yaml`
  - Modules: `data/modules.yaml`
  - Profiles: `data/profiles.yaml`
  - Footer links: `data/footer_links.yaml`
- News cards are generated from `content/news/*.md` by `layouts/partials/news.html`.

## Asset Pipeline
- Keep processable assets in `assets/` (not `static/`).
- CSS is loaded via Hugo Pipes in `layouts/partials/head.html` using minify + fingerprint.
- The Figtree variable font is preloaded from `assets/fonts/`.
- Logos/icons are loaded as Hugo resources; keep this approach.

## Styling And Frontend Conventions
- Keep styling in `assets/css/main.css` and follow the current section-based organization.
- Reuse CSS custom properties in `:root` for colors, spacing, and typography.
- Avoid introducing JavaScript; mobile navigation is CSS-only.
- Keep responsive behavior aligned with current breakpoints unless explicitly required:
  - `960px` (tablet)
  - `640px` (mobile)
- Preserve existing container rhythm and spacing conventions.

## Content Conventions
- New news posts must include front matter used by listing cards:
  - Required: `title`, `date`, `summary`
  - Optional: `image`
- Archetypes default news posts to `draft = true`; set `draft = false` when publishing.
- Footer social/link icons are partials in `layouts/partials/icons/` and are referenced by name in `data/footer_links.yaml`. Icon names must match partial filenames.

## Hugo Template Conventions
- Prefer `hugo.Data` for new data access patterns.
- Existing `.Site.Data` usage still builds today, but it is deprecated in current Hugo releases.

## Design And Brand Guardrails
- Font family: Figtree (self-hosted variable font).
- Brand colors:
  - Dark blue: `#0039cf`
  - Light blue: `#0064fc`
  - Black: `#000000`
  - Grey: `#333333`
  - White: `#ffffff`
- Primary gradient direction: light blue to dark blue, top to bottom.
- Visual character: clean geometric sans-serif, slightly reduced letter spacing, bold and friendly headings.
- Logo treatment: "Blue" text plus a white "Z" inside a blue rounded square icon.
- Keep section style intent:
  - Hero: blue geometric background, centered white copy.
  - Modules: dark background with subtle blue geometric texture and high-contrast cards.
  - Profiles/Features/News: light backgrounds with strong readability.

## Deployment Reference
- GitHub Pages deploy workflow: `.github/workflows/hugo.yml`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
hugo server          # Dev server with live reload at localhost:1313
hugo --minify        # Production build to public/
```

No other build tools, package managers, or dependencies. This is a pure Hugo site.

## Architecture

Single-page homepage for the BlueZ project (Official Linux Bluetooth Protocol Stack), built with Hugo. No themes — all layouts are custom.

### Data-Driven Sections

The homepage (`layouts/index.html`) assembles 8 section partials in order. Most sections pull structured content from YAML data files:

| Section | Partial | Data Source |
|---------|---------|-------------|
| Header | `header.html` | — (hardcoded nav links) |
| Hero | `hero.html` | — (hardcoded text) |
| Features | `features.html` | `data/features.yaml` |
| Modules | `modules.html` | `data/modules.yaml` |
| Profiles | `profiles.html` | `data/profiles.yaml` |
| News | `news.html` | `content/news/*.md` (Hugo pages) |
| Footer Links | `footer-links.html` | `data/footer_links.yaml` |
| Footer | `footer.html` | — (site params from `hugo.toml`) |

Footer link icons are inline SVG partials in `layouts/partials/icons/` referenced by name from the YAML `icon` field.

### Asset Pipeline

CSS and fonts go through Hugo Pipes (`assets/` directory, not `static/`). In `partials/head.html`:
- CSS: `resources.Get "css/main.css" | minify | fingerprint` — produces cache-busted URLs with SRI integrity
- Font: Single variable-weight Figtree woff2 file, preloaded
- Logos: Loaded via `resources.Get` in templates; the small icon is inlined as SVG via `.Content | safeHTML`

### CSS Structure

Single file `assets/css/main.css` organized by section. Uses CSS custom properties (`:root` variables) for brand colors, spacing, and typography. Key values:
- Brand colors: `--color-dark-blue: #0039cf`, `--color-light-blue: #0064fc`
- Container: max-width 1140px
- Responsive breakpoints: 960px (tablet), 640px (mobile)
- Mobile nav: CSS-only checkbox hack (no JavaScript anywhere)

### Design Specification

#### Brand Colors

| Name                | Hex       | Usage                                          |
|---------------------|-----------|------------------------------------------------|
| BlueZ Dark Blue     | `#0039cf` | Primary brand color, dark sections, accents    |
| BlueZ Light Blue    | `#0064fc` | Links, buttons, highlights                     |
| BlueZ Blue Gradient | —         | Light Blue (top) → Dark Blue (bottom), 90°     |
| BlueZ Black         | `#000000` | Headings, body text                            |
| BlueZ Grey          | `#333333` | Secondary text, footer text                    |
| White               | `#ffffff` | Backgrounds, text on dark sections             |

#### Typography

- **Font:** Figtree (variable-weight woff2, self-hosted)
- **Weights used:** Light, Regular, Medium, SemiBold, Bold
- **Letter spacing:** Slightly reduced from default to match brand aesthetic
- **Character:** Clean geometric sans-serif; thicker weights for headlines, lighter for body

#### Logo

- **Full logo:** "Blue" in black bold text + "Z" as a white letter inside a blue rounded-corner square icon with a subtle diagonal shadow/gradient effect
- **Icon only:** The blue square with white "Z", available with and without shadow/shading

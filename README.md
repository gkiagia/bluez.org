# BlueZ.org Website

The official website for the [BlueZ](https://bluez.org/) Linux Bluetooth protocol stack, built with [Hugo](https://gohugo.io/).

## Requirements

- [Hugo](https://gohugo.io/installation/) (extended edition recommended)

## Development

Start a local development server with live reload:

```sh
hugo server
```

The site will be available at `http://localhost:1313`.

## Production Build

```sh
hugo --minify
```

Output is written to the `public/` directory.

---

## Site Structure

The homepage is a single page assembled from partials in this order:

1. Header
2. Hero
3. Features
4. Modules
5. Profiles
6. News
7. Footer links
8. Footer

### Data-driven sections

Most homepage sections are driven by YAML files in `data/`:

| File | Section |
|---|---|
| `data/features.yaml` | Features list |
| `data/modules.yaml` | Modules grid |
| `data/profiles.yaml` | Profiles/people |
| `data/footer_links.yaml` | Footer link columns |

Edit these files to update the content in those sections. Each file is self-documenting through its existing entries.

---

## News Articles

News cards on the homepage and the full news listing at `/news/` are generated from Markdown files under `content/news/`.

### Adding a new article

Use the built-in archetype to scaffold a new article. Include the publication year as a subfolder:

```sh
hugo new news/2026/my-article-title.md
```

This creates `content/news/2026/my-article-title.md` pre-filled with the required front matter. Hugo picks up the `news` archetype automatically regardless of the year subfolder in the path.

### Front matter fields

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Article headline displayed on cards and the article page |
| `date` | Yes | Publication date (`YYYY-MM-DD`); controls sort order |
| `summary` | Yes | Short description shown on news cards |
| `image` | No | Path to a card thumbnail image (relative to `assets/images/news/`) |
| `hero_image` | No | Path to a larger hero image shown at the top of the article page |
| `draft` | — | Set to `false` (or remove) to publish; `true` hides the article from the build |

Example:

```yaml
---
title: "Release of BlueZ 6.0"
date: 2026-04-17
draft: false
summary: "BlueZ 6.0 brings major improvements to LE Audio and ISO socket support."
image: ""
hero_image: ""
---
```

Write the article body in Markdown below the front matter. Fenced code blocks are supported.

### Images

Place news images in `assets/images/news/` and reference them by filename in the front matter fields above.

---

## Deployment

The site is deployed automatically to GitHub Pages via `.github/workflows/hugo.yml` on pushes to the main branch.

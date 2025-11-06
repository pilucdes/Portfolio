# Portfolio Website

A personal portfolio built with [Astro](https://astro.build). It showcases projects and expertise with a simple, accessible design and localized content.

## ✨ Features

- **Astro**: Island architecture for fast, content-first pages
- **TypeScript**: Safer scripting and services
- **Localization**: English and French locales (`/en`, `/fr`)
- **Responsive UI**: Reusable cards and section components

## 🧱 Tech Stack

- **Framework**: Astro
- **Language**: TypeScript
- **Styling**: Vanilla CSS (`src/styles`)
- **Icons/Assets**: Static assets in `public/`

## 📁 Project Structure

```text
/
├── astro.config.mjs
├── public/
│   └── img/                # Portfolio images & media
├── src/
│   ├── components/
│   │   ├── cards/          # UI cards (projects, expertise)
│   │   ├── sections/       # Page sections (hero, header, etc.)
│   │   └── IconListItem.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── locales/            # i18n resources (JSON)
│   │   ├── en.json
│   │   └── fr.json
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro # Localized home routes: /en, /fr
│   │   └── index.astro     # Root route (can redirect or default)
│   ├── scripts/
│   │   ├── app.ts
│   │   └── services/
│   │       ├── animationService.ts
│   │       └── i18nService.ts
│   └── styles/
│       ├── components.css
│       ├── effects.css
│       └── global.css
├── package.json
└── tsconfig.json
```
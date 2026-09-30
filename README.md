# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Multilingual AI pipeline (recruiter case study)

This portfolio ships in 6 languages (ES, EN, FR, DE, PT, IT) with a professional i18n setup:

- **Routing:** `/` (ES default) + `/en/`, `/fr/`, `/de/`, `/pt/`, `/it/` with `hreflang` es/en/fr/de/pt/it/x-default and x2–x6 sitemap coverage.
- **Architecture:** typed dictionaries in `src/i18n/` (`getDict(lang)`), `lang` prop on Header/Hero/ProjectCard, `LangSelector.astro` dropdown with cross-language path mapping.
- **AI-assisted translation:** UI strings and page bodies generated with an LLM agent workflow (glossary: product names, tech stack and "case study" stay untranslated; brand voice preserved per locale), then human-reviewed commit by commit.
- **Providers:** Lingo.dev engine `portfolio-multilingual` (primary: glossary + brand voice + GEMBA reviewer + GitHub App auto-PR) with DeepL API fallback for EU pairs.
- **Setup:** repo secrets `LINGO_API_KEY` and optional `DEEPL_API_KEY` (GitHub Settings → Secrets → Actions). Without secrets, `i18n-ai.yml` skips green; curated `src/content/projects_<lang>/` remain source of truth.
- **Quality gate:** `i18n-check.yml` enforces build + locale presence + no EN leftovers on every push/PR.

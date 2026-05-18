# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Operating protocol (mandatory, enforced by hooks)

These rules exist because of a real failure: in May 2026 a session spent 25+ messages and ~30 minutes trying to view a static HTML file because the assistant proposed `npm run dev` against a repo with 34 unresolved merge conflicts and an outdated Node version, then patched symptoms one at a time as each new error surfaced.

**Read `.claude/settings.json` — the hooks below are NOT instructions, they are blocking enforcement.** A future session that ignores this protocol will be denied at tool-call time.

1. **Diagnose before proposing.** Before suggesting any `npm`/`pnpm`/`yarn`/`bun` command, the SessionStart hook (`.claude/scripts/session-diagnostic.sh`) has already injected: branch, Node version vs. `engines.node`, count of unmerged files, count of modified files. Read that diagnostic from your context before acting.
2. **Match solution to goal.** A static HTML file is opened with `open <file>`, not with a dev server. A Markdown render is `glow` or a browser, not `npm run docs`. Confirm the user's actual goal before proposing a build pipeline.
3. **Resolve broadly, not one-by-one.** If `git status` shows multiple conflict markers, run `git status | grep "both"` to count them, then resolve all together (e.g. `git checkout --ours .` if appropriate). Do NOT fix one file, retry, fix the next. The PreToolUse hook (`.claude/scripts/block-build-on-conflict.sh`) blocks build/install commands while ANY conflict remains.
4. **Distinguish remote vs. local filesystem.** When the user is on a different machine (e.g. their Mac) and Claude is on a remote sandbox, files written here do NOT appear there. Pull via `git fetch origin && git checkout origin/<branch> -- <file>` on the user's side, or paste content for them to save.
5. **Consolidate commands.** Prefer one chained command (`A && B && C`) over three sequential messages. The user shouldn't have to copy/paste three times for one logical operation.

### Hooks reference

| File | Event | Purpose | Blocks? |
|------|-------|---------|---------|
| `.claude/scripts/block-build-on-conflict.sh` | PreToolUse(Bash) | Denies `npm/pnpm/yarn/bun (install\|ci\|run\|test\|start\|dev\|build\|preview)` while `git ls-files -u` is non-empty | Yes (permissionDecision=deny) |
| `.claude/scripts/session-diagnostic.sh` | SessionStart | Injects branch/Node/conflict counts as additionalContext | No (advisory) |

To disable temporarily, edit `.claude/settings.json` or run `/hooks` in the CLI. Do not delete the scripts without replacing the protection.

## Commands

- `npm run dev` — Astro dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- Node `>=22.12.0` is required (engines field; CI uses Node 22).
- There is no test runner, linter, or formatter configured. `lighthouserc.json` defines the performance budget (perf ≥ 0.90, a11y ≥ 0.90, SEO ≥ 0.95, LCP ≤ 2500ms, CLS ≤ 0.1, TBT ≤ 300ms) — to reproduce locally: `npm run build` then `lhci autorun` against `lighthouserc.json`. No automated CI gate currently runs this on PRs.
- Deploy: **Cloudflare Pages** on push to `main`. Build command `npm run build`, output `dist/`, root directory `SITE DANUSA PIRES/site`. Custom domain `www.danusapires.com.br`. See `/CLOUDFLARE_DEPLOY.md` at repo root for setup steps.

## Architecture

This is a **template** ("Tier 5+ Starter"), not a finished site. The intended workflow is: clone → fill in `TODO_*` placeholders → ship as a brand-specific site. Many string literals in `src/data/*` and `src/content.config.ts` are placeholders (`TODO_NOME_MARCA`, `TODO_PILAR_1`, `TODO_CATEGORIA_1`, etc.) that the template consumer is expected to replace before launch. Do not treat these as bugs.

Stack constraint: **Astro 6 + TypeScript strict, zero JS dependencies beyond `@astrojs/sitemap`.** Don't introduce React, Vue, Tailwind, or other runtime/UI libs — the project's value prop is a hand-tuned, near-zero-JS bundle that hits the Lighthouse thresholds in `lighthouserc.json` (perf ≥ 0.90, a11y ≥ 0.90, SEO ≥ 0.95, LCP ≤ 2500ms, CLS ≤ 0.1, TBT ≤ 300ms). Anything that regresses these will fail CI.

Content language is **Brazilian Portuguese** (`lang="pt-BR"`, copy, slugs like `/agendamento`, `/profissionais`, `/sobre`, `/politica-de-privacidade`). Keep that convention.

### Data flow / single source of truth

- `src/data/site.ts` — brand identity, addresses, analytics IDs, `PILLARS`, `NAV_LINKS`, WhatsApp helpers (`WA_BASE`, `WA_DEFAULT`). Imported by `BaseLayout`, `Nav`, `Footer`, schema.org JSON-LD, and the GTM/Meta Pixel inline scripts. Edit here, not in components.
- `src/data/professionals.ts` — `Professional[]` plus `getProfessionalBySlug` / `getProfessionalsByUnit`. The `unit` field links professionals back to pillars.
- `src/content.config.ts` — Astro content collection for `src/content/blog/*.md`, with a `category` enum that must be edited per-brand (currently `TODO_CATEGORIA_*`).

### Layout & styles

- `src/layouts/BaseLayout.astro` is the only layout. It owns: `<head>` (CSP, OG, Twitter, hreflang, theme-color), JSON-LD (`WebSite` + `MedicalBusiness`, optional `BreadcrumbList`), font preloads (`/fonts/arboria-*.woff2`), the reveal-on-scroll `IntersectionObserver`, the mobile menu toggle, **consent-gated** GTM and Meta Pixel loaders, and `sw.js` registration. Pages should pass `title`, `description`, optional `breadcrumbs`, and `currentPage` (used by `Nav` for active state).
- The CSP in `BaseLayout` is restrictive — adding any third-party script/style/font/frame likely requires updating it.
- Styles are plain CSS, imported in fixed order from `BaseLayout`: `tokens.css` → `base.css` → `layout.css` → `components.css` → `responsive.css`. Design tokens (colors, spacing, typography) live in `tokens.css` as CSS variables; components reference them rather than hard-coding values.
- Fonts are self-hosted (Arboria woff2). The files are not committed — `public/fonts/` must be populated before launch, otherwise the preloads 404.

### Analytics & consent

- GTM and Meta Pixel are **lazy-loaded only after** `localStorage.cookie_consent === 'accepted'` or a `consent_accepted` window event (dispatched by `CookieConsent.astro`). Do not move these scripts above the consent gate.
- `src/scripts/form-submit.ts` posts `.ecooa-form` forms to `form.action` (typically `SITE.gasUrl`, a Google Apps Script endpoint), with retry/timeout. On success, it fires `gtag('form_submit_success', …)`, fires `fbq('Lead')` for conversion form types (`agendamento`, `b2b-medicina`, `b2b-nutricao`), and redirects to `/obrigado?type=…`. Newsletter forms fire `fbq('Subscribe')` and show an inline `.ecooa-form-ok` element. Form types are read from a hidden `_formType` input.

### Adding a pillar page

`PILLARS` and `NAV_LINKS` in `src/data/site.ts` are the routing source of truth for top-level brand sections. To add one: duplicate `src/pages/pilar-template.astro` to `src/pages/<slug>.astro`, fill the `TODO_*`s, and add matching entries to both arrays. The README documents this flow.

### Deployment notes

- Output goes to GitHub Pages from `dist/`. `astro.config.mjs` `site` must be set to the real domain before launch (sitemap and canonical URLs depend on it).
- `public/sw.js`, `public/manifest.json`, `public/robots.txt` are shipped as-is; treat them as part of the deploy contract.

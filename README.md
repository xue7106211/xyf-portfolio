# 薛一飞 / Allen Xue — Design Engineering Portfolio

Bilingual (中文 / English) portfolio for hiring managers and peers in design systems / design engineering.

**Positioning:** a designer who ships code — tokens, component libraries, Figma plugins, design-to-code, and AI agent workflows.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- [affectUI](https://www.affectui.com/components) **free** components (MIT), installed via shadcn registry
- React Router (SPA)

### affectUI usage

Installed free components (Pro skipped; no purchase):

| Component | Role |
|-----------|------|
| `SegmentedControl` | Language toggle + project filters |
| `NumberTicker` | Public metrics (e.g. 600+ OS4 Tokens) |
| `TextReveal` | Hero positioning line |
| `GridBackground` | Hero atmosphere |
| `LogoMarquee` | Company strip |
| `ToolCallCard` / `ToolCallGroup` | AI-workflow illustration |
| `Button` | CTAs |
| `ShimmerLoader` / `FilterMenu` | Available for extension |

Closest local equivalents for **Pro** items (`Tilt Card`, `Gradient Text`, `Project Card`, App Shell): `src/components/TiltCard.tsx`, `GradientText.tsx`, and custom project cards / layout.

## Content

Source of truth (do not invent facts):

- `content/content.json` — assembled from Notion + GitHub
- `content/NOTES.md` — sources, uncertainties, confidentiality flags

Editable site data (typed JSON derived from the source, with Allen’s publish rules applied):

- `src/data/profile.json`
- `src/data/experience.json` (performance ratings removed)
- `src/data/projects.json`
- `src/data/skills.json`
- `src/data/repos.json` (`portfolio_worthy` only)
- `src/data/metrics.json`
- `src/data/companies.json`

Publish rules encoded in the derived data:

- Current role: Xiaomi HyperOS design system / design engineering (`2025–`)
- No performance ratings (M+, SpotBonus, Kuaishou A, etc.)
- Kuaishou period: `2022–2023`
- Confidentiality: high-level only for internships / internal Xiaomi tooling; no internal Feishu links or OS5 mappings

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

```bash
npm run build   # output: dist/
npm run preview # preview production build
```

## Cloudflare Pages

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20+ recommended |

SPA fallback is included at `public/_redirects` (copied into `dist`):

```
/*    /index.html   200
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Typecheck + production build → `dist` |
| `npm run preview` | Serve `dist` locally |
| `npm run lint` | oxlint |

## Links

- GitHub: https://github.com/xue7106211
- Personal site: https://xyf.design

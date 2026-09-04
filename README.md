# SHRIJIS Labs

Marketing site for SHRIJIS Labs — [shrijislabs.com](https://shrijislabs.com).

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` — routes, layout, metadata, and generated assets (`icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, `manifest.ts`)
- `src/components` — page sections and UI (header, hero, pillars, about, contact, footer)
- `src/lib/site.ts` — central site config (name, url, description, contact email) reused across metadata, JSON-LD, and the contact section

## Build

```bash
npm run build
npm run start
```

## Deployment

Deployed on [Vercel](https://vercel.com), mapped to the `shrijislabs.com` custom domain.

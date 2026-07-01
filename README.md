# Personal Knowledge Hub

A content-driven professional site built with **Astro**, **Decap CMS**, and deployed on **Cloudflare Pages**. Edit news, projects, blog posts, and research notes from your phone at `/admin`.

## Features

- Rich homepage with latest news, featured project, featured article, and current focus
- Multi-page sections: Projects, Research, Blog, About, Resume
- Git-based content management via Decap CMS
- Mobile-friendly editing workflow
- Dark slate/sky design with Tailwind CSS

## Local Development

**Prerequisites:** Node.js 20+ and npm

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

### CMS local editing

```bash
npx decap-server
```

Then visit [http://localhost:4321/admin](http://localhost:4321/admin) with `local_backend: true` enabled in `public/admin/config.yml`.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── content/           # Markdown content (CMS-managed)
│   ├── news/
│   ├── projects/
│   ├── blog/
│   ├── papers/
│   └── config/site.json
├── components/        # Astro + React islands
├── layouts/
└── pages/
public/
├── admin/             # Decap CMS
└── assets/images/     # Uploaded images
workers/oauth/         # GitHub OAuth for CMS on Cloudflare
```

## Deployment (Cloudflare Pages)

See **[docs/GO_LIVE.md](docs/GO_LIVE.md)** for the full checklist.

Quick summary:

1. Push to `mwazakd/mwazakd.github.io` on GitHub
2. Connect repo in [Cloudflare Pages](https://dash.cloudflare.com/) (build: `npm run build`, output: `dist`)
3. Deploy OAuth worker from `workers/oauth/` for CMS auth
4. Visit `/admin` on your production URL to edit content from your phone

## Adding Assets

Place these files in `public/assets/`:

- `images/tutor5.jpg` — profile photo
- `images/water-quality-monitoring.png`
- `images/titration-simulator.png`
- `mwazakd_cv.pdf` — resume PDF

Images can also be uploaded via Decap CMS.

## Standalone Demos

- [Interactive Cell City Lesson](/cells.html) — biology education demo

## License

Private and personal.

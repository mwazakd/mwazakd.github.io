# Personal Website (Jekyll + Tailwind)

This repository contains a Jekyll-based personal website scaffold styled with Tailwind CSS and a GitHub Actions workflow to build ^& deploy to GitHub Pages automatically.

See the `assets/uploads/` folder to add images (refer to them from posts or pages). Edit the HTML pages in the root for simple pages (Research, Teaching, etc.), and add blog posts under `_posts/` using Jekyll's naming convention.

## Local dev
1. Install prerequisites (Node.js, Ruby, Bundler) — see platform-specific notes below.
2. `git clone ^<repo^>`
3. `npm ci`
4. `bundle install`
5. `npm run build:css` # builds Tailwind CSS once
6. `bundle exec jekyll serve --livereload`

## Deploy
Push to `main` branch. GitHub Actions will run and publish to `gh-pages` automatically.

## Adding content
- Add images/videos to `assets/uploads/` and reference them in posts: `![alt text]({{ '/assets/uploads/filename.jpg' | relative_url }})`
- Add new blog posts under `_posts/YYYY-MM-DD-title.md`.

## Notes
- If you prefer no build step, a simpler CDN-only version is possible (I can provide that too).
"# Trigger deployment" 

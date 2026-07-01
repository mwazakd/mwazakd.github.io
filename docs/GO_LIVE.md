# Go-Live Checklist

Complete these steps in order. Code is already configured for repo `mwazakd/mwazakd.github.io`.

## 1. Push to GitHub

```bash
git add public/assets/
git add .
git commit -m "Add assets and production CMS config"
git push origin main
```

## 2. Cloudflare Pages (Dashboard)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select **mwazakd/mwazakd.github.io**, branch **main**
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
   - Environment variable: `NODE_VERSION` = `20`
4. Deploy → note your URL (likely `https://mwazakd-github-io.pages.dev`)
5. If the URL differs, update `site` in [`astro.config.mjs`](../astro.config.mjs) and push again

## 3. GitHub OAuth App

[Create OAuth App](https://github.com/settings/developers) → **New OAuth App**

| Field | Value |
|---|---|
| Homepage URL | `https://mwazakd-github-io.pages.dev` |
| Callback URL | `https://decap-cms-oauth.<your-subdomain>.workers.dev/callback` |

Save Client ID and Client Secret.

## 4. Deploy OAuth Worker

```bash
cd workers/oauth
npm install
npx wrangler login
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npm run deploy
```

Copy the worker URL from deploy output. Update `base_url` in [`public/admin/config.yml`](../public/admin/config.yml) if it differs from `https://decap-cms-oauth.mwazakd.workers.dev`, then push.

Update the OAuth App callback URL to match: `https://<worker-url>/callback`

## 5. Verify CMS

1. Open `https://<your-pages-url>/admin`
2. Login with GitHub
3. Add a test news item → Save
4. Confirm it appears on the homepage after rebuild (~1–2 min)

## Local CMS (no OAuth needed)

```bash
npm run dev
npx decap-server
```

Open `http://localhost:4321/admin` — uses `config.local.yml` automatically.

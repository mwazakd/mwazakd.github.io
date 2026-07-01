/**
 * Decap CMS GitHub OAuth proxy for Cloudflare Workers.
 *
 * Setup:
 * 1. Create a GitHub OAuth App at https://github.com/settings/developers
 *    - Homepage URL: https://your-site.pages.dev
 *    - Callback URL: https://your-oauth-worker.workers.dev/callback
 * 2. Set secrets: wrangler secret put GITHUB_CLIENT_ID && wrangler secret put GITHUB_CLIENT_SECRET
 * 3. Deploy: npx wrangler deploy
 * 4. Uncomment base_url and auth_endpoint in public/admin/config.yml
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === '/auth') {
      const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&scope=repo,user`;
      return Response.redirect(redirectUrl, 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing code', { status: 400 });
      }

      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const tokenData = await tokenResponse.json();

      const content = `
        <script>
          const receiveMessage = (message) => {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({ token: message.data.token, provider: 'github' })}',
              message.origin
            );
            window.close();
          };
          receiveMessage({ data: { token: '${tokenData.access_token}' } });
        </script>
      `;

      return new Response(content, {
        headers: { 'Content-Type': 'text/html', ...corsHeaders },
      });
    }

    return new Response('Decap CMS OAuth Worker', { headers: corsHeaders });
  },
};

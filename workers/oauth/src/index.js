/**
 * Decap CMS GitHub OAuth proxy for Cloudflare Workers.
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function callbackUrl(request) {
  return `${new URL(request.url).origin}/callback`;
}

function errorPage(title, detail) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:2rem;max-width:40rem">
    <h1>${title}</h1>
    <pre style="white-space:pre-wrap;background:#f1f5f9;padding:1rem;border-radius:8px">${JSON.stringify(detail, null, 2)}</pre>
    <p>If you see <code>bad_verification_code</code>, regenerate the GitHub client secret and run:<br>
    <code>npx wrangler secret put GITHUB_CLIENT_SECRET</code></p>
  </body></html>`;
}

function successPage(token) {
  return `<!DOCTYPE html><html><body><script>
    (function () {
      const data = JSON.stringify({ token: ${JSON.stringify(token)}, provider: 'github' });
      const msg = 'authorization:github:success:' + data;

      function sendToken(origin) {
        if (window.opener) {
          window.opener.postMessage(msg, origin || '*');
          window.close();
        }
      }

      window.addEventListener('message', function (e) {
        if (e.data === 'authorizing:github') {
          sendToken(e.origin);
        }
      }, false);

      if (window.opener) {
        window.opener.postMessage('authorizing:github', '*');
      } else {
        document.body.innerHTML = '<p>Login successful. You can close this window.</p>';
      }
    })();
  </script></body></html>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const redirectUri = callbackUrl(request);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === '/auth') {
      if (!env.GITHUB_CLIENT_ID) {
        return new Response(errorPage('Worker misconfigured', { error: 'GITHUB_CLIENT_ID is not set' }), {
          status: 500,
          headers: { 'Content-Type': 'text/html', ...corsHeaders },
        });
      }

      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        redirect_uri: redirectUri,
        scope: 'repo',
      });
      return Response.redirect(
        `https://github.com/login/oauth/authorize?${params.toString()}`,
        302
      );
    }

    if (url.pathname === '/callback') {
      const oauthError = url.searchParams.get('error');
      if (oauthError) {
        return new Response(errorPage('GitHub OAuth error', Object.fromEntries(url.searchParams)), {
          status: 400,
          headers: { 'Content-Type': 'text/html', ...corsHeaders },
        });
      }

      const code = url.searchParams.get('code');
      if (!code) {
        return new Response(errorPage('Missing code', Object.fromEntries(url.searchParams)), {
          status: 400,
          headers: { 'Content-Type': 'text/html', ...corsHeaders },
        });
      }

      const body = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: redirectUri,
      });

      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: body.toString(),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenData.access_token) {
        return new Response(errorPage('GitHub OAuth error', tokenData), {
          status: 400,
          headers: { 'Content-Type': 'text/html', ...corsHeaders },
        });
      }

      return new Response(successPage(tokenData.access_token), {
        headers: { 'Content-Type': 'text/html', ...corsHeaders },
      });
    }

    return new Response('Decap CMS OAuth Worker — endpoints: /auth, /callback', {
      headers: corsHeaders,
    });
  },
};

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  MOBILEDE_USERNAME: string;
  MOBILEDE_PASSWORD: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    try {
      // Create auth header
      const authHeader = `Basic ${btoa(`${env.MOBILEDE_USERNAME}:${env.MOBILEDE_PASSWORD}`)}`;

      // Get the URL parameters from the request
      const url = new URL(request.url);
      const customerNumber = url.searchParams.get('customerNumber') || '864291';

      // Forward the request to Mobile.de API
      const apiResponse = await fetch(`https://services.mobile.de/search-api/search?customerNumber=${customerNumber}`, {
        headers: {
          'Authorization': authHeader,
          'Accept': 'application/vnd.de.mobile.api+xml'
        }
      });

      if (!apiResponse.ok) {
        throw new Error(`Mobile.de API responded with ${apiResponse.status}`);
      }

      const data = await apiResponse.text();

      // Return the response with CORS headers
      return new Response(data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/xml",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: (error instanceof Error) ? error.message : "An unknown error occurred" }), {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
    }
  },
}

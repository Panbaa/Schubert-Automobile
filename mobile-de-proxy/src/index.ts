import { ExecutionContext } from '@cloudflare/workers-types';

export interface Env {
  // Add any environment variables here
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': 'https://schuberts-automobile.de',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    try {
      // Forward the request to mobile.de API
      const url = new URL(request.url);
      const targetUrl = `https://services.mobile.de/search-api/search${url.search}`;

      const response = await fetch(targetUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.de.mobile.api+json',
        },
      });

      // Create a new response with CORS headers
      const modifiedResponse = new Response(response.body, response);
      modifiedResponse.headers.set('Access-Control-Allow-Origin', 'https://schuberts-automobile.de');
      
      return modifiedResponse;
    } catch (error) {
      return new Response('Error proxying request', { status: 500 });
    }
  },
};
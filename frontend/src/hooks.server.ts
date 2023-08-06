import { STRAPI_HOST } from '$env/static/private';
import { PUBLIC_STRAPI_HOST } from '$env/static/public';
import type { HandleFetch } from '@sveltejs/kit';

export const handleFetch = (async ({ request, fetch }) => {
	if (request.url.startsWith(PUBLIC_STRAPI_HOST)) {
		// clone the original request, but change the URL
		request = new Request(request.url.replace(PUBLIC_STRAPI_HOST, STRAPI_HOST), request);
	}

	return fetch(request);
}) satisfies HandleFetch;

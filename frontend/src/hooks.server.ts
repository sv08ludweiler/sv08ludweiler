import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import type { HandleFetch } from '@sveltejs/kit';

export const handleFetch = (async ({ request, fetch }) => {
	if (request.url.startsWith(envPublic.PUBLIC_FRONTEND_STRAPI_HOST)) {
		// clone the original request, but change the URL
		request = new Request(
			request.url.replace(envPublic.PUBLIC_FRONTEND_STRAPI_HOST, env.FRONTEND_STRAPI_HOST),
			request,
		);
	}

	return fetch(request);
}) satisfies HandleFetch;

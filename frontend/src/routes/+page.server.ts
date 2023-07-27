import { STRAPI_API_TOKEN } from '$env/static/private';
import { PUBLIC_STRAPI_HOST } from '$env/static/public';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	return {
		landingPage: await(
			await fetch(`${PUBLIC_STRAPI_HOST}/api/landingpage?populate=*`, {
				headers: {
					Authorization: `bearer ${STRAPI_API_TOKEN}`,
				},
			})
		).json(),

		news: (await fetch('/posts/landing-page')).json(),
	};
}) satisfies PageServerLoad;

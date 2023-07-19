import { STRAPI_API_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	return {
		landingPage: await (
			await fetch('http://0.0.0.0:1337/api/landingpage?populate=*', {
				headers: {
					Authorization: `bearer ${STRAPI_API_TOKEN}`,
				},
			})
		).json(),

		news: (await fetch('http://localhost:5173/posts/landing-page')).json(),
	};
}) satisfies PageServerLoad;

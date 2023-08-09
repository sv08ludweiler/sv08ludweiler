import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	return {
		landingPage: await (
			await fetch(`${envPublic.PUBLIC_STRAPI_HOST}/api/landingpage?populate=*`, {
				headers: {
					Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
				},
			})
		).json(),

		news: (await fetch('/posts/landing-page')).json(),
	};
}) satisfies PageServerLoad;

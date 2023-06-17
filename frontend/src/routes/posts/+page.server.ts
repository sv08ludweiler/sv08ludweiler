import { STRAPI_API_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';


export const load = (async ({ fetch }) => {
	return {
		posts: await (await fetch('http://0.0.0.0:1337/api/posts?populate=*', {
			headers: {
				'Authorization': `bearer ${STRAPI_API_TOKEN}`
			}
		})).json()
	};
}) satisfies PageServerLoad;

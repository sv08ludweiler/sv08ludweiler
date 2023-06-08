
import { STRAPI_API_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        landingPage: await (await fetch('http://localhost:1337/api/landingpage?populate=*', {
			headers: {
				'Authorization': `bearer ${STRAPI_API_TOKEN}`
			}
		})).json()
    };
}) satisfies PageServerLoad;
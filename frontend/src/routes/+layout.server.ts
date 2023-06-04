import { STRAPI_API_TOKEN } from '$env/static/private';
import type { LayoutServerLoad } from './$types';

export const load = (async ({fetch}) => {
    return {
        navigation: await (await fetch('http://localhost:1337/api/navigation/render/1?type=TREE', {
			headers: {
				'Authorization': `bearer ${STRAPI_API_TOKEN}`
			}
		})).json()
    };
}) satisfies LayoutServerLoad;
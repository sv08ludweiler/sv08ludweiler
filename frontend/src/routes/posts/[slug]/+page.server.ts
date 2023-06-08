import { STRAPI_API_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';

export const load = (async ({params}) => {

	const post = await (await fetch(`http://localhost:1337/api/posts/${params.slug}?populate=*`, {
		headers: {
			'Authorization': `bearer ${STRAPI_API_TOKEN}`
		}
	})).json()

	const content = await compile(post.data.attributes.Content)

    return {
        post,
		content 
    };
}) satisfies PageServerLoad;
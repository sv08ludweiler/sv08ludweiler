import { STRAPI_API_TOKEN } from '$env/static/private';
import qs from 'qs';
import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const query = qs.stringify(
		{
			filters: {
				slug: {
					$eq: params.slug
				}
			},
			populate: '*'
		},
		{
			encodeValuesOnly: true // prettify URL
		}
	);

	const posts = await (
		await fetch(`http://0.0.0.0:1337/api/posts?${query}`, {
			headers: {
				Authorization: `bearer ${STRAPI_API_TOKEN}`
			}
		})
	).json();

	// console.log('slug', params.slug, 'posts', posts);

	if (posts.meta.total < 1) {
		throw error(404, {
			message: 'Post not found'
		});
	}

	const post = posts.data[0];

	let content;
	if (post?.attributes?.content) {
		content = await compile(post.attributes.content);
	}
	return {
		post,
		content
	};
}) satisfies PageServerLoad;

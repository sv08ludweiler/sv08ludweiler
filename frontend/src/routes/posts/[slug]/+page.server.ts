import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import qs from 'qs';
import type { ApiAuthor, ApiPost } from '../../../types/post.types';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const query = qs.stringify(
		{
			filters: {
				slug: {
					$eq: params.slug,
				},
			},
			populate: '*',
		},
		{
			encodeValuesOnly: true, // prettify URL
		},
	);

	const posts = await (
		await fetch(`${env.FRONTEND_STRAPI_HOST}/api/posts?${query}`, {
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		})
	).json();

	if (posts.meta.total < 1) {
		throw error(404, {
			message: 'Post not found',
		});
	}

	const post = posts.data[0] as ApiPost & { author: ApiAuthor };

	let content = { code: '' };
	if (post?.content) {
		content = await compile(post.content);
	}
	return {
		post,
		content,
	};
}) satisfies PageServerLoad;

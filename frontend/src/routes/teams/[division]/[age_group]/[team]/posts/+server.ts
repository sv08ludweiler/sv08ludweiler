import { STRAPI_API_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import qs from 'qs';
import { compile } from 'mdsvex';

export const GET: RequestHandler = async ({ fetch, params }) => {
	const truncate = (str: string, len: number) =>
		str.substring(0, (str + ' ').lastIndexOf(' ', len));

	const teamPostQuery = qs.stringify({
		filters: {
			teams: {
				slug: {
					$eq: params.team,
				},
			},
		},
		pagination: {
			pageSize: 5,
		},
		sort: ['updatedAt:desc', 'publishedAt:desc', 'createdAt:desc'],
		populate: {
			teams: {
				populate: ['slug'],
			},
			header_image: {
				populate: '*',
			},
		},
	});

	const postsRequest = await fetch(`http://0.0.0.0:1337/api/posts?${teamPostQuery}`, {
		headers: {
			Authorization: `bearer ${STRAPI_API_TOKEN}`,
		},
	});
	const posts = await postsRequest.json();

	for (const post of posts.data) {
		if (post?.attributes?.content) {
			post.attributes.htmlContent = await compile(post.attributes.content);
			post.attributes.previewText =
				truncate(
					post.attributes.htmlContent.code.replace(/<img[^>]*>/g, '').replace(/<video[^>]*>/g, ''),
					250
				) + '...';
		}
	}

	return json(posts);
};

import { STRAPI_API_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import qs from 'qs';
import { compile } from 'mdsvex';

export const GET: RequestHandler = async ({ fetch }) => {
	const truncate = (str: string, len: number) =>
		str.substring(0, (str + ' ').lastIndexOf(' ', len));

	const teamPostQuery = qs.stringify({
		filters: {
			landing_page: {
				$eq: true,
			},
		},
		sort: ['updatedAt:desc', 'publishedAt:desc', 'createdAt:desc'],
		pagination: {
			pageSize: 5,
		},
		populate: {
			teams: {
				populate: ['slug', 'age_group', 'divisions'],
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

	console.log({ posts });
	

	if (posts.data) {
		for (const post of posts.data) {
			if (post?.attributes?.content) {
				post.attributes.htmlContent = await compile(post.attributes.content);
				post.attributes.previewText =
					truncate(
						post.attributes.htmlContent.code
							.replace(/<img[^>]*>/g, '')
							.replace(/<video[^>]*>/g, ''),
						250,
					) + '...';
			}
		}

		return json(posts);
	} else {
		return json([]);
	}
};

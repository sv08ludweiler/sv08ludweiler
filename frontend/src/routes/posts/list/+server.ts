import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import { json, type RequestHandler } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import qs from 'qs';

export const GET: RequestHandler = async ({ fetch, url }) => {
	console.log('get posts');
	const page = Number(url.searchParams.get('page') ?? '0');

	const truncate = (str: string, len: number) =>
		str.substring(0, (str + ' ').lastIndexOf(' ', len));

	const teamPostQuery = qs.stringify({
		pagination: {
			pageSize: 5,
			page: page || 1,
		},
		sort: ['updatedAt:desc', 'publishedAt:desc', 'createdAt:desc'],
		populate: {
			teams: {
				populate: ['slug', 'age_group', 'divisions'],
			},
			header_image: {
				populate: '*',
			},
		},
	});

	const postsRequest = await fetch(
		`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}/api/posts?${teamPostQuery}`,
		{
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		},
	);
	const posts = await postsRequest.json();

	for (const post of posts.data) {
		if (post?.attributes?.content) {
			post.attributes.htmlContent = await compile(post.attributes.content);
			post.attributes.previewText =
				truncate(
					post.attributes.htmlContent.code.replace(/<img[^>]*>/g, '').replace(/<video[^>]*>/g, ''),
					250,
				) + '...';
		}
	}

	return json(posts);
};

import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import { json, type RequestHandler } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import qs from 'qs';
import type { ApiPostResponse } from '../../../types/post.types';
import { removeImgVideoHeadingsFromHtmlText, removeTagsFromHtmlText } from '$lib/utils';

export const GET: RequestHandler = async ({ fetch, url }) => {
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
				fields: ['slug'],
				populate: ['age_group', 'divisions'],
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
		if (post?.content) {
			post.htmlContent = await compile(post.content);
			post.previewText =
				truncate(
					removeTagsFromHtmlText(removeImgVideoHeadingsFromHtmlText(post.htmlContent.code)),
					250,
				) + '...';
		}
	}

	return json(posts as ApiPostResponse);
};

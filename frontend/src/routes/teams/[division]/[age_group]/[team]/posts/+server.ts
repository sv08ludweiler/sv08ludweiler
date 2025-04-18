import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import { json } from '@sveltejs/kit';
import qs from 'qs';
import type { ApiPostResponse } from '../../../../../../types/post.types';
import type { RequestHandler } from './$types';
import { removeImgVideoHeadingsFromHtmlText, removeTagsFromHtmlText } from '$lib/utils';
import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

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
		sort: [/*'updatedAt:desc', 'publishedAt:desc',*/ 'createdAt:desc'],
		populate: {
			teams: {
				// fields: ['slug'],
				populate: '*',
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
	const posts = (await postsRequest.json()) as ApiPostResponse;

	for (const post of posts.data) {
		if (post?.content) {
			const parsed = await marked.parse(post.content);
			post.htmlContent = DOMPurify.sanitize(parsed);

			post.previewText =
				truncate(
					removeTagsFromHtmlText(removeImgVideoHeadingsFromHtmlText(post.htmlContent)),
					250,
				) + '...';
		}
	}

	return json(posts);
};

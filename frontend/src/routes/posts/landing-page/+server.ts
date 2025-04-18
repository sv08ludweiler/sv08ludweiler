import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import { removeImgVideoHeadingsFromHtmlText, removeTagsFromHtmlText } from '$lib/utils';
import { json } from '@sveltejs/kit';
import qs from 'qs';
import type { ApiNewsResponse } from '../../../types/landing-page.types';
import type { RequestHandler } from './$types';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export const GET: RequestHandler = async ({ fetch }) => {
	const truncate = (str: string, len: number) =>
		str.substring(0, (str + ' ').lastIndexOf(' ', len));

	const teamPostQuery = qs.stringify({
		filters: {
			on_landingpage: {
				$eq: true,
			},
		},
		sort: [/*'updatedAt:desc', 'publishedAt:desc',*/ 'createdAt:desc'],
		pagination: {
			pageSize: 5,
		},
		populate: {
			teams: {
				fields: ['slug', 'display_name'],
				populate: ['age_group', 'divisions'],
				// 	populate: ['slug', 'age_group', 'divisions'],
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
	const posts = (await postsRequest.json()) as ApiNewsResponse;

	if (posts.data) {
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
	} else {
		return json({ data: [] } as ApiNewsResponse);
	}
};

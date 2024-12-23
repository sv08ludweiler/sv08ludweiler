import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import qs from 'qs';
import { compile } from 'mdsvex';
import type { ApiNewsData, ApiNewsResponse } from '../../../types/landing-page.types';
import { removeImgVideoHeadingsFromHtmlText, removeTagsFromHtmlText } from '$lib/utils';

export const GET: RequestHandler = async ({ fetch }) => {
	const truncate = (str: string, len: number) =>
		str.substring(0, (str + ' ').lastIndexOf(' ', len));

	const teamPostQuery = qs.stringify({
		filters: {
			on_landingpage: {
				$eq: true,
			},
		},
		sort: ['updatedAt:desc', 'publishedAt:desc', 'createdAt:desc'],
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
				post.htmlContent = await compile(post.content);
				post.previewText =
					truncate(
						removeTagsFromHtmlText(removeImgVideoHeadingsFromHtmlText(post.htmlContent.code)),

						250,
					) + '...';
			}
		}

		return json(posts);
	} else {
		return json({ data: [] } as ApiNewsResponse);
	}
};

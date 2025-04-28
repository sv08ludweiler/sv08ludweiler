import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import { error } from '@sveltejs/kit';
import qs from 'qs';
import type { PageServerLoad } from './$types';
import type { ApiAuthor, ApiPost } from '../../../types/post.types';
import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

export const load = (async ({ fetch, params }) => {
	const query = qs.stringify(
		{
			filters: {
				slug: {
					$eq: params.slug,
				},
			},
			populate: {
				header_image: true,
			},
		},
		{
			encodeValuesOnly: true, // prettify URL
		},
	);

	const pages = await (
		await fetch(`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}/api/pages?${query}`, {
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		})
	).json();

	if (pages?.meta?.total < 1) {
		throw error(404, {
			message: 'Page not found',
		});
	}

	if (!pages?.data?.length) {
		throw error(404, {
			message: 'Page not found',
		});
	}

	const page = pages?.data[0] as ApiPost & { author: ApiAuthor };

	let content = '';

	console.log('test', page.content);

	if (page?.content) {
		const parsed = await marked.parse(page.content);
		content = DOMPurify.sanitize(parsed, {
			// allow mailto via javascript on contacts page
			ALLOWED_URI_REGEXP:
				/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|xxx|javascript:location='mailto):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
		});
	}

	return {
		page,
		content,
	};
}) satisfies PageServerLoad;

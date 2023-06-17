import { STRAPI_API_TOKEN } from '$env/static/private';
import qs from 'qs';
import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';
import { error } from '@sveltejs/kit';

export const load = (async ({ fetch, params }) => {
	const query = qs.stringify(
		{
			filters: {
				slug: {
					$eq: params.slug
				}
			},
      populate: {
        header_image: true
      }
		},
		{
			encodeValuesOnly: true // prettify URL
		}
	);

	const pages = await (
		await fetch(`http://localhost:1337/api/pages?${query}`, {
			headers: {
				Authorization: `bearer ${STRAPI_API_TOKEN}`
			}
		})
	).json();

  

	if (pages.meta.total < 1) {
		throw error(404, {
			message: 'Page not found'
		});
	}

  const page = pages.data[0];

	console.log('page', params.slug, page);

	let content;
	if (page?.attributes?.content) {
		content = await compile(page.attributes.content);
	}

	return {
		page,
		content
	};
}) satisfies PageServerLoad;

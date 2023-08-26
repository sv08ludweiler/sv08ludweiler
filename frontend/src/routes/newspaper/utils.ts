import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import qs from 'qs';

export const loadNewspaperData = async (fetch, pageSize = 5, page = 1) => {
	const newsPaperQuery = qs.stringify({
		sort: ['publishedAt:desc', 'createdAt:desc', 'updatedAt:desc'],
		pagination: {
			pageSize: pageSize,
			page: page,
		},
		populate: '*',
	});

	const newsPaperResult = await fetch(
		`${env.FRONTEND_STRAPI_HOST}/api/newspapers?${newsPaperQuery}`,
		{
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		},
	);

	const newspaper = await newsPaperResult.json();

	if (newspaper?.data) {
		return json(newspaper);
	} else {
		return json([]);
	}
};

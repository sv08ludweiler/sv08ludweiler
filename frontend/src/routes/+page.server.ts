import { env } from '$env/dynamic/private';
import type { ApiNewsResponse } from '../types/landing-page.types';
import type { ApiPostsLandingPage } from '../types/ui-types';
import type { PageServerLoad } from './$types';
import type { ApiNewspaperResponse } from './newspaper/latest/newspaper.types';

export interface StrapiResponse<T> extends Response {
	data: T;
}

export interface JsonResponse<T> extends Response {
	Response: T;
}

const fetchJson = async <T>(
	fetch: typeof window.fetch,
	input: string | URL | globalThis.Request,
	init?: RequestInit,
) => {
	return fetch(input, init)
		.then((res) => res.json() as T)
		.catch((r) => {
			throw r;
		});
};

export const load = (async ({ fetch }) => {
	const landingPagePromise = fetchJson<ApiPostsLandingPage>(
		fetch,
		`${env.FRONTEND_STRAPI_HOST}/api/landingpage?populate=*`,
		{
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		},
	);

	const newsPromise = fetchJson<ApiNewsResponse>(fetch, `/posts/landing-page`);

	const newsPaperPromise = fetchJson<ApiNewspaperResponse>(fetch, `/newspaper/latest`);

	return {
		landingPage: landingPagePromise,
		news: newsPromise,
		newspaper: newsPaperPromise,
	};
}) satisfies PageServerLoad;

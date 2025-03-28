import type { ApiNewspaperResponse } from '../latest/newspaper.types';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const newsPaperPromise = fetch(`/newspaper/list?page=${params.page || 1}`);
	const newspaperResult = await newsPaperPromise;

	return {
		newspaper: (await newspaperResult.json()) as ApiNewspaperResponse,
	};
}) satisfies PageServerLoad;

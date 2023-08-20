import { loadNewspaperData } from '../utils';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, url }) => {
	const page = Number(url.searchParams.get('page') ?? '0');
	return loadNewspaperData(fetch, 5, page);
};

// export const POST: RequestHandler = async ({ fetch, request }) => {
// 	const body = await request.json();

// 	return loadNewspaperData(fetch, body?.pageSize);
// };

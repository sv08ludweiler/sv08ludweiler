import { loadNewspaperData } from '../utils';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	return await loadNewspaperData(fetch, 2);
};

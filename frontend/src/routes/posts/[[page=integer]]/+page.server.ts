import type { ApiPostResponse } from '../../../types/post.types';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const postResult = await fetch(`/posts/list?page=${params.page || 1}`);

	return {
		posts: (await postResult.json()) as ApiPostResponse,
	};
}) satisfies PageServerLoad;

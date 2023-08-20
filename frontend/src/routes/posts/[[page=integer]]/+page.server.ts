import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const postResult = await fetch(`/posts/list?page=${params.page || 1}`);
	console.log('load posts', postResult);

	return {
		posts: postResult.json(),
	};
}) satisfies PageServerLoad;

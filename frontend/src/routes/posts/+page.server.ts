import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	return {
		posts: await (await fetch('http://localhost:1337/api/posts?populate=*')).json()
	};
}) satisfies PageServerLoad;

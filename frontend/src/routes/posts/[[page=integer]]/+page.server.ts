import type { PageServerLoad } from "../../../../.svelte-kit/types/src/routes/$types";


export const load = (async ({ fetch, params }) => {

	return {
		posts: (await fetch(`http://localhost:5173/posts?page=${params.page || 1}`)).json(),
	};
}) satisfies PageServerLoad;

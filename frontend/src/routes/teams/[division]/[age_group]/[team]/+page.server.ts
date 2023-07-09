import { STRAPI_API_TOKEN } from '$env/static/private';
import qs from 'qs';
import type { PageServerLoad } from '../../../../$types';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';

export const load = (async ({ fetch, params }) => {
	const teamQuery = qs.stringify({
		filters: {
			slug: {
				$eq: params.team
			}
		},
		populate: '*'
	});

	const request = await fetch(`http://0.0.0.0:1337/api/teams?${teamQuery}`, {
		headers: {
			Authorization: `bearer ${STRAPI_API_TOKEN}`
		}
	});

	const team = await request.json();

	if (!team.data.length) {
		throw error(404, 'Team not found');
	}

	let teamContent;
	if (team.data[0].attributes.content) {
		teamContent = await compile(team.data[0].attributes.content);
	}

	const postsRequest = await fetch(
		`http://localhost:5173/teams/${params.division}/${params.age_group}/${params.team}/posts`
	);

	console.log({ postsRequest });

	const posts = await postsRequest.json();

	console.log({ posts });

	return {
		team: team.data[0].attributes,
		teamContent,
		posts
	};
}) satisfies PageServerLoad;

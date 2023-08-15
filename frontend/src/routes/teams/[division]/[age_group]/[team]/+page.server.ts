import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import qs from 'qs';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const teamQuery = qs.stringify({
		filters: {
			slug: {
				$eq: params.team,
			},
		},
		populate: '*',
	});

	const request = await fetch(`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}/api/teams?${teamQuery}`, {
		headers: {
			Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
		},
	});

	const team = await request.json();

	if (!team?.data?.length) {
		throw error(404, 'Team not found');
	}

	let teamContent;
	if (team.data[0].attributes.content) {
		teamContent = await compile(team.data[0].attributes.content);
	}

	const postsRequest = await fetch(
		`/teams/${params.division}/${params.age_group}/${params.team}/posts`,
	);

	const posts = await postsRequest.json();

	return {
		team: team.data[0].attributes,
		teamContent,
		posts,
	};
}) satisfies PageServerLoad;

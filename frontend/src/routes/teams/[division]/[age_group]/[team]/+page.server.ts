import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import { error } from '@sveltejs/kit';
import qs from 'qs';
import type { ApiPostResponse } from '../../../../../types/post.types';
import type { ApiTeam } from '../../../../../types/team.types';
import type { PageServerLoad } from './$types';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { fetchJson } from '$lib/utils';

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

	const team = (await request.json()) as { data: Array<ApiTeam> };

	if (!team?.data?.length) {
		throw error(404, 'Team not found');
	}

	let teamContent = '';
	if (team.data[0].content) {
		const parsed = await marked.parse(team.data[0].content);
		teamContent = DOMPurify.sanitize(parsed);
	}

	const postsRequest = fetchJson<ApiPostResponse>(
		fetch,
		`/teams/${params.division}/${params.age_group}/${params.team}/posts`,
	);

	return {
		team: team.data[0],
		teamContent,
		posts: postsRequest,
	};
}) satisfies PageServerLoad;

import { STRAPI_API_TOKEN } from '$env/static/private';
import qs from 'qs';
import type { PageServerLoad } from '../../../../$types';
import { error } from '@sveltejs/kit';

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
        throw error('Team not found');
    }

	return {
		team: team.data[0].attributes
	};
}) satisfies PageServerLoad;

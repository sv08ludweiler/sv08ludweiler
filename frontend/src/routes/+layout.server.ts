import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import qs from 'qs';
import type { LayoutServerLoad } from './$types';

// prerender all
export const prerender = 'auto';
export const trailingSlash = 'always';

export const load = (async ({ fetch }) => {
	const menuQuery = qs.stringify(
		{
			populate: {
				entries: {
					on: {
						// populate: {
						'navigation.team-navigation-item': {
							fields: ['title', 'group_by_age_group'],
							populate: {
								division: {
									fields: ['age_groups', 'teams', 'slug'],
									populate: {
										teams: {
											populate: ['age_group'],
											sort: ['display_name:asc', 'name:asc'],
											publicationState: 'live',
											groupBy: 'age_group.slug',
										},
										// age_groups: true,
									},
								},
								age_groups: true,
							},
						},
						'navigation.page-nested-navigation-item': {
							populate: {
								page: {
									populate: '*',
									publicationState: 'live',
								},
								children: {
									populate: '*',
									publicationState: 'live',
								},
							},
						},
						'navigation.external-navigation-item': {
							populate: '*',
							filters: {
								publishedAt: {
									$null: false,
								},
							},
						},
						'navigation.page-navigation-item': {
							populate: '*',
							filters: {
								publishedAt: {
									$null: false,
								},
							},
						},
					},
					// }
				},
			},
		},
		{
			encodeValuesOnly: true, // prettify URL
		},
	);
	const mainMenuPromise = fetch(
		`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}/api/main-menu?${menuQuery}`,
		{
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		},
	);

	const socialMediaQuery = qs.stringify({
		populate: {
			items: {
				populate: ['icon'],
			},
		},
	});
	const socialMediaPromise = fetch(
		`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}/api/footer-social-media?${socialMediaQuery}`,
		{
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		},
	);

	const supporterQuery = qs.stringify({
		populate: {
			items: {
				populate: ['image'],
			},
		},
	});
	const supporterPromise = fetch(
		`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}/api/supporter?${supporterQuery}`,
		{
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		},
	);

	const [mainMenuRequest, socialMediaRequest, supporterRequest] = await Promise.all([
		mainMenuPromise,
		socialMediaPromise,
		supporterPromise,
	]);

	const mainMenu = await mainMenuRequest.json();

	const supporter = await supporterRequest.json();
	const socialMedia = await socialMediaRequest.json();

	return {
		mainMenu: mainMenu.data,
		supporter: supporter.data,
		socialMedia: socialMedia.data,
	};
}) satisfies LayoutServerLoad;

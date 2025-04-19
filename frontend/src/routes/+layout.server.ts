import { env } from '$env/dynamic/private';
import { env as envPublic } from '$env/dynamic/public';
import qs from 'qs';
import type { LayoutServerLoad } from './$types';
import type { ApiMainMenuData, ApiMainMenuResponse } from '../types/ui-types';
import type { ApiSupporterData } from '../types/supporters.types';
import type { ApiSocialMediaData } from '../types/social-media.types';
import { fetchJson } from '$lib/utils';

// prerender all
// export const prerender = 'auto';
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
								// age_groups: '*',
								division: {
									// populate: ['teams', 'age_groups'],
									populate: {
										teams: {
											filters: {
												publishedAt: {
													$notNull: true,
												},
											},
											populate: {
												// divisions: true,
												age_group: true,
											},
											sort: ['display_name:asc', 'name:asc'],
											// groupBy: 'age_group.slug',
										},
										age_groups: {
											populate: true,
										},
									},
								},
								age_groups: {
									populate: true,
								},
							},
						},
						'navigation.page-nested-navigation-item': {
							populate: {
								page: {
									populate: '*',
									// filters: {
									// 	publishedAt: {
									// 		$notNull: true,
									// 	},
									// },
								},
								children: {
									populate: {
										page: {
											filters: {
												publishedAt: {
													$notNull: true,
												},
											},
										},
									},
								},
							},
						},
						'navigation.external-navigation-item': {
							populate: '*',
						},
						// 'navigation.page-navigation-item': {
						// 	// populate: '*',
						// 	// filters: {
						// 	// 	publishedAt: {
						// 	// 		$null: false,
						// 	// 	},
						// 	// },
						// },
						// },
					},
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

	const socialMediaPromise = fetchJson<{ data: ApiSocialMediaData }>(
		fetch,
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

	const supporterPromise = fetchJson<{ data: ApiSupporterData }>(
		fetch,
		`${envPublic.PUBLIC_FRONTEND_STRAPI_HOST}/api/supporter?${supporterQuery}`,
		{
			headers: {
				Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
			},
		},
	);

	const [mainMenuRequest] = await Promise.all([mainMenuPromise]);

	const mainMenu = (await mainMenuRequest.json()) as ApiMainMenuResponse;

	return {
		mainMenu: mainMenu.data as ApiMainMenuData,
		supporter: supporterPromise,
		socialMedia: socialMediaPromise,
	};
}) satisfies LayoutServerLoad;

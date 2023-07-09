import { STRAPI_API_TOKEN } from '$env/static/private';
import qs from 'qs';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const menuQuery = qs.stringify(
		{
			populate: {
				entries: {
					on: {
						// populate: {
						'navigation.team-navigation-item': {
							fields: ['title'],
							populate: {
								division: {
									fields: ['age_groups', 'teams', 'slug'],
									populate: {
										teams: {
											populate: ['age_group']
										},
										age_groups: true
									}
								}
							}
						},
						'navigation.page-nested-navigation-item': {
							populate: {
								page: {
									populate: '*'
								},
								children: {
									populate: '*'
								}
							}
						},
						'navigation.external-navigation-item': {
							populate: '*'
						},
						'navigation.page-navigation-item': {
							populate: '*'
						}
					}
					// }
				}
			}
		},
		{
			encodeValuesOnly: true // prettify URL
		}
	);

	const request = await fetch(`http://0.0.0.0:1337/api/main-menu?${menuQuery}`, {
		headers: {
			Authorization: `bearer ${STRAPI_API_TOKEN}`
		}
	});

	const mainMenu = await request.json();

	return {
		// navigation: await (
		// 	await fetch('http://0.0.0.0:1337/api/navigation/render/1?type=TREE', {
		// 		headers: {
		// 			Authorization: `bearer ${STRAPI_API_TOKEN}`
		// 		}
		// 	})
		// ).json(),
		mainMenu: mainMenu.data
	};
}) satisfies LayoutServerLoad;

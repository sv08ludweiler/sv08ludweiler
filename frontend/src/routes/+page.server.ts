import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const landingPagePromise = fetch(`${env.FRONTEND_STRAPI_HOST}/api/landingpage?populate=*`, {
		headers: {
			Authorization: `bearer ${env.STRAPI_API_TOKEN}`,
		},
	});

	const newsPromise = fetch(`/posts/landing-page`);

	const newsPaperPromise = fetch(`/newspaper/latest`);

	const [landingPageResult, newsResult, newsPaperResult] = await Promise.all([
		landingPagePromise,
		newsPromise,
		newsPaperPromise,
	]);

	const landingPage = await landingPageResult.json();
	const news = await newsResult.json();

	console.log({ news });
	

	const newspaper = newsPaperResult.json();

	// const promises = [];
	// if (landingPage?.data?.attributes?.headline_widgets.length) {
	// 	for (const widget of landingPage.data.attributes.headline_widgets)
	// 		promises.push(
	// 			fetch(
	// 				`https://www.fupa.net/fupa/widget.php?val=${widget.widget_id}&p=start&act=liveticker&fupa_widget_header=0&fupa_widget_navi=0&fupa_widget_div=widget-3cf35dbb-03c5-4519-a7c2-1157cc044971&url=localhost`,
	// 			),
	// 		);
	// }

	// const nextGames = await Promise.all(promises);

	return {
		landingPage,
		news,
		newspaper,
		// nextGames,
	};
}) satisfies PageServerLoad;

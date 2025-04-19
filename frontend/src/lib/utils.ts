import type { StrapiImage } from './types/strapi.types';
import { env } from '$env/dynamic/public';

export const generateImageSrcSet = (image: StrapiImage): string | undefined => {
	if (image.formats) {
		return (
			Object.values(image.formats)
				.map((value) => `${env.PUBLIC_FRONTEND_STRAPI_HOST + value.url} ${value.width}w`)
				.join(', ') +
			// add original image
			`, ${env.PUBLIC_FRONTEND_STRAPI_HOST + image.url} ${image.width}w`
		);
	}
	return undefined;
};

export const generateImageSize = (image: StrapiImage): string | undefined => {
	if (image.formats) {
		// return (
		// 	Object.values(image.formats)
		// 		.map((value) => `(max-width: ${Number(value.width) + 100}px) ${value.width}px`)
		// 		.join(', ') +
		// 	// add original image
		// 	`, 1500px`
		// );

		return '(max-width: 400px) 245px, (max-width: 600px) 500px, (max-width: 1000px) 750px, (max-width: 1300px) 1000px, 1300px';
	}

	return undefined;
};

export const removeImgVideoHeadingsFromHtmlText = (str: string) =>
	str
		.replace(/<img[^>]*>/g, '')
		.replace(/<video[^>]*>/g, '')
		.replace(/<h[^>]*>.*<\/h[^>]*>/g, '');

export const removeTagsFromHtmlText = (str: string) =>
	str.replaceAll(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '');

export const fetchJson = async <T>(
	fetch: typeof window.fetch,
	input: string | URL | globalThis.Request,
	init?: RequestInit,
) => {
	return fetch(input, init)
		.then((res) => res.json() as T)
		.catch((r) => {
			throw r;
		});
};

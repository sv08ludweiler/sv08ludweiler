import type { StrapiImage } from '$lib/types/strapi.types';
import type { ApiMeta } from '../../../types/post.types';

export interface ApiNewspaperEntity {
	id: number;
	title: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	documentId: string;
	file: {
		id: 10;
		name: string;
		alternativeText?: string;
		caption?: string;
		width?: string;
		height?: string;
		formats?: null;
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url?: string;
		previewUrl: null;
		provider: string;
		provider_metadata: null;
		createdAt: string;
		updatedAt: string;
		documentId: string;
		publishedAt?: string;
	};
	header_image: StrapiImage;
}

export type ApiNewspaperData = Array<ApiNewspaperEntity>;

export interface ApiNewspaperResponse {
	data: ApiNewspaperData;
	meta: ApiMeta;
}

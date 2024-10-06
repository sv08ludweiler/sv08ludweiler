import type { StrapiImage } from '$lib/types/strapi.types';

export interface ApiSupporterEntity {
	id: number;
	title: string;
	link: string;
	highlighted: boolean;
	image: StrapiImage;
}

export interface ApiSupporterData {
	id: 1;
	createdAt: '2023-07-16T15:08:56.819Z';
	updatedAt: '2023-07-16T15:25:54.639Z';
	publishedAt: '2023-07-16T15:25:54.638Z';
	documentId: 'yynf6jp7pef04t6cwmwaekkx';
	items: Array<ApiSupporterEntity>;
}

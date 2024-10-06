import type { StrapiImage } from '$lib/types/strapi.types';

export interface ApiSocialMediaEntity {
	id: number;
	name: string;
	link: string;
	icon: StrapiImage;
}

export interface ApiSocialMediaData {
	id: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	documentId: string;
	items: Array<ApiSocialMediaEntity>;
}

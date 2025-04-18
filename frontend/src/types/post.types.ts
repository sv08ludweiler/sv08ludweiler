import type { StrapiImage } from '$lib/types/strapi.types';
import type { ApiTeam } from './team.types';

export type ApiMeta = {
	pagination?: { page: number; pageSize: number; pageCount: number; total: number };
};

export interface ApiAuthor {
	id: number;
	username: string;
	email: string;
	provider: string;
	confirmed: true;
	blocked: false;
	createdAt: string;
	updatedAt: string;
	name: string;
	firstname: string;
	documentId: string;
	publishedAt?: string;
}

export interface ApiPost {
	updatedAt: string;
	publishedAt: string;
	createdAt: string;
	id: number;
	title: string;
	slug: string;
	content: string;
	on_landingpage: boolean;
	documentId: string;
	teams: Array<ApiTeam>;
	header_image?: StrapiImage;

	// additional (generated dynamically)
	htmlContent: string;
	previewText: string;
}

export interface ApiPostResponse {
	data: Array<ApiPost>;
	meta: ApiMeta;
}

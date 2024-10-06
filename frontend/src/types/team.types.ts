import type { StrapiImage } from '$lib/types/strapi.types';
import type { ApiImageData } from './landing-page.types';
import type { ApiAgeGroup, ApiDivision } from './ui-types';

export interface ApiTrainer {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	phone: string;
	phone_public?: string;
	mail_public?: string;
	documentId: string;
	publishedAt?: string;
}

export interface ApiTraining {
	id: number;
	day: string;
	start: string;
	end: string;
	location?: string;
}

export interface ApiWidgetFussballDe {
	id: number;
	widgetid: string;
	title: string;
	type?: string;
}

export interface ApiWidgetFupaNextGame {
	id: number;
	name: string;
	widget_id: string;
}

export interface ApiTeam {
	id: number;
	name: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	league: string;
	display_name: string;
	content: string;
	documentId: string;
	trainers: Array<ApiTrainer>;
	supervisors: Array<ApiTrainer>;
	training: Array<ApiTraining>;
	widgetFussballDe: Array<ApiWidgetFussballDe>;
	age_group: ApiAgeGroup;
	divisions: Array<ApiDivision>;
	header_image: StrapiImage;
	fupa_widget_next_game: ApiWidgetFupaNextGame;
	localizations: [];
}

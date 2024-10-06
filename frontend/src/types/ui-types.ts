import type { ApiMeta } from "./post.types";

export interface ApiPostsLandingPage {
	data: {
		id: number;
		Headline: string;
		Content: string;
		slug: string;
		Vereinsspielplan: {
			id: number;
			widgetid: string;
			title: string;
			type: 'competition' | 'old';
		};
		headline_widgets: Array<{
			id: number;
			name: string;
			widget_id: string;
		}>;
	};
}

export interface ApiPageData {
	id: number;
	title: string;
	slug: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
}

export interface ApiNavigationItem {
	id: number;
	title: string;
	page: ApiPageData;
}

export interface ApiMainMenuNestedNavigatinItem {
	id: number;
	__component: 'navigation.page-nested-navigation-item';
	page: {
		id: number;
		title: string;
		page: ApiPageData;
	};
	children: Array<ApiNavigationItem>;
}

export interface ApiAgeGroup {
	id: number;
	name: string;
	slug: string;
	alternativeName: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface ApiTeamNoRelations {
	id: number;
	display_name: string;
	name: string;
	slug: string;
	league: string;
	content: null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	age_group: ApiAgeGroup;
}

export interface ApiDivision {
	id: number;
	name: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	documentId: string;
	teams: Array<ApiTeamNoRelations>;
	age_groups: Array<ApiAgeGroup>;
}

export interface ApiMainMenuTeamNavigationItem {
	id: number;
	__component: 'navigation.team-navigation-item';
	title: string;
	group_by_age_group: boolean;
	division: ApiDivision;
	age_groups?: Array<ApiAgeGroup>;
}

export interface ApiMainMenuData {
	id: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	entries: [
		(
			| ApiMainMenuNestedNavigatinItem
			| ApiMainMenuTeamNavigationItem
			| {
					id: number;
					__component: 'navigation.external-navigation-item';
					title: string;
					link: string;
			  }
		),
		{
			id: number;
			__component: 'navigation.page-navigation-item';
			title: string;
			link: string;
			page: {
				slug: string;
			};
		},
	];
}

export interface ApiMainMenuResponse {
	data: ApiMainMenuData,
	meta: ApiMeta
}

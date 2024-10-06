import type { ApiMeta, ApiPost } from './post.types';

export interface ApiWidget {
	id: number;
	name: string;
	widget_id: string;
}

export interface ApiLandingPageData {
	id: number;
	// attributes: {
	Headline: string;
	Content: string | null;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	Vereinsspielplan: {
		id: 1;
		widgetid: string;
		title: string;
		type: 'club-matches' | 'old';
	};
	headline_widgets: Array<ApiWidget>;
	localizations: {
		data: [];
	};
	// };
}

export interface ApiImageFormatData {
	ext: string; //  '.jpg'
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}

export interface ApiImageData {
	id: number;

	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: {
		large: ApiImageFormatData;
		small: ApiImageFormatData;
		medium: ApiImageFormatData;
		thumbnail: ApiImageFormatData;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: string | null;
	createdAt: string;
	updatedAt: string;
	// related: [
	// 	{
	// 		__type: 'api::post.post';
	// 		id: 21;
	// 		title: 'Ruhe in Frieden lieber Sascha!';
	// 		slug: 'post-14';
	// 		content: 'In stiller Trauer nehmen wir Abschied von unserem ehemaligen Spieler und Mitglied Sascha Schneider, der vorgestern im Alter von nur 38 Jahren verstorben ist. \n\nSascha begann seine fußballerische Laufbahn als Kind beim SV08 Ludweiler, und spielte bis 2018 für unseren Verein.\n\nUnser tiefes Mitgefühl gilt seiner Familie, seinen Angehörigen und Freunden.\n\nRIP lieber Sascha! Wir werden Dich nicht vergessen!';
	// 		on_landingpage: true;
	// 		createdAt: '2024-12-18T21:10:52.393Z';
	// 		updatedAt: '2024-12-18T21:11:01.119Z';
	// 		publishedAt: '2024-12-18T21:11:01.110Z';
	// 	},
	// ];
}

export type ApiNewsData = Array<ApiPost>;

export interface ApiNewsResponse {
	data: ApiNewsData;
	meta?: ApiMeta;
}

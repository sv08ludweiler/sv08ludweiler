export interface StrapiImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string;
	size: number;
	width: number;
	height: number;
}

export interface StrapiImage extends StrapiImageFormat {
	alternativeText: string;
	caption: string;
	createdAt: string;
	formats: {
		large: StrapiImageFormat;
		small: StrapiImageFormat;
		medium: StrapiImageFormat;
		thumbnail: StrapiImageFormat;
	};
	previewUrl: string;
	provider: string;
	provider_metadata: string;
	createdAt: string;
	updatedAt: string;
}

// export interface AgeGroup {
// 	id: number;
// 	attributes: {
// 		name: string;

// 		slug: string;
// 		alternativeName: string;
// 		createdAt: string;
// 		updatedAt: string;
// 		publishedAt: string;
// 	};
// }

// export interface Team {
// 	id: number;
// 	attributes: {
// 		name: string;
// 		display_name: string;
// 		slug: string;
// 		age_group: {
// 			data: AgeGroup;
// 		};
// 	};
// }

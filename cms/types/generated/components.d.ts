import type { Schema, Struct } from '@strapi/strapi';

export interface ContentPostPreview extends Struct.ComponentSchema {
	collectionName: 'components_content_post_previews';
	info: {
		displayName: 'Post-Preview';
	};
	attributes: {
		limit: Schema.Attribute.Integer & Schema.Attribute.Required & Schema.Attribute.DefaultTo<3>;
		posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
		title: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

export interface HistoryHistoryEntry extends Struct.ComponentSchema {
	collectionName: 'components_history_history_entries';
	info: {
		displayName: 'History-Entry';
	};
	attributes: {
		content: Schema.Attribute.RichText;
		date: Schema.Attribute.Date & Schema.Attribute.Required;
		title: Schema.Attribute.String;
	};
}

export interface NavigationExternalNavigationItem extends Struct.ComponentSchema {
	collectionName: 'components_navigation_external_navigation_items';
	info: {
		displayName: 'External Navigation Item';
	};
	attributes: {
		link: Schema.Attribute.String & Schema.Attribute.Required;
		title: Schema.Attribute.String;
	};
}

export interface NavigationPageNavigationItem extends Struct.ComponentSchema {
	collectionName: 'components_navigation_page_navigation_items';
	info: {
		displayName: 'Page Navigation Item';
	};
	attributes: {
		page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
		title: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

export interface NavigationPageNestedNavigationItem extends Struct.ComponentSchema {
	collectionName: 'components_navigation_page_nested_navigation_items';
	info: {
		description: '';
		displayName: 'Page Nested Navigation Item';
	};
	attributes: {
		children: Schema.Attribute.Component<'navigation.page-navigation-item', true>;
		page: Schema.Attribute.Component<'navigation.page-navigation-item', false>;
	};
}

export interface NavigationTeamNavigationItem extends Struct.ComponentSchema {
	collectionName: 'components_navigation_team_navigation_items';
	info: {
		description: '';
		displayName: 'Team Navigation Item';
	};
	attributes: {
		age_groups: Schema.Attribute.Relation<'oneToMany', 'api::age-group.age-group'>;
		division: Schema.Attribute.Relation<'oneToOne', 'api::division.division'>;
		group_by_age_group: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
		teams: Schema.Attribute.Relation<'oneToMany', 'api::team.team'>;
		title: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

export interface SocialMediaSocialMediaItem extends Struct.ComponentSchema {
	collectionName: 'components_social_media_social_media_items';
	info: {
		displayName: 'Social Media Item';
		icon: 'medium';
	};
	attributes: {
		icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
		link: Schema.Attribute.String & Schema.Attribute.Required;
		name: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

export interface SupporterSupporterItem extends Struct.ComponentSchema {
	collectionName: 'components_supporter_supporter_items';
	info: {
		description: '';
		displayName: 'Supporter Item';
	};
	attributes: {
		highlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
		image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
		link: Schema.Attribute.String;
		title: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

export interface TrainingTrainingslot extends Struct.ComponentSchema {
	collectionName: 'components_training_trainingslots';
	info: {
		description: '';
		displayName: 'Trainingslot';
	};
	attributes: {
		day: Schema.Attribute.String & Schema.Attribute.Required;
		end: Schema.Attribute.Time;
		location: Schema.Attribute.String;
		start: Schema.Attribute.Time & Schema.Attribute.Required;
	};
}

export interface WidgetFupaWidget extends Struct.ComponentSchema {
	collectionName: 'components_widget_fupa_widgets';
	info: {
		displayName: 'Fupa Widget';
	};
	attributes: {
		name: Schema.Attribute.String & Schema.Attribute.Required;
		widget_id: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

export interface WidgetResultsFussballDe extends Struct.ComponentSchema {
	collectionName: 'components_widget_results_fussball_des';
	info: {
		description: '';
		displayName: 'widget-fussball-de';
	};
	attributes: {
		title: Schema.Attribute.String;
		type: Schema.Attribute.Enumeration<
			['competition', 'team-matches', 'next-match', 'club-matches', 'table', 'news', 'squad', 'old']
		> &
			Schema.Attribute.Required &
			Schema.Attribute.DefaultTo<'old'>;
		widgetid: Schema.Attribute.String & Schema.Attribute.Required;
	};
}

declare module '@strapi/strapi' {
	export module Public {
		export interface ComponentSchemas {
			'content.post-preview': ContentPostPreview;
			'history.history-entry': HistoryHistoryEntry;
			'navigation.external-navigation-item': NavigationExternalNavigationItem;
			'navigation.page-navigation-item': NavigationPageNavigationItem;
			'navigation.page-nested-navigation-item': NavigationPageNestedNavigationItem;
			'navigation.team-navigation-item': NavigationTeamNavigationItem;
			'social-media.social-media-item': SocialMediaSocialMediaItem;
			'supporter.supporter-item': SupporterSupporterItem;
			'training.trainingslot': TrainingTrainingslot;
			'widget.fupa-widget': WidgetFupaWidget;
			'widget.results-fussball-de': WidgetResultsFussballDe;
		}
	}
}

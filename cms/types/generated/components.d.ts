import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentPostPreview extends Schema.Component {
	collectionName: 'components_content_post_previews';
	info: {
		displayName: 'Post-Preview';
	};
	attributes: {
		title: Attribute.String & Attribute.Required;
		posts: Attribute.Relation<'content.post-preview', 'oneToMany', 'api::post.post'>;
		limit: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<3>;
	};
}

export interface NavigationExternalNavigationItem extends Schema.Component {
	collectionName: 'components_navigation_external_navigation_items';
	info: {
		displayName: 'External Navigation Item';
	};
	attributes: {
		title: Attribute.String;
		link: Attribute.String & Attribute.Required;
	};
}

export interface NavigationPageNavigationItem extends Schema.Component {
	collectionName: 'components_navigation_page_navigation_items';
	info: {
		displayName: 'Page Navigation Item';
	};
	attributes: {
		title: Attribute.String & Attribute.Required;
		page: Attribute.Relation<'navigation.page-navigation-item', 'oneToOne', 'api::page.page'>;
	};
}

export interface NavigationPageNestedNavigationItem extends Schema.Component {
	collectionName: 'components_navigation_page_nested_navigation_items';
	info: {
		displayName: 'Page Nested Navigation Item';
		description: '';
	};
	attributes: {
		children: Attribute.Component<'navigation.page-navigation-item', true>;
		page: Attribute.Component<'navigation.page-navigation-item'>;
	};
}

export interface NavigationTeamNavigationItem extends Schema.Component {
	collectionName: 'components_navigation_team_navigation_items';
	info: {
		displayName: 'Team Navigation Item';
		description: '';
	};
	attributes: {
		title: Attribute.String & Attribute.Required;
		division: Attribute.Relation<
			'navigation.team-navigation-item',
			'oneToOne',
			'api::division.division'
		>;
		age_groups_filter: Attribute.Relation<
			'navigation.team-navigation-item',
			'oneToMany',
			'api::age-group.age-group'
		>;
		teams_filter: Attribute.Relation<
			'navigation.team-navigation-item',
			'oneToMany',
			'api::team.team'
		>;
		show_age_group: Attribute.Boolean & Attribute.DefaultTo<true>;
	};
}

export interface TrainingTrainingslot extends Schema.Component {
	collectionName: 'components_training_trainingslots';
	info: {
		displayName: 'Trainingslot';
		description: '';
	};
	attributes: {
		day: Attribute.String & Attribute.Required;
		start: Attribute.Time & Attribute.Required;
		end: Attribute.Time;
		location: Attribute.String;
	};
}

export interface WidgetResultsFussballDe extends Schema.Component {
	collectionName: 'components_widget_results_fussball_des';
	info: {
		displayName: 'widget-fussball-de';
		description: '';
	};
	attributes: {
		widgetid: Attribute.String & Attribute.Required;
		title: Attribute.String;
	};
}

declare module '@strapi/strapi' {
	export module Shared {
		export interface Components {
			'content.post-preview': ContentPostPreview;
			'navigation.external-navigation-item': NavigationExternalNavigationItem;
			'navigation.page-navigation-item': NavigationPageNavigationItem;
			'navigation.page-nested-navigation-item': NavigationPageNestedNavigationItem;
			'navigation.team-navigation-item': NavigationTeamNavigationItem;
			'training.trainingslot': TrainingTrainingslot;
			'widget.results-fussball-de': WidgetResultsFussballDe;
		}
	}
}

<script lang="ts">
	import Card, { Content } from '@smui/card';
	import type { PageData } from './$types';
	import { PUBLIC_STRAPI_HOST } from '$env/static/public';
	import event from '$lib/assets/icons/event.svg';
	import ContentCardView from '$lib/views/ContentCardView.svelte';

	export let data: PageData;
</script>

<ContentCardView
	headerImage={data.page.attributes?.header_image?.data}
	title={data.page.attributes.title}
	content={data.content ? data.content.code : ''}
	publishedAt={data.page.attributes.updatedAt}
/>

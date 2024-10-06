<script lang="ts">
	import ContentCardView from '$lib/views/ContentCardView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>SV 08 Ludweiler - {data.page.title}</title>
	<meta name="description" content={data.page.title} />
</svelte:head>

<ContentCardView
	headerImage={data.page?.header_image}
	title={data.page.title}
	content={data.content ? data.content.code : ''}
	publishedAt={data.page.updatedAt}
/>

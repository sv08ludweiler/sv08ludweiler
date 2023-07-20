<script lang="ts">
	import ContentCardView from '$lib/views/ContentCardView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
  <title>SV 08 Ludweiler - {data.page.attributes.title}</title>
  <meta name="description" content={data.page.attributes.title} />
</svelte:head>

<ContentCardView
	headerImage={data.page.attributes?.header_image?.data?.attributes}
	title={data.page.attributes.title}
	content={data.content ? data.content.code : ''}
	publishedAt={data.page.attributes.updatedAt}
/>

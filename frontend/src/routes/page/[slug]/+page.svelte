<script lang="ts">
	import ContentCardView from '$lib/views/ContentCardView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ContentCardView
	headerImage={data.page.attributes?.header_image?.data?.attributes}
	title={data.page.attributes.title}
	content={data.content ? data.content.code : ''}
	publishedAt={data.page.attributes.updatedAt}
/>

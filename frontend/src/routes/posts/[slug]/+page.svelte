<script lang="ts">
	import ContentCardView from '$lib/views/ContentCardView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>SV 08 Ludweiler - News: {data.post.title}</title>
	<meta name="description" content={data.post.title} />
</svelte:head>

<ContentCardView
	headerImage={data.post?.header_image}
	title={data.post.title}
	content={data.content ? data.content.code : ''}
	author={data.post?.author ? data.post?.author.firstname + ' ' + data.post?.author.name : ''}
	publishedAt={data.post.publishedAt}
/>

<script lang="ts">
	import ContentCardView from '$lib/views/ContentCardView.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
  <title>SV 08 Ludweiler - News: {data.post.attributes.title}</title>
  <meta name="description" content={data.post.attributes.title} />
</svelte:head>

<ContentCardView
	headerImage={data.post.attributes?.header_image?.data?.attributes}
	title={data.post.attributes.title}
	content={data.content ? data.content.code : ''}
	author={data.post?.attributes?.author?.data
		? data.post?.attributes?.author.data.attributes.firstname +
		  ' ' +
		  data.post?.attributes?.author.data.attributes.name
		: ''}
	publishedAt={data.post.attributes.publishedAt}
/>
